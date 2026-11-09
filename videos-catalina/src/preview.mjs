import {createRequire} from 'module';import path from 'path';import {fileURLToPath} from 'url';
const {chromium}=createRequire('/opt/node-tools/node_modules/')('playwright');
const here=path.dirname(fileURLToPath(import.meta.url));
const cfgs=await import('./configs.mjs');const cfg=cfgs[process.argv[2]];const outd=process.argv[3];
const b=await chromium.launch();const pg=await b.newPage({viewport:{width:1080,height:1920}});
await pg.goto('file://'+here+'/engine.html');await pg.evaluate(c=>setup(c),cfg);
let t0=0;for(let i=0;i<cfg.scenes.length;i++){const sc=cfg.scenes[i];const t=t0+sc.dur-0.8;
 await pg.evaluate(t=>renderAt(t),t);await pg.screenshot({path:`${outd}/s${i}.png`});t0+=sc.dur}
await b.close();
