const fs = require('fs');

let file = fs.readFileSync('src/components/ComparisonLab.tsx', 'utf-8');

file = file.replace(
/className="w-full px-3.5 py-2.5 rounded-xl bg-transparent border border-white\/15 text-sm font-mono text-white focus:outline-none focus:border-cyan-400 cursor-pointer"/g,
'className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/15 text-sm font-mono text-white focus:outline-none focus:border-cyan-400 cursor-pointer"'
);

fs.writeFileSync('src/components/ComparisonLab.tsx', file);
