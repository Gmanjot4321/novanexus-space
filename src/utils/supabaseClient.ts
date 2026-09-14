import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { NeoObject, UniverseComponent } from '../types';
import { NEO_DATABASE } from '../data/neoData';
import { UNIVERSE_COMPONENTS } from '../data/universeData';

// Safe environment variable retrieval
const env = (import.meta as any).env || {};
const supabaseUrl = env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = env.VITE_SUPABASE_ANON_KEY || '';
const nasaApiKey = env.VITE_NASA_API_KEY || 'DEMO_KEY';

let supabaseClient: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient | null {
  if (!supabaseClient && supabaseUrl && supabaseAnonKey) {
    try {
      supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
    } catch (e) {
      console.warn('Supabase initialization deferred or failed:', e);
    }
  }
  return supabaseClient;
}

export function isSupabaseConnected(): boolean {
  return Boolean(supabaseUrl && supabaseAnonKey);
}

// Local cache for custom user-uploaded textures
const LOCAL_STORAGE_TEXTURES_KEY = 'cosmos_custom_planet_textures';

export function getStoredPlanetTextures(): Record<string, string> {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_TEXTURES_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export async function savePlanetTexture(planetId: string, textureUrl: string): Promise<void> {
  // Store locally
  try {
    const current = getStoredPlanetTextures();
    current[planetId] = textureUrl;
    localStorage.setItem(LOCAL_STORAGE_TEXTURES_KEY, JSON.stringify(current));
    window.dispatchEvent(new CustomEvent('planet-texture-updated', { detail: { planetId, textureUrl } }));
  } catch (e) {
    console.warn('Failed to save texture locally', e);
  }

  // Also sync to Supabase if connected
  const sb = getSupabase();
  if (sb) {
    try {
      await sb.from('planet_textures').upsert({
        planet_id: planetId,
        texture_url: textureUrl,
        updated_at: new Date().toISOString()
      }, { onConflict: 'planet_id' });
    } catch (e) {
      console.warn('Supabase texture upsert error:', e);
    }
  }
}

// Real-time NASA NeoWs API Fetcher
export async function fetchNasaLiveNeos(): Promise<{ neos: NeoObject[]; source: 'live_nasa' | 'supabase' | 'curated_fallback' }> {
  // 1. Try Supabase first if configured and has data
  const sb = getSupabase();
  if (sb) {
    try {
      const { data, error } = await sb.from('neo_objects').select('*').limit(50);
      if (!error && data && data.length > 0) {
        return { neos: data as NeoObject[], source: 'supabase' };
      }
    } catch (e) {
      console.warn('Supabase NEO query error, falling back to NASA API:', e);
    }
  }

  // 2. Fetch from official NASA JPL NeoWs API
  try {
    const today = new Date().toISOString().split('T')[0];
    const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&end_date=${today}&api_key=${nasaApiKey}`;
    
    const response = await fetch(url, { signal: AbortSignal.timeout(6000) });
    if (response.ok) {
      const json = await response.json();
      const nearEarthObjects = json.near_earth_objects?.[today] || [];

      if (nearEarthObjects.length > 0) {
        const liveNeos: NeoObject[] = nearEarthObjects.map((item: any, idx: number) => {
          const closeApproach = item.close_approach_data?.[0];
          const missDistAU = parseFloat(closeApproach?.miss_distance?.astronomical || '0.05');
          const missDistKm = parseFloat(closeApproach?.miss_distance?.kilometers || '7500000');
          const missDistLunar = parseFloat(closeApproach?.miss_distance?.lunar || '19.5');
          const velocityKms = parseFloat(closeApproach?.relative_velocity?.kilometers_per_second || '18.4');
          const velocityMph = parseFloat(closeApproach?.relative_velocity?.miles_per_hour || '41000');
          const diamMin = Math.round(item.estimated_diameter?.meters?.estimated_diameter_min || 50);
          const diamMax = Math.round(item.estimated_diameter?.meters?.estimated_diameter_max || 120);
          const isHazard = Boolean(item.is_potentially_hazardous_asteroid);

          return {
            id: item.id || `nasa-neo-${idx}`,
            name: item.name || `NEO ${item.id}`,
            designation: item.designation || item.name || `NEO ${item.id}`,
            discoveryYear: parseInt(item.name?.match(/\b(19\d\d|20\d\d)\b/)?.[0] || '2024', 10),
            estimatedDiameterMeters: { min: diamMin, max: diamMax },
            velocityKmS: parseFloat(velocityKms.toFixed(2)),
            velocityMph: Math.round(velocityMph),
            missDistanceAU: parseFloat(missDistAU.toFixed(6)),
            missDistanceKm: Math.round(missDistKm),
            missDistanceLunarDistances: parseFloat(missDistLunar.toFixed(2)),
            isHazardous: isHazard,
            closeApproachDate: closeApproach?.close_approach_date_full || today,
            torinoScale: isHazard ? (diamMax > 140 ? 1 : 0) : 0,
            palermoScale: isHazard ? -2.5 : -5.0,
            impactProbabilityPercent: isHazard ? 0.0001 : 0.0,
            extinctionScalePercent: parseFloat((diamMax / 100).toFixed(2)),
            composition: isHazard ? 'Silicate/Stony (S-type) asteroid' : 'Rocky Chondrite regolith',
            orbitalGroup: missDistAU < 1.0 ? 'Aten' : 'Apollo',
            riskAnalysis: `Live tracked flyby detected today by NASA JPL NeoWs radar. Approaching at ${velocityKms.toFixed(1)} km/s at a miss distance of ${missDistLunar.toFixed(1)} Lunar Distances (${missDistKm.toLocaleString()} km). ${isHazard ? 'Classified as Potentially Hazardous Asteroid (PHA) due to size and proximity.' : 'Standard orbital flyby with zero impact probability.'}`,
            mitigationStrategy: isHazard ? 'Continuous radar astrometry tracking (Goldstone Solar System Radar) and kinetic deflection contingency.' : 'Orbital astrometric monitoring.'
          };
        });

        // Combine live flybys with our legendary high-priority targets (Apophis, Bennu, Chicxulub)
        const combined = [...liveNeos, ...NEO_DATABASE];
        return { neos: combined, source: 'live_nasa' };
      }
    }
  } catch (err) {
    console.info('NASA Live API unavailable or offline, using curated NASA CNEOS baseline:', err);
  }

  // 3. Fallback to rich curated NASA database
  return { neos: NEO_DATABASE, source: 'curated_fallback' };
}

// Fetch all Universe Components with Supabase expansion
export async function fetchAllUniverseComponents(): Promise<UniverseComponent[]> {
  const sb = getSupabase();
  if (sb) {
    try {
      const { data, error } = await sb.from('universe_components').select('*');
      if (!error && data && data.length > 0) {
        // Merge Supabase extra components with built-in
        const existingIds = new Set(UNIVERSE_COMPONENTS.map(c => c.id));
        const extra = (data as UniverseComponent[]).filter(c => !existingIds.has(c.id));
        return [...UNIVERSE_COMPONENTS, ...extra];
      }
    } catch (e) {
      console.warn('Supabase universe components query error:', e);
    }
  }
  return UNIVERSE_COMPONENTS;
}

// Push all built-in universe catalog entities to Supabase table
export async function syncUniverseComponentsToSupabase(): Promise<{ success: boolean; count?: number; error?: string }> {
  const sb = getSupabase();
  if (!sb) {
    return {
      success: false,
      error: 'Supabase credentials (VITE_SUPABASE_URL & VITE_SUPABASE_ANON_KEY) are not set or active.'
    };
  }

  try {
    const payload = UNIVERSE_COMPONENTS.map(item => ({
      id: item.id,
      name: item.name,
      type: item.type,
      category: item.category,
      distance_light_years: item.distanceLightYears ?? null,
      description: item.description,
      highlight_stat: item.highlightStat,
      badge: item.badge,
      comparable_id: item.comparableId ?? null,
      updated_at: new Date().toISOString()
    }));

    const { error } = await sb
      .from('universe_components')
      .upsert(payload, { onConflict: 'id' });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, count: payload.length };
  } catch (err: any) {
    return { success: false, error: err?.message || 'Failed to sync catalog to Supabase.' };
  }
}
