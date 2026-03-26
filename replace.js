const fs = require('fs');
const path = require('path');
const p = "C:\\Users\\Marlys\\.gemini\\antigravity\\scratch\\universal-ecommerce-template\\src";

const replacements = [
  [/Grip Gym Pro™/gi, 'Flawless Facial™'],
  [/Grip Gym Pro/gi, 'Flawless Facial'],
  [/GRIP GYM PRO/g, 'FLAWLESS FACIAL'],
  [/empuñaduras/gi, 'depiladoras'],
  [/#GripGymPro y cuida de tus manos/g, '#Flawless y cuida tu rostro'],
  [/Pares de/g, 'Unidades de'],
  [/Par de/g, 'Unidad de'],
  [/se rompen en/g, 'falla en'],
  [/proteger tus manos/g, 'cuidar tu piel'],
  [/Grip Gym Pro Protection/g, 'Flawless Facial Care'],
  [/ha sido diseñado por atletas para atletas, entendiendo que el agarre perfecto requiere protección total y ergonomía/g, 'ha sido diseñado para la mujer práctica, entendiendo que la belleza requiere soluciones rápidas, sin dolor y efectivas'],
  [/A diferencia de los guantes tradicionales, .* no retiene sudor ni genera mal olor/g, 'A diferencia de la cera o las pinzas, Flawless Facial no causa dolor, enrojecimiento ni irritación'],
  [/sistema completo para dominar el gimnasio/gi, 'sistema completo para tu rutina de belleza'],
  [/guía digital de élite/gi, 'guía digital de cuidado facial'],
  [/E-book Guía de Agarre de Élite/gi, 'E-book Guía de Belleza Facial']
];

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

walk(p).forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  replacements.forEach(([regex, replacement]) => {
    // We must reset lastIndex if regex has /g
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
