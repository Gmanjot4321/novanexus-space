const fs = require('fs');

let file = fs.readFileSync('src/components/DashboardUI.tsx', 'utf-8');

// Ensure the dashboard overlay doesn't block the screen globally if it shouldn't
file = file.replace(
`className="fixed inset-x-0 bottom-0 z-50 pointer-events-none flex flex-col justify-end"`,
`className="fixed inset-x-0 bottom-0 z-40 pointer-events-none flex flex-col justify-end"`
);

// If in Knowledge Base, maybe hide the big bottom card or change its styling so it doesn't block
// We can just rely on the z-index 10 we added to KnowledgeBaseView's content containers. Wait, z-50 > z-10.
// Let's make sure KnowledgeBaseView has z-50 on its containers!

fs.writeFileSync('src/components/DashboardUI.tsx', file);

let kbFile = fs.readFileSync('src/components/KnowledgeBaseView.tsx', 'utf-8');
kbFile = kbFile.replace(/z-10/g, 'z-50');
fs.writeFileSync('src/components/KnowledgeBaseView.tsx', kbFile);
