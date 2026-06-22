const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, 'Prompt Figma.md');
const outputDir = path.join(__dirname, '.prompts');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

const content = fs.readFileSync(inputFile, 'utf-8');
const lines = content.split('\n');

let currentFile = null;
let currentBuffer = [];
let fileCounter = 0;

function saveCurrent() {
    if (currentFile && currentBuffer.length > 0) {
        // pad counter
        const prefix = String(fileCounter).padStart(2, '0');
        const filename = `${prefix}_${currentFile.replace(/[^a-z0-9A-Z]/gi, '_').replace(/_+/g, '_').toLowerCase()}.md`;
        fs.writeFileSync(path.join(outputDir, filename), currentBuffer.join('\n'));
        console.log(`Saved: ${filename}`);
        fileCounter++;
    }
}

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    let isHeader = false;
    let title = '';

    // Match # Thẻ 1
    if (line.match(/^#\s*Thẻ\s+\d+/i)) {
        isHeader = true;
        title = line.replace(/#/g, '').trim();
    } 
    // Match # **1\. Login** or # **1. Login**
    else if (line.match(/^#\s*\*\*\d+\\?\./)) {
        isHeader = true;
        title = line.replace(/[#\*]/g, '').replace(/\\/g, '').trim();
    } 
    // Match # **Prompt X
    else if (line.match(/^#+\s*\*\*Prompt\s+\d+/i)) {
        isHeader = true;
        title = line.replace(/[#\*]/g, '').trim();
    } 
    // Match # Prompt... Chi tiết đơn hàng
    else if (line.match(/^#+\s*Prompt.*Chi tiết đơn hàng/i)) {
        isHeader = true;
        title = "Prompt tao chi tiet don hang";
    } 
    // Match # prompt... Lịch sử đơn hàng
    else if (line.match(/^#+\s*prompt.*Lịch sử đơn hàng/i)) {
        isHeader = true;
        title = "Prompt tao lich su don hang";
    } 
    // Match ## **Prompt sửa Dashboard
    else if (line.match(/^#+\s*\*\*Prompt\s+sửa/i)) {
        isHeader = true;
        title = line.replace(/[#\*]/g, '').trim();
    }
    // Match # Prompt nối prototype thao tác demo
    else if (line.match(/^#\s*Prompt nối prototype/i)) {
        isHeader = true;
        title = "Prompt noi prototype";
    }

    if (isHeader) {
        saveCurrent();
        currentFile = title;
        currentBuffer = [line];
    } else {
        currentBuffer.push(line);
    }
}

saveCurrent();
console.log('Done splitting files.');
