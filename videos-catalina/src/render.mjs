import {createRequire} from 'module';
import {spawn} from 'child_process';
import path from 'path';import {fileURLToPath} from 'url';
const require=createRequire('/opt/node-tools/node_modules/');
let chromium;try{({chromium}=require('playwright'))}catch(e){({chromium}=(await import('playwright')))}
const here=path.dirname(fileURLToPath(import.meta.url));
const cfgs=await import('./configs.mjs');
const key=process.argv[2];const cfg=cfgs[key];const out=process.argv[3];const FPS=30;
const b=await chromium.launch();const pg=await b.newPage({viewport:{width:1080,height:1920}});
await pg.goto('file://'+here+'/engine.html');
const total=await pg.evaluate(c=>setup(c),cfg);
const n=Math.round(total*FPS);
const ff=spawn('ffmpeg',['-y','-f','image2pipe','-framerate',String(FPS),'-c:v','mjpeg','-i','-','-c:v','libx264','-pix_fmt','yuv420p','-crf','18','-preset','medium',out],{stdio:['pipe','ignore','inherit']});
for(let i=0;i<n;i++){await pg.evaluate(t=>renderAt(t),i/FPS);
 const buf=await pg.screenshot({type:'jpeg',quality:93});
 if(!ff.stdin.write(buf))await new Promise(r=>ff.stdin.once('drain',r));}
ff.stdin.end();await new Promise(r=>ff.on('close',r));await b.close();
console.log('done',out,total);
