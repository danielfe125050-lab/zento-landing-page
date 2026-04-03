const fs = require('fs');
const path = require('path');
const p = "C:\\Users\\Marlys\\.gemini\\antigravity\\scratch\\universal-ecommerce-template\\src";

const replacements = [
  [/Cortar vegetales con cuchillos o ralladores tradicionales es peligroso y frustrante\./gi, 'Quedarte varado con una llanta baja en medio de la nada es peligroso y muy frustrante.'],
  [/Pon tus vegetales u hortalizas directo en el conducto hermético superior sin tener contacto\./gi, 'Conecta la boquilla principal a la válvula de tu llanta o balón sin complicaciones.'],
  [/Selecciona el modo y el grosor exacto que necesitas rotando fácilmente la perilla\./gi, 'Selecciona la presión en PSI que necesitas directamente en su clara pantalla digital LED.'],
  [/Usa el émbolo de resorte y mira caer infinitas rodajas perfectas en segundos\./gi, 'Oprime inicio y mira cómo la llanta alcanza la presión óptima automáticamente en segundos.'],
  [/Mira los resultados reales en diferentes tipos de vegetales\./gi, 'Mira los testimonios de conductores reales usándolo en diferentes tipos de vehículos.'],
  [/Viene con un cepillo especial para llegar a todos los rincones de las cuchillas\. Además, es completamente apto para la rejilla superior de lavavajillas\./gi, 'Viene con boquillas universales (Carro, Moto, Bici, Balones). Además, la batería integrada funciona como powerbank para cargar tu celular en emergencias.'],
  [/Olvídate de picar por horas para una ensalada\. El sistema de cuchillas cerradas te hace 10x más eficiente\./gi, 'Olvídate de usar bombas manuales agotadoras o rogar por aire en estaciones. Su motor automatizado hace el trabajo duro por ti.'],
  [/#SafeSlice/gi, '#AeroSmartPro'],
  [/(Únete a la comunidad .*?) y cocina seguro/gi, '$1 y viaja seguro'],
  [/El diseño inteligente de nuestro empujador de ingredientes asegura que tus manos nunca estarán cerca de las hojas de acero\. Cocina con tranquilidad\./gi, 'Su sistema inteligente apaga el compresor de manera automática cuando alcanza la presión indicada, evitando daños en la llanta. Úsalo con total confianza.'],
  [/El secreto de cocina recomendado por/gi, 'El dispositivo de seguridad recomendado por'],
  [/Materiales libres de BPA, diseñados específicamente para (.*?) al cocinar\./gi, 'Dispositivo resistente y duradero diseñado para tolerar altas temperaturas y proteger a tu familia en carretera.'],
  [/No te vayas sin simplificar tu cocina\./gi, 'No te vayas y corras el riesgo de quedar varado esta semana.'],
  [/Problema al cocinar/gi, 'Problema de llanta baja en carretera'],
  [/Cocinar no debería ser un riesgo ni tomar tanto tiempo\. No dejes que herramientas obsoletas arruinen tu experiencia\./gi, 'Un viaje en familia no debería ser un riesgo ni ser arruinado por una llanta baja. Toma el control de tu seguridad vial.'],
  [/Plegalo rápido y ahorra todo el espacio de tu cocina/gi, 'Guárdalo fácilmente y no ocupes espacio extra en el baúl o la guantera.'],
  [/Toca para descubrir cómo dominarás tu cocina\./gi, 'Toca para descubrir cómo dominarás la carretera.']
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

const allFiles = walk(p);

allFiles.forEach(file => {
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
