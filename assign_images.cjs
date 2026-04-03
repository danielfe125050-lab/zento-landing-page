const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const replacements = [
  {
    file: 'data/product.js',
    replaces: [
      { from: '"https://via.placeholder.com/600x600?text=Subir+Imagen"', to: '"/Diseño sin título.gif"' },
      { from: '"https://via.placeholder.com/600x600?text=Subir+Imagen"', to: '"/1.jpeg"' },
      { from: '"https://via.placeholder.com/600x600?text=Subir+Imagen"', to: '"/2.jpeg"' }
    ]
  },
  {
    file: 'components/EmotionalSection.jsx',
    replaces: [
      { from: '"https://via.placeholder.com/600x600?text=Subir+Imagen"', to: '"/Diseño sin título (3).gif"' }
    ]
  },
  {
    file: 'components/FeatureTabs.jsx',
    replaces: [
      { from: '"https://via.placeholder.com/600x600?text=Subir+Imagen"', to: '"/3.jpeg"' },
      { from: '"https://via.placeholder.com/600x600?text=Subir+Imagen"', to: '"/4.jpeg"' },
      { from: '"https://via.placeholder.com/600x600?text=Subir+Imagen"', to: '"/5.jpeg"' }
    ]
  },
  {
    file: 'components/ProductFeatures.jsx',
    replaces: [
      { from: '"https://via.placeholder.com/600x600?text=Subir+Imagen"', to: '"/4.jpeg"' },
      { from: '"https://via.placeholder.com/600x600?text=Subir+Imagen"', to: '"/Diseño sin título (1).gif"' },
      { from: '"https://via.placeholder.com/600x600?text=Subir+Imagen"', to: '"/5.jpeg"' }
    ]
  },
  {
    file: 'components/UGCGallery.jsx',
    replaces: [
      { from: '"https://via.placeholder.com/600x600?text=Subir+Imagen"', to: '"/1.jpeg"' },
      { from: '"https://via.placeholder.com/600x600?text=Subir+Imagen"', to: '"/2.jpeg"' },
      { from: '"https://via.placeholder.com/600x600?text=Subir+Imagen"', to: '"/3.jpeg"' },
      { from: '"https://via.placeholder.com/600x600?text=Subir+Imagen"', to: '"/4.jpeg"' }
    ]
  },
  {
    file: 'components/BonusOffer.jsx',
    replaces: [
      { from: '"https://via.placeholder.com/600x600?text=Subir+Imagen"', to: '"/Diseño sin título.gif"' }
    ]
  }
];

let filesModified = 0;

replacements.forEach(entry => {
  const fullPath = path.join(srcDir, entry.file);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    entry.replaces.forEach(rep => {
      // Need to replace sequentially
      content = content.replace(rep.from, rep.to);
    });

    fs.writeFileSync(fullPath, content, 'utf8');
    filesModified++;
    console.log(`Updated ${entry.file}`);
  }
});

console.log(`Finished mapping images in ${filesModified} files.`);
