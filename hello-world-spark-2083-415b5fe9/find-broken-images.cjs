const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(filePath));
    } else if (file.endsWith('.jsx')) {
      results.push(filePath);
    }
  });
  return results;
}

const files = walk('src/pages');
let count = 0;
files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  // Regex to match src="path" or src={'path'}
  const imgRegex = /src\s*=\s*(?:{?["']([^"'\r\n{}]+)["']}?|{([^}\r\n]+)})/g;
  let match;
  while ((match = imgRegex.exec(content)) !== null) {
    let src = match[1];
    if (src) {
      // Strip query parameters like ?v=2
      const qIndex = src.indexOf('?');
      if (qIndex !== -1) {
        src = src.substring(0, qIndex);
      }
      
      if (src.startsWith('/assets/')) {
        const decodedSrc = decodeURIComponent(src);
        const localPath = path.join('public', decodedSrc);
        if (!fs.existsSync(localPath)) {
          console.log(`Missing asset in ${file.replace(/\\/g, '/')}: ${decodedSrc}`);
          count++;
        }
      } else if (!src.startsWith('http') && !src.startsWith('data:') && !src.startsWith('/') && !src.startsWith('{')) {
        console.log(`Relative/unsupported path in ${file.replace(/\\/g, '/')}: ${src}`);
        count++;
      }
    }
  }
});
console.log(`Scan completed. Found ${count} genuinely broken paths.`);
