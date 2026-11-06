// Create web copies of the supplied project images; preserve every original.
const fs=require('node:fs/promises');
const path=require('node:path');
const sharp=require(process.argv[2]);
const inputs=[
  ['hero','패키지-1.png','Overview','클로버와 잔디 위에 놓인 베지밀 패키지와 선물 세트'],
  ['sharing','배경과_구도_바꾸지말고_맑은_낮으로_해줘_11 1.png','Across generations','잔디밭에서 어린이에게 베지밀을 건네는 장면'],
  ['identity','그리드 시스템.png','Brand identity','노란색 바탕 위 베지밀의 새로운 원형 심벌과 국문 로고'],
  ['logo-ko','Clear Space 규정_국문.png','Korean logotype','베지밀 국문 로고의 조합과 여백 규정'],
  ['logo-en','Clear Space 규정_국문-1.png','English logotype','베지밀 영문 로고의 조합과 여백 규정'],
  ['graphics','Slide 16_9 - 6.png','Graphic system','원형 단위와 유기적인 선으로 연결되는 베지밀 그래픽 시스템'],
  ['packages','패키지.png','Package design','세대별 일상을 위한 네 가지 베지밀 패키지 디자인'],
  ['prototypes','패키지-5.png','Prototyping','여러 단계의 실제 패키지 프로토타입과 최종 디자인'],
  ['gift','Slide 16_9 - 23.png','Gift package','Balanced Circle for All 메시지를 담은 베지밀 선물 세트'],
  ['gift-life','배경과_구도_바꾸지말고_맑은_낮으로_해줘_12 1.png','Everyday gifting','잔디밭에서 베지밀 선물 세트를 들고 있는 모습'],
  ['pocket','배경과_구도_바꾸지말고_맑은_낮으로_해줘_10 1.png','Everyday balance','주머니에 담긴 베지밀 패키지'],
  ['together','패키지-3.png','Brand wear','브랜드 메시지를 담은 흰색 티셔츠를 함께 입은 모습'],
  ['daily','패키지-4.png','Daily wellness','베지밀 티셔츠를 입고 패키지를 손에 든 일상 장면'],
  ['shirt','패키지-2.png','The Everyday Balance','나무 벤치 위에 놓인 베지밀 브랜드 티셔츠'],
  ['shirt-back','맑은_낮으로_바꿔줘_3 1.png','Brand message','브랜드의 건강한 일상 메시지가 인쇄된 티셔츠 뒷면'],
  ['shirt-detail','Group 2147229378.png','Typography detail','베지밀 영문 로고와 초록색 타이포그래피가 인쇄된 티셔츠'],
  ['shirt-life','배경_바꾸지말고_맑은_낮으로_해줘_9 1.png','Wearable identity','야외에서 착용한 베지밀 브랜드 티셔츠'],
  ['pyramid','Slide 16_9 - 24.png','Brand object','베지밀 영문 레터링과 원형 손잡이를 적용한 삼각형 오브젝트'],
  ['bottles','Slide 16_9 - 303.png','Reusable bottles','베지밀 로고와 손잡이를 적용한 노란색 재사용 보틀'],
  ['keyring','Slide 16_9 - 316.png','Brand goods','검은 가방에 연결된 초록색 베지밀 심벌 키링'],
  ['bloom-lab','Slide 16_9 - 11.png','Vege Bloom Lab','곡면 건축과 베지밀 로고를 적용한 Vege Bloom Lab 외관'],
  ['wellness-space','Slide 16_9 - 14.png','Wellness experience','자연을 바라보며 다양한 세대가 함께 요가하는 웰니스 공간']
];
(async()=>{
  const output=path.join(__dirname,'dist','assets');
  await fs.mkdir(output,{recursive:true});
  const assets={};
  for(const [key,file,label,alt] of inputs){
    const dest=`vegemil-${key}.webp`;
    const info=await sharp(path.join('F:/베지밀_포트폴리오',file)).rotate().resize({width:2400,height:2400,fit:'inside',withoutEnlargement:true}).webp({quality:90,effort:5}).toFile(path.join(output,dest));
    assets[`vegemil-${key}`]={src:`assets/${dest}`,width:info.width,height:info.height,label,alt};
    console.log(`${dest}: ${info.width}x${info.height}, ${Math.round(info.size/1024)} KB`);
  }
  await fs.writeFile(path.join(__dirname,'dist','vegemil-assets.js'),`// Supplied VEGEMIL project images.\nexport const vegemilAssets = ${JSON.stringify(assets,null,2)};\n`);
})().catch(e=>{console.error(e.message);process.exitCode=1});
