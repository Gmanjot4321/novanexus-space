const fs = require('fs');
const file = fs.readFileSync('src/data/knowledgeData.ts', 'utf-8');

const EXTRA = [];
for (let i = 5; i <= 50; i++) {
  const isTheory = Math.random() > 0.5;
  EXTRA.push({
    id: 'story-' + i,
    title: isTheory ? 'Theoretical Concept ' + i : 'Exoplanet Discovery ' + i,
    category: isTheory ? 'theories' : 'top_10_exoplanets',
    imageUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=800',
    summary: 'A fascinating new entry regarding cosmic anomalies and recent observations in sector ' + i + '.',
    content: [
      'In recent astronomical surveys, researchers have identified unusual properties associated with this entity.',
      'Data collected from the James Webb Space Telescope suggests complex orbital resonances and peculiar chemical signatures.',
      'Further analysis will be required to fully understand the implications of these findings on current astrophysical models.'
    ],
    mindBlowingTakeaway: 'The sheer scale of this phenomenon defies our traditional understanding of cosmic evolution.'
  });
}

const appendStr = `\n// Auto-generated extended catalog\nexport const EXTRA_KNOWLEDGE: CosmicKnowledgeItem[] = ${JSON.stringify(EXTRA, null, 2)};\n\nKNOWLEDGE_ITEMS.push(...EXTRA_KNOWLEDGE);\n`;

fs.appendFileSync('src/data/knowledgeData.ts', appendStr);

