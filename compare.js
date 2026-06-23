const fs = require('fs');
const crypto = require('crypto');
const pairs = [
    ['admin/pharmacy-profile.html', 'admin/pharmacy-profile.html'],
    ['ai/graph-explorer.html', 'ai/graph-explorer.html'],
    ['customers/customers.html', 'customers/customers.html'],
    ['admin/system-audit-log.html', 'admin/system-audit-log.html'],
    ['ai/ai-audit-log.html', 'ai/ai-audit-log.html']
];
for (const [f1, f2] of pairs) {
    console.log(`\nComparing ${f1} vs ${f2}`);
    try {
        const s1 = fs.statSync(f1);
        const s2 = fs.statSync(f2);
        console.log(`  Sizes: ${s1.size} bytes vs ${s2.size} bytes`);
        const h1 = crypto.createHash('md5').update(fs.readFileSync(f1)).digest('hex');
        const h2 = crypto.createHash('md5').update(fs.readFileSync(f2)).digest('hex');
        console.log(`  Hashes: ${h1} vs ${h2}`);
    } catch(e) {
        console.log('  Error reading files: ' + e.message);
    }
}
