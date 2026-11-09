import {createRequire} from 'module';import path from 'path';import {fileURLToPath} from 'url';
const {chromium}=createRequire('/opt/node-tools/node_modules/')('playwright');
const here=path.dirname(fileURLToPath(import.meta.url));const cfgs=await import('./configs.mjs');const cfg=cfgs.catalina;
const b=await chromium.launch();const pg=await b.newPage({viewport:{width:1080,height:1920}});
await pg.goto('file://'+here+'/engine.html');await pg.evaluate(c=>setup(c),cfg);
let t0=0;cfg.scenes.forEach((sc,i)=>{sc._s=t0;t0+=sc.dur});
for(const i of [6,7,9]){const sc=cfg.scenes[i];await pg.evaluate(t=>renderAt(t),sc._s+sc.dur-0.8);await pg.screenshot({path:process.argv[2]+`/n${i}.png`})}
await b.close();
