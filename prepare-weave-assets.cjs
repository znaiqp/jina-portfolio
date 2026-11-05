// Optimize the supplied WEAVE KITCHEN images without changing the originals.
const fs=require('node:fs/promises');
const path=require('node:path');
const sharp=require(process.argv[2]);
const imageRoot='F:/새턴바스_1팀_성과자료집/이미지';
const inputs=[
  ['hero',`${imageRoot}/새턴바스_1팀_썸네일_성과자료집.png`,'Overview','주방 안에 배치된 위브 키친 아일랜드 식탁의 전체 모습',2880],
  ['overall',`${imageRoot}/새턴바스_1팀_07_성과자료집.png`,'Form','직선적인 작업 공간과 곡선적인 교류 공간이 이어지는 위브 키친',2400],
  ['cantilever',`${imageRoot}/새턴바스_1팀_04_성과자료집.png`,'Cantilever','다리 공간을 확보한 위브 키친의 한쪽 캔틸레버 구조',2400],
  ['construction',`${imageRoot}/새턴바스_1팀_03_성과자료집.png`,'Construction','상판과 본체, 배관의 결합을 보여주는 위브 키친 분해도',2400],
  ['sink',`${imageRoot}/새턴바스_1팀_02_성과자료집.png`,'Integrated sink','위브 키친의 일체형 싱크와 수전 정면 디테일',2400],
  ['faucet',`${imageRoot}/새턴바스_1팀_05_성과자료집.png`,'Surface & faucet','곡면으로 이어지는 위브 키친 상판과 수전 디테일',2400],
  ['storage',`${imageRoot}/새턴바스_1팀_06_성과자료집.png`,'Side storage','측면 수납 공간과 조명을 보여주는 위브 키친',2400],
  ['wine','F:/새턴바스/와인칠링.png','Wine chilling','싱크에 얼음과 와인병을 담아 칠링하는 위브 키친 사용 장면',2400]
];
(async()=>{
  const root=path.join(__dirname,'dist','assets');
  await fs.mkdir(root,{recursive:true});
  const assets={};
  for(const [key,source,label,alt,max] of inputs){
    const file=`weave-${key}.webp`;
    const info=await sharp(source).rotate().resize({width:max,height:max,fit:'inside',withoutEnlargement:true}).webp({quality:90,effort:5}).toFile(path.join(root,file));
    assets[`weave-${key}`]={src:`assets/${file}`,width:info.width,height:info.height,label,alt};
    console.log(`${key}: ${info.width}x${info.height}, ${Math.round(info.size/1024)} KB`);
  }
  await fs.writeFile(path.join(__dirname,'dist','weave-assets.js'),`// Supplied WEAVE KITCHEN project images.\nexport const weaveAssets = ${JSON.stringify(assets,null,2)};\n`);
})().catch(e=>{console.error(e.message);process.exitCode=1});
