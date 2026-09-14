const fs = require('fs');

let file = fs.readFileSync('src/components/KnowledgeBaseView.tsx', 'utf-8');
file = file.replace(
`<div className="w-full md:w-[420px] h-full bg-transparent/80 backdrop-blur-2xl border-r border-white/[0.08] flex flex-col pt-24 pb-40 px-6 overflow-y-auto">`,
`<div className="w-full md:w-[420px] h-full bg-transparent/80 backdrop-blur-2xl border-r border-white/[0.08] flex flex-col pt-32 pb-48 px-6 overflow-y-auto relative z-10 pointer-events-auto">`
);

file = file.replace(
`<div className="flex-1 h-full overflow-y-auto bg-transparent relative pt-24 pb-40 px-8 lg:px-16">`,
`<div className="flex-1 h-full overflow-y-auto bg-transparent relative pt-32 pb-48 px-8 lg:px-16 z-10 pointer-events-auto">`
);

fs.writeFileSync('src/components/KnowledgeBaseView.tsx', file);
