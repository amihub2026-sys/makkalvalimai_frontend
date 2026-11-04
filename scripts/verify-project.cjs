const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const app = path.join(root, 'src/app');
const failures = [];
let components = 0;
function walk(dir) {
  for (const item of fs.readdirSync(dir, {withFileTypes: true})) {
    const file = path.join(dir, item.name);
    if (item.isDirectory()) { walk(file); continue; }
    if (!item.name.endsWith('.component.ts')) continue;
    components++;
    const stem = file.slice(0,-3);
    const code = fs.readFileSync(file,'utf8');
    for (const ext of ['html','css','responsive.css']) {
      if (!fs.existsSync(stem+'.'+ext)) failures.push('Missing '+path.relative(root,stem+'.'+ext));
    }
    if (!code.includes('styleUrls:')) failures.push('Missing styleUrls '+path.relative(root,file));
    if (!code.includes('templateUrl:')) failures.push('Missing templateUrl '+path.relative(root,file));
  }
}
walk(app);
const api = fs.readFileSync(path.join(app,'services/news-api.service.ts'),'utf8');
const content = fs.readFileSync(path.join(app,'services/content.service.ts'),'utf8');
for (const endpoint of ['/public/bootstrap','/public/articles','/public/issues','/public/polls/','/admin/auth/','/admin/articles/','/admin/media','/admin/ads/','/admin/polls/']) {
  if (!api.includes(endpoint)) failures.push('Missing live API endpoint '+endpoint);
}
if (!content.includes('this.api.snapshot()')) failures.push('Public content is not loaded from the API.');
for (const forbidden of ['demo-data','localStorage','INITIAL','useDemoRepository']) {
  if (content.includes(forbidden)) failures.push('Demo/local data dependency still present in ContentService: '+forbidden);
}
for (const forbidden of ['admin/categories','public/categories']) {
  if (api.includes(forbidden)) failures.push('API contains unsupported endpoint: '+forbidden);
}
for (const file of ['src/styles/tokens.css','src/styles.responsive.css','src/assets/site.webmanifest','src/assets/images/makkal-valimai-logo.png']) {
  if (!fs.existsSync(path.join(root,file))) failures.push('Missing: '+file);
}
if (fs.existsSync(path.join(app,'core/demo-data.ts'))) failures.push('Demo content is still shipped.');
if (fs.existsSync(path.join(app,'services/media-store.service.ts'))) failures.push('Local media publishing is still shipped.');
console.log(`Checked ${components} standalone components, each with HTML, CSS and responsive CSS.`);
if (failures.length) { console.error(failures.map(x=>'FAIL: '+x).join('\n')); process.exitCode=1; }
else console.log('PASS: component structure, API references, demo-data removal and source-level safeguards.');
console.log('This is not a live MongoDB, authentication or browser screenshot test.');
