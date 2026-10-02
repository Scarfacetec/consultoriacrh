const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const output = path.join(root, 'dist');
const files = ['index.html', 'banner.jpg', 'logotipo.jpeg', 'trabalhadores.jpg', 'compartilhamento-crh-v2.jpg', 'robots.txt', '_headers'];
for (const file of files) {
  if (!fs.existsSync(path.join(root, file))) throw new Error(`Arquivo ausente: ${file}`);
}
fs.mkdirSync(output, { recursive: true });
for (const file of files) fs.copyFileSync(path.join(root, file), path.join(output, file));
console.log(`Site preparado em dist: ${files.length} arquivos.`);
