import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {stat} from 'node:fs/promises';
import {createReadStream} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('./dist/',import.meta.url));
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'application/javascript; charset=utf-8','.webp':'image/webp','.mp4':'video/mp4'};
const server=http.createServer(async(req,res)=>{
  try{
    let url=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    if(url==='/')url='/index.html';
    const target=path.resolve(root,'.'+url);
    if(!target.startsWith(root)){res.writeHead(403).end();return}
    const headers={'Content-Type':types[path.extname(target)]||'application/octet-stream','Cache-Control':'no-store'};
    if(path.extname(target)==='.mp4'){
      const {size}=await stat(target);
      headers['Accept-Ranges']='bytes';
      if(req.headers.range){
        const range=/^bytes=(\d*)-(\d*)$/.exec(req.headers.range);
        if(!range||(!range[1]&&!range[2])){res.writeHead(416,{'Content-Range':`bytes */${size}`}).end();return}
        const start=range[1]?Number(range[1]):Math.max(0,size-Number(range[2]));
        const end=range[1]&&range[2]?Math.min(Number(range[2]),size-1):size-1;
        if(start>=size||end<start){res.writeHead(416,{'Content-Range':`bytes */${size}`}).end();return}
        res.writeHead(206,{...headers,'Content-Length':end-start+1,'Content-Range':`bytes ${start}-${end}/${size}`});
        if(req.method==='HEAD')res.end();else createReadStream(target,{start,end}).pipe(res);
      }else{
        res.writeHead(200,{...headers,'Content-Length':size});
        if(req.method==='HEAD')res.end();else createReadStream(target).pipe(res);
      }
      return;
    }
    const data=await readFile(target);
    res.writeHead(200,headers);res.end(data);
  }catch{res.writeHead(404).end('Not found')}
});
server.listen(4173,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:4173'));
