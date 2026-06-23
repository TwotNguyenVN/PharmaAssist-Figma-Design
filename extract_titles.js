const fs = require('fs');
const pairs = [
    ['admin/pharmacy-profile.html', 'admin/pharmacy-profile.html'],
    ['ai/graph-explorer.html', 'ai/graph-explorer.html'],
    ['customers/customers.html', 'customers/customers.html'],
    ['admin/system-audit-log.html', 'admin/system-audit-log.html'],
    ['ai/ai-audit-log.html', 'ai/ai-audit-log.html']
];
for (const [f1, f2] of pairs) {
    console.log(`\n=== ${f1} vs ${f2} ===`);
    try {
        const c1 = fs.readFileSync(f1, 'utf8');
        const c2 = fs.readFileSync(f2, 'utf8');
        const m1 = c1.match(/<title>(.*?)<\/title>/);
        const m2 = c2.match(/<title>(.*?)<\/title>/);
        console.log(`  Title 1: ${m1 ? m1[1] : 'None'}`);
        console.log(`  Title 2: ${m2 ? m2[1] : 'None'}`);
        const h11 = c1.match(/<h[12][^>]*>(.*?)<\/h[12]>/);
        const h12 = c2.match(/<h[12][^>]*>(.*?)<\/h[12]>/);
        console.log(`  H1 1: ${h11 ? h11[1].replace(/<[^>]+>/g,'').trim() : 'None'}`);
        console.log(`  H1 2: ${h12 ? h12[1].replace(/<[^>]+>/g,'').trim() : 'None'}`);
        // Let's also check if they are missing #figma-root
        const r1 = c1.includes('id="figma-root"');
        const r2 = c2.includes('id="figma-root"');
        console.log(`  Figma root: ${r1} vs ${r2}`);
    } catch(e) {
        console.log('  Error reading files: ' + e.message);
    }
}
