const fs = require('fs');
const ncp = require('ncp');

// Rewrite /static/ in html file
// Copy all assets to xp folder.
const templateFile = './build/index.html';
const staticFolder = './build/static';
const migrateFolder =
  '../datamigrate/src/main/resources/admin/tools/data-migrate';
const assetFolder = '../datamigrate/src/main/resources/assets';

try {
  const indexHtml = fs.readFileSync(templateFile, 'utf8');
  const rewritten = indexHtml.replace(/\/static\//gim, '${assetsUrl}/');
  fs.writeFileSync(`${migrateFolder}/data-migrate.ftl`, rewritten); // writes FTL template to tool folder

  // Copy assets
  ncp(staticFolder, assetFolder, (err) => {
    if (err) { 
        return console.error(err); 
    }
    console.log('Assets and template copied');
  });

} catch (err) {
  console.error(err);
}
