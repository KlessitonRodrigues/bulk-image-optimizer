const cp = require('child_process');

const distDir = '../dist';
const outDir = './www/app';
const copyAssets = `cp -rv ${distDir}/. ${outDir}`;

module.exports = function (context) {
  console.log(`Copying ${distDir} to ${outDir}`);
  console.log(cp.execSync(copyAssets).toString());
};
