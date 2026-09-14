const fs = require('fs');
let file = fs.readFileSync('src/components/DashboardsView.tsx', 'utf-8');

// The active tabs in DashboardsView don't have enough data because the mock bodies aren't defined properly for Black holes, stars, galaxies
const mockDataStr = `
// Temporary mock data for other tabs
const MOCK_BLACKHOLES = [
  { id: 'ton618', name: 'TON 618', value: 66000000000, format: 'M☉', description: 'Ultramassive black hole' },
  { id: 'phoenix', name: 'Phoenix A*', value: 100000000000, format: 'M☉', description: 'Largest known black hole candidate' },
  { id: 'holmberg', name: 'Holmberg 15A', value: 40000000000, format: 'M☉', description: 'Supermassive black hole' },
  { id: 'ngc4889', name: 'NGC 4889', value: 21000000000, format: 'M☉', description: 'Supergiant elliptical galaxy center' },
  { id: 'm87', name: 'M87*', value: 6500000000, format: 'M☉', description: 'First black hole directly imaged' },
  { id: 'sgrA', name: 'Sagittarius A*', value: 4100000, format: 'M☉', description: 'Milky Way central black hole' },
  { id: 'cygnus', name: 'Cygnus X-1', value: 21.2, format: 'M☉', description: 'Stellar-mass black hole' }
];

const MOCK_GALAXIES = [
  { id: 'alcyoneus', name: 'Alcyoneus', value: 16300000, format: 'ly', description: 'Giant radio galaxy (widest known)' },
  { id: 'ic1101', name: 'IC 1101', value: 4000000, format: 'ly', description: 'Supergiant elliptical galaxy' },
  { id: 'herculesA', name: 'Hercules A', value: 1500000, format: 'ly', description: 'Active radio galaxy' },
  { id: 'ngc262', name: 'NGC 262', value: 1300000, format: 'ly', description: 'Spiral galaxy with massive H I envelope' },
  { id: 'm87g', name: 'Messier 87', value: 980000, format: 'ly', description: 'Massive Virgo cluster galaxy' },
  { id: 'andromeda', name: 'Andromeda', value: 220000, format: 'ly', description: 'Nearest major spiral galaxy' },
  { id: 'milkyway', name: 'Milky Way', value: 105600, format: 'ly', description: 'Our home galaxy' }
];

const MOCK_STARS = [
  { id: 'stephenson', name: 'Stephenson 2-18', value: 2150, format: 'R☉', description: 'Red hypergiant' },
  { id: 'uy-scuti', name: 'UY Scuti', value: 1708, format: 'R☉', description: 'Red supergiant' },
  { id: 'vy-canis', name: 'VY Canis Majoris', value: 1420, format: 'R☉', description: 'Red hypergiant' },
  { id: 'vv-cephei', name: 'VV Cephei A', value: 1050, format: 'R☉', description: 'Red supergiant in binary system' },
  { id: 'betelgeuse', name: 'Betelgeuse', value: 887, format: 'R☉', description: 'Nearby red supergiant' },
  { id: 'antares', name: 'Antares', value: 680, format: 'R☉', description: 'Red supergiant in Scorpius' },
  { id: 'sun', name: 'The Sun', value: 1, format: 'R☉', description: 'G-type main-sequence star' }
];
`;

let targetIdx = file.indexOf('const [activeTab, setActiveTab]');
file = file.slice(0, targetIdx) + mockDataStr + '\n  ' + file.slice(targetIdx);

file = file.replace(
`  const getSortedData = () => {
    let data = [...CELESTIAL_BODIES];`,
`  const getSortedData = () => {
    let data = [...CELESTIAL_BODIES];
    if (activeTab === 'blackholes') data = [...MOCK_BLACKHOLES] as any;
    if (activeTab === 'galaxies') data = [...MOCK_GALAXIES] as any;
    if (activeTab === 'stars') data = [...MOCK_STARS] as any;`
);

fs.writeFileSync('src/components/DashboardsView.tsx', file);
