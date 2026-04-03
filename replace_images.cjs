const fs = require('fs');
const p = "C:\\Users\\Marlys\\.gemini\\antigravity\\scratch\\universal-ecommerce-template\\src";

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else if (file.endsWith('.jsx') || file.endsWith('.js')) { 
      results.push(file);
    }
  });
  return results;
}

const allFiles = walk(p);

allFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  // Reemplazar "/cualquier_cosa.jpg|jpeg|webp|png" por el placeholder
  const newContent = content.replace(/"\/[a-zA-Z0-9_\-\.]+\.(?:jpg|jpeg|webp|png(?:.*))"/gi, '"https://via.placeholder.com/600x600?text=Subir+Imagen"');
  
  if (newContent !== content) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log('Updated images in ' + file);
  }
});
