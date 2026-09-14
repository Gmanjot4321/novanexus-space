const fs = require('fs');

let file = fs.readFileSync('src/components/PhenomenaSimulators.tsx', 'utf-8');

file = file.replace(
`      <div className="absolute bottom-28 left-6 right-6 z-20 pointer-events-none flex flex-col items-center">`,
`      <div className="absolute bottom-6 left-6 right-6 z-20 pointer-events-none flex flex-col items-center">`
);

fs.writeFileSync('src/components/PhenomenaSimulators.tsx', file);
