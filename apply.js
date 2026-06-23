const fs = require('fs');
const path = require('path');

const deletes = [
    'admin/pharmacy-profile.html',
    'ai/graph-explorer.html',
    'customers/customers.html',
    'admin/system-audit-log.html',
    'ai/ai-audit-log.html'
];

const renames = [
    ['customers/customer-detail.html', 'customers/customer-detail.html'],
    ['inventory/batch-lot-detail.html', 'inventory/batch-lot-detail.html'],
    ['inventory/supplier-detail.html', 'inventory/supplier-detail.html'],
    ['medicine/category-management.html', 'medicine/category-management.html'],
    ['medicine/medicine-detail.html', 'medicine/medicine-detail.html'],
    ['medicine/medicine-form.html', 'medicine/medicine-form.html'],
    ['medicine/medicine-management.html', 'medicine/medicine-management.html']
];

const stringReplacements = [
    ['pharmacy-profile.html', 'pharmacy-profile.html'],
    ['graph-explorer.html', 'graph-explorer.html'],
    ['customers/customers.html', 'customers/customers.html'],
    ['system-audit-log.html', 'system-audit-log.html'],
    ['ai-audit-log.html', 'ai-audit-log.html'],
    ['customer-detail.html', 'customer-detail.html'],
    ['batch-lot-detail.html', 'batch-lot-detail.html'],
    ['supplier-detail.html', 'supplier-detail.html'],
    ['category-management.html', 'category-management.html'],
    ['medicine-detail.html', 'medicine-detail.html'],
    ['medicine-form.html', 'medicine-form.html'],
    ['medicine-management.html', 'medicine-management.html']
];

// Perform Deletes
for (const f of deletes) {
    if (fs.existsSync(f)) {
        fs.unlinkSync(f);
        console.log('Deleted ' + f);
    }
}

// Perform Renames
for (const [oldF, newF] of renames) {
    if (fs.existsSync(oldF)) {
        fs.renameSync(oldF, newF);
        console.log('Renamed ' + oldF + ' -> ' + newF);
    }
}

// Replace in all files
function walk(dir) {
    let res = [];
    const files = fs.readdirSync(dir);
    for (const f of files) {
        if (f.startsWith('.') || f === 'node_modules' || f === 'assets' || f === 'test-output') continue;
        const p = path.join(dir, f);
        if (fs.statSync(p).isDirectory()) res = res.concat(walk(p));
        else if (p.endsWith('.html') || p.endsWith('.js') || p.endsWith('.md')) res.push(p);
    }
    return res;
}

const allFiles = walk('.');
for (const f of allFiles) {
    let content = fs.readFileSync(f, 'utf8');
    let changed = false;
    for (const [oldStr, newStr] of stringReplacements) {
        if (content.includes(oldStr)) {
            content = content.split(oldStr).join(newStr);
            changed = true;
        }
    }
    if (changed) {
        fs.writeFileSync(f, content);
        console.log('Updated links in ' + f);
    }
}
