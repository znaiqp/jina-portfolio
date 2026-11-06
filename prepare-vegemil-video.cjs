// Web playback copy: H.264/AAC, 1080p, two-pass encoding, fast-start MP4.
const {spawnSync}=require('node:child_process');
const fs=require('node:fs');
const os=require('node:os');
const path=require('node:path');
const ffmpeg=process.argv[2];
if(!ffmpeg)throw new Error('Pass an installed FFmpeg executable path.');
const source='F:/베지밀 대디전_결제내역/0802_베지밀.mp4/0802_베지밀.mp4';
const output=path.join(__dirname,'dist','assets','vegemil-film.mp4');
const log=path.join(os.tmpdir(),`vegemil-video-${process.pid}`);
const video=['-vf','scale=1920:1080','-c:v','libx264','-preset','fast','-b:v','1500k','-pix_fmt','yuv420p','-threads','4','-passlogfile',log];
function run(args){const result=spawnSync(ffmpeg,['-hide_banner','-loglevel','warning','-y','-i',source,...args],{stdio:'inherit'});if(result.status!==0)process.exit(result.status||1)}
run([...video,'-pass','1','-an','-f','null','NUL']);
run([...video,'-pass','2','-c:a','aac','-b:a','128k','-movflags','+faststart',output]);
console.log(`Web film: ${(fs.statSync(output).size/1024/1024).toFixed(2)} MiB`);
