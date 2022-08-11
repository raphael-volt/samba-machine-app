const fs = require('fs');
const config = require('./tsconfig.json');
const paths = config.compilerOptions.paths
if(!paths)
  return

let isDev = true
for(const p in paths) {
  isDev = !paths[p][0].startsWith('dist/')
  break
}


for(const p in paths) {
  if(isDev) {
    paths[p] = [`dist/${p}/${p}`, `dist/${p}`]
  }
  else {
    paths[p] = [`projects/${p}/src/public-api.ts`]
  }
}

fs.writeFileSync("tsconfig.json", JSON.stringify(config, null, 4))
console.log(paths)
