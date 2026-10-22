// Fetch REAL NEO catalog from NASA NeoWs browse + JPL Sentry risk list.
// Writes split data parts + index into the novanexus-space clone.
const fs = require('fs');
const path = require('path');

const REPO = __dirname;
const TARGET = 1600;
const PAGE_SIZE = 20;

function readKey() {
  try {
    const env = fs.readFileSync(path.join(REPO, '.env'), 'utf8');
    const m = env.match(/VITE_NASA_API_KEY\s*=\s*"?([^"\s]+)"?/);
    if (m && m[1] && m[1] !== 'DEMO_KEY') return { key: m[1], personal: true };
  } catch (e) {}
  return { key: 'DEMO_KEY', personal: false };
}

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function getJson(url, tries = 3) {
  for (let i = 0; i < tries; i++) {
    const res = await fetch(url);
    if (res.ok) return res.json();
    if (res.status === 429) { await sleep(5000 * (i + 1)); continue; }
    if (i === tries - 1) throw new Error('HTTP ' + res.status);
    await sleep(1000);
  }
}

const norm = (s) => (s || '').toLowerCase().replace(/[^a-z0-9]/g, '');

(async () => {
  const { key, personal } = readKey();
  const maxPages = personal ? 90 : 48;
  console.log('API key type:', personal ? 'personal' : 'DEMO_KEY', '| max pages:', maxPages);

  // 1) JPL Sentry risk list (real Torino / Palermo / impact probability, by designation)
  const sentry = await getJson('https://ssd-api.jpl.nasa.gov/sentry.api');
  const sentryByDes = new Map();
  for (const row of sentry.data || []) {
    sentryByDes.set(norm(row.des), row);
    if (row.fullname) {
      const paren = row.fullname.match(/\(([^)]+)\)/);
      if (paren) sentryByDes.set(norm(paren[1]), row);
    }
  }
  console.log('Sentry objects loaded:', (sentry.data || []).length);

  // 2) Page through NeoWs browse
  const GROUPS = { ATE: 'Aten', APO: 'Apollo', AMO: 'Amor', ATI: 'Atira' };
  const records = [];
  const seen = new Set();
  let sentryHits = 0;

  for (let page = 0; page < maxPages && records.length < TARGET; page++) {
    const url = `https://api.nasa.gov/neo/rest/v1/neo/browse?page=${page}&size=${PAGE_SIZE}&api_key=${key}`;
    const data = await getJson(url);
    const objs = data.near_earth_objects || [];
    if (!objs.length) break;
    for (const o of objs) {
      if (records.length >= TARGET) break;
      if (seen.has(o.neo_reference_id)) continue;
      const cls = o.orbital_data && o.orbital_data.orbit_class ? o.orbital_data.orbit_class.orbit_class_type : '';
      const group = GROUPS[cls];
      if (!group) continue;
      const approaches = o.close_approach_data || [];
      if (!approaches.length) continue;
      // most notable approach = smallest lunar miss distance
      let best = approaches[0];
      for (const a of approaches) {
        if (parseFloat(a.miss_distance.lunar) < parseFloat(best.miss_distance.lunar)) best = a;
      }
      seen.add(o.neo_reference_id);
      const diamMin = o.estimated_diameter.meters.estimated_diameter_min;
      const diamMax = o.estimated_diameter.meters.estimated_diameter_max;
      const kmh = parseFloat(best.relative_velocity.kilometers_per_hour);
      let year = 0;
      const fod = o.orbital_data && o.orbital_data.first_observation_date;
      if (fod && /^\d{4}/.test(fod)) year = parseInt(fod.slice(0, 4), 10);
      if (!year) { const ym = (o.name || '').match(/(\d{4})/); if (ym) year = parseInt(ym[1], 10); }
      const sRow = sentryByDes.get(norm(o.designation)) || sentryByDes.get(norm(o.name));
      if (sRow) sentryHits++;
      const hazardous = !!o.is_potentially_hazardous_asteroid;
      records.push({
        id: o.neo_reference_id,
        name: o.name.replace(/[()]/g, ''),
        designation: o.designation,
        discoveryYear: year,
        estimatedDiameterMeters: { min: Math.round(diamMin), max: Math.round(diamMax) },
        velocityKmS: parseFloat(best.relative_velocity.kilometers_per_second),
        velocityMph: Math.round(kmh * 0.621371),
        missDistanceAU: parseFloat(best.miss_distance.astronomical),
        missDistanceKm: parseFloat(best.miss_distance.kilometers),
        missDistanceLunarDistances: parseFloat(best.miss_distance.lunar),
        isHazardous: hazardous,
        closeApproachDate: best.close_approach_date,
        torinoScale: sRow ? parseInt(sRow.torino, 10) || 0 : 0,
        palermoScale: sRow ? parseFloat(sRow.ps_cum) : null,
        impactProbabilityPercent: sRow ? parseFloat(sRow.ip) * 100 : 0,
        extinctionScalePercent: Math.round((diamMax / 100) * 100) / 100,
        composition: null,
        orbitalGroup: group,
        riskAnalysis: sRow
          ? 'Listed on the JPL Sentry impact risk table. Automated monitoring with ongoing orbit refinement.'
          : hazardous
            ? 'Classified potentially hazardous by NASA criteria (size and Earth orbit proximity). Continued telescopic tracking.'
            : 'Automated monitoring. No impact risk identified in the JPL Sentry system based on current orbital data.',
        mitigationStrategy: sRow
          ? 'Continue Sentry monitoring; no action required unless the risk assessment changes.'
          : 'None required. Continue standard telescopic tracking.',
      });
    }
    if (page % 10 === 0) console.log('page', page, 'records so far:', records.length);
    await sleep(200);
  }

  console.log('TOTAL records:', records.length, '| hazardous:', records.filter(r => r.isHazardous).length, '| sentry matched:', sentryHits);

  // 3) Write split parts (each under ~95 KB) + index
  const partsDir = path.join(REPO, 'src/data/neoDataParts');
  fs.mkdirSync(partsDir, { recursive: true });
  const PER = 130;
  const partNames = [];
  for (let i = 0; i < records.length; i += PER) {
    const chunk = records.slice(i, i + PER);
    const n = partNames.length + 1;
    const body = chunk.map(r => '  ' + JSON.stringify(r)).join(',\n');
    const content = `import { NeoObject } from '../../types';\n\n// Real near-Earth object catalog data from NASA NeoWs (browse) + JPL Sentry.\n// Regenerate with fetch_neos.cjs. Part ${n}.\nexport const NEO_PART_${n}: NeoObject[] = [\n${body}\n];\n`;
    fs.writeFileSync(path.join(partsDir, `part${n}.ts`), content);
    partNames.push(n);
    console.log(`part${n}.ts bytes:`, content.length);
  }
  const imports = partNames.map(n => `import { NEO_PART_${n} } from './neoDataParts/part${n}';`).join('\n');
  const spreads = partNames.map(n => `...NEO_PART_${n}`).join(', ');
  const index = `import { NeoObject } from '../types';\n${imports}\n\n// Real tracked Near Earth Objects: catalog fetched from NASA's NeoWs browse\n// endpoint (names, diameters, velocities, miss distances, hazard flags), with\n// Torino scale, Palermo scale, and impact probability joined from NASA JPL's\n// Sentry risk table for the objects listed there. Objects not on the Sentry\n// table have no identified impact risk (Torino 0, impact probability 0) and a\n// null Palermo scale. Regenerate with fetch_neos.cjs at the repo root.\nexport const NEO_DATABASE: NeoObject[] = [${spreads}];\n`;
  fs.writeFileSync(path.join(REPO, 'src/data/neoData.ts'), index);
  console.log('index written, parts:', partNames.length);

})().catch(e => { console.error('FAILED:', e.message); process.exit(1); });
