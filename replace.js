const fs = require('fs');
const path = require('path');
const p = "C:\\Users\\Marlys\\.gemini\\antigravity\\scratch\\universal-ecommerce-template\\src";

const replacements = [
  [/Cortador Safe Slice® Mandoline/gi, 'AeroSmart Pro™ - Compresor Inalámbrico'],
  [/Safe Slice Mandoline/gi, 'AeroSmart Pro'],
  [/Safe Slice™/gi, 'AeroSmart Pro™'],
  [/Safe Slice/gi, 'AeroSmart Pro'],
  [/SAFE SLICE/g, 'AEROSMART PRO'],
  [/cortador/gi, 'compresor'],
  [/Pares de/g, 'Unidades de'],
  [/Par de/g, 'Unidad de'],
  [/se rompen en/g, 'falla en'],
  [/proteger tus manos/g, 'cuidar tu camino y vehículo'],
  [/A diferencia de los cuchillos tradicionales.*protege tus manos siempre/gi, 'A diferencia de las bombas manuales o los calibradores públicos defectuosos, AeroSmart Pro no requiere esfuerzo físico, te da autonomía en carreteras y cuida de ti y tu vehículo.'],
  [/sistema completo para mejorar tu cocina/gi, 'sistema completo para mejorar tu seguridad vial'],
  [/guía digital de recetas y cortes saludables/gi, 'Guía Digital: Secretos de un Viajero Inteligente'],
  [/E-book Guía de Recetas/gi, 'E-book Guía Viajero Seguro'],
  [/seguridad en tu cocina y cuidamos tus manos/gi, 'tranquilidad en cada kilómetro y seguridad en tus viajes'],
  [/imgi_.*\.webp/g, ''] // Eliminar imagenes hardcodeadas en HowItWorks
];

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else if (file.endsWith('.jsx') || file.endsWith('.js') || file.endsWith('.html')) { 
      results.push(file);
    }
  });
  return results;
}

// Ensure index.html is also crawled if it is in root, but here we scan src. Let's add index.html.
const allFiles = walk(p);
allFiles.push("C:\\Users\\Marlys\\.gemini\\antigravity\\scratch\\universal-ecommerce-template\\index.html");

allFiles.forEach(file => {
  if(!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  replacements.forEach(([regex, replacement]) => {
    regex.lastIndex = 0;
    if (regex.test(content)) {
      content = content.replace(regex, replacement);
      changed = true;
    }
  });
  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated ' + file);
  }
});
