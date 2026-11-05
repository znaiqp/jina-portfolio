// Re-encode supplied project images for the web without changing their content.
const fs = require('node:fs/promises');
const path = require('node:path');
const sharp = require(process.argv[2]);
const root = path.join(__dirname, 'dist', 'assets');
const inputs = [
  ['poster', 'F:/한강터_성과자료집/원본이미지/한강터_목업1_성과자료집.png', '한강터 러닝 캠페인 옥외 포스터 목업', 2400],
  ['guide', 'F:/한강터_성과자료집/원본이미지/한강터_목업2_성과자료집.png', '한강터 한영 안내 책자와 거치대 목업', 2400],
  ['pictograms', 'F:/한강터_성과자료집/원본이미지/한강터_픽토그램 성과자료집.png', '한강터 심볼에서 확장한 시설·활동·방향 픽토그램 시스템', 2882, true],
  ['posters', 'F:/한강터_성과자료집/11639282.png', '활동·도시·휴식·모임을 표현한 한강터 포스터 네 종', 1920, true],
  ['campaign', 'F:/한강터_성과자료집/11639283.png', '타원 그래픽을 활용한 한강터 액티비티 캠페인', 1920],
  ['signage', 'F:/한강터_성과자료집/10 page.png', '한강 풍경과 한강터 Gathering 공간 사인 시스템 목업', 1920],
  ['hero', 'F:/한강터_성과자료집/01.png', '활동과 사람이 모이는 한강의 터 — 자전거와 잔디 위 한강터 아이덴티티', 2400]
];
(async()=>{
  await fs.mkdir(root, {recursive:true});
  const assets={};
  for(const [key,source,alt,max,lossless] of inputs){
    const filename=`hangang-${key}.webp`;
    const {info}=await sharp(source).rotate().resize({width:max,height:max,fit:'inside',withoutEnlargement:true}).webp({quality:88,lossless:!!lossless,effort:5}).toFile(path.join(root,filename)).then(info=>({info}));
    assets[key]={src:`assets/${filename}`,width:info.width,height:info.height,alt};
    console.log(`${key}: ${info.width}x${info.height}, ${Math.round(info.size/1024)} KB`);
  }
  await fs.writeFile(path.join(__dirname,'dist','assets.js'),`// Optimized copies of the seven user-supplied images.\nexport const hangangAssets = ${JSON.stringify(assets,null,2)};\n`);
})().catch(error=>{console.error(error.message);process.exitCode=1});
