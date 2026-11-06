import { hangangAssets } from './assets.js';
import { weaveAssets } from './weave-assets.js';
import { vegemilAssets } from './vegemil-assets.js';
import { gripsAssets } from './grips-assets.js';
import { bindMotifMotion } from './motif.js';
import { bindProjectPreviews } from './project-preview.js';
import { profile } from './profile.js';
import { projectCredits } from './project-credits.js';
const assets={...hangangAssets,...weaveAssets,...vegemilAssets,...gripsAssets};

const projects = [
  {id:'hangang-tuh',title:'HANGANG TUH',ko:'한강터',type:'Brand identity',disciplines:'Brand identity, Pictogram, Signage',year:'2026',cover:'hero',film:{id:'XqM5RE9RETE',label:'한강터 브랜드 필름'},subtitle:'한강의 인파 밀집 위험과 정보 전달을 위해 설계된 공공 정보 브랜딩 시스템.',awards:['2026 Red Dot Design Brand Communication Junior Award | Winner','IDEA 2026 Winner','K-Design Award Finalist'],gallery:['hero','posters','campaign','pictograms','signage','poster','guide'],description:'한강터는 인파 밀집 위험과 교통 혼잡을 줄이고, 한강의 문화유산과 254가지에 달하는 활동 정보를 전달하는 공공 정보 브랜딩 시스템입니다. AI 기반 인파 밀집도 분석으로 축제 방문객을 안전한 경로로 안내하며, 활동을 액티비티·어반·리프레쉬·개더링의 4개 구역으로 분류합니다. 로고의 원형 단위를 활용한 디자인과 픽토그램으로 일관되고 직관적인 시각 언어를 구축했습니다. 안내 표지판·지도·모바일 앱·안전 경로 안내에 적용해 활동 정보와 공간 구역, 위험 지역을 쉽게 파악하고 한강을 안전하고 명확하게 경험하도록 돕습니다.'},
  {id:'weave-kitchen',title:'WEAVE KITCHEN',ko:'위브 키친',type:'Product',disciplines:'Product, Furniture',year:'2026',cover:'weave-hero',material:'인조대리석',film:{id:'OfqosCr1TNE',label:'위브 키친 프로젝트 영상'},subtitle:'2인 이상의 교류와 다이닝 경험을 확장하는 관계 중심형 아일랜드 식탁',gallery:['weave-hero','weave-overall','weave-cantilever','weave-construction','weave-sink','weave-faucet','weave-storage','weave-wine'],description:'위브(WEAVE)는 2인 이상의 교류와 다이닝 경험을 확장하는 관계 중심형 아일랜드 식탁입니다. 모듈러 주방의 삼각형 조리 동선과 체류 높이를 고려해 준비부터 식사까지 이어지도록 설계했습니다. 한쪽에 배치한 캔틸레버 구조로 다리 공간을 확보해 마주 앉아 대화할 수 있으며, 측면 수납과 싱크·수전은 식사 준비와 와인 칠링을 돕습니다. 직선적인 작업 공간과 곡선적인 교류 공간을 결합하고, 인조대리석 일체형 몰드 성형으로 유려한 형태와 양산 가능성을 고려했습니다. 조리와 식사, 취미와 대화가 어우러지는 생활의 중심을 제안합니다.'},
  {id:'vegemil',title:'VEGEMIL',ko:'베지밀',fullTitle:'세대를 잇는 50년의 온기: 국민음료 베지밀 프로젝트',type:'Brand identity',disciplines:'Brand identity, Packaging, Brand experience',year:'2026',cover:'vegemil-hero',film:{src:'assets/vegemil-film.mp4',label:'베지밀 프로젝트 영상'},subtitle:'모든 세대의 건강한 일상을 제안하는 베지밀 웰니스 리브랜딩 프로젝트.',awards:['Korea International Award | 특선'],gallery:['vegemil-hero','vegemil-sharing','vegemil-identity','vegemil-logo-ko','vegemil-logo-en','vegemil-graphics','vegemil-packages','vegemil-prototypes','vegemil-gift','vegemil-gift-life','vegemil-pocket','vegemil-together','vegemil-daily','vegemil-shirt','vegemil-shirt-back','vegemil-shirt-detail','vegemil-shirt-life','vegemil-pyramid','vegemil-bottles','vegemil-keyring','vegemil-bloom-lab','vegemil-wellness-space'],description:'베지밀의 50년 헤리티지와 신뢰를 바탕으로, 모든 세대가 일상에서 선택하는 웰니스 브랜드로 재정의했습니다. 고착화된 이미지를 개선하고 젊은 세대와의 접점을 넓히기 위해 ‘모두를 위한 균형(Balanced Circle for All)’을 중심으로 패키지와 그래픽 시스템을 재설계했습니다. 재활용 가능한 선물형 패키지와 굿즈로 지속 가능한 소비를 제안하고, 오프라인 공간 ‘Vege Bloom Lab’에서 건강한 일상을 경험하도록 설계해 브랜드 경험을 확장했습니다. 이를 통해 건강한 소비와 지속 가능한 식문화를 연결하는 브랜드 방향성을 제시합니다.'},
  {
    id:'grips',
    title:'GRIPS',
    ko:'그립',
    fullTitle:'상지 결손 아동의 예체능 참여를 돕는 의수 : 그립',
    type:'Product',
    year:'2026',
    cover:'grips-overview',
    gallery:['grips-overview','grips-racket','grips-hand','grips-prototype','grips-strap','grips-wearing','grips-mechanism','grips-research','grips-jump-rope'],
    description:'GRIPS는 상지 절단 아동이 학교 예체능 활동에 보다 자유롭게 참여할 수 있도록 개발한 맞춤형 저비용 의수 프로젝트입니다. 기존 고기능 의수는 높은 가격과 성장기에 따른 반복 교체 부담으로 활용이 어려운 점에 착안하여, 3D 프린팅 기반의 경제적인 제작 방식을 제안했습니다. 예체능 활동에 필요한 다양한 파지 동작을 연구해 반영했으며, TPU 소재를 활용한 유연한 무관절 손가락 구조, 손목 다이얼 메커니즘, 실 당김 방식, 실리콘 그립을 적용해 사용성과 활동 안정성을 높였습니다. 이를 통해 성장기 아동의 학급 예체능 활동 참여 기회를 확대하는 것을 목표로 합니다.'
  },
].map(project=>({...project,...projectCredits[project.id]}));
const types=['All','Product','Space','Brand identity','Editorial']
  .filter(type=>type==='All'||projects.some(p=>p.type===type));
const main=document.querySelector('main');
const cursorLabel=document.querySelector('.cursor-label');
const cursorLogo=document.querySelector('.cursor-logo');
const state={filter:'All',view:null,rails:[0,0],route:'#/',cvReturn:'#/',cvReturnScroll:0,restoreCV:false};
let disposeMotif=()=>{};
let disposePreviews=()=>{};
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const selected=()=>projects.filter(p=>state.filter==='All'||p.type===state.filter);
document.querySelector('.nav-count').textContent=String(projects.length).padStart(2,'0');

function imageFallback(asset){
  return `<div class="placeholder" role="img" aria-label="${esc(asset.alt)}" style="--ratio:${asset.width/asset.height};--bg:#f4f4f0"><svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg></div>`;
}
function imageAsset(key,{eager=false}={}){
  const a=assets[key];
  return `<div class="project-media" data-asset="${key}"><img src="${a.src}" width="${a.width}" height="${a.height}" alt="${esc(a.alt)}" loading="${eager?'eager':'lazy'}" decoding="async" ${eager?'fetchpriority="high"':''}><div class="image-fallback" hidden>${imageFallback(a)}</div></div>`;
}
function cover(p){return imageAsset(p.cover)}
function card(p){return `<a class="project-card" href="#/project/${p.id}" data-project="${p.id}"><div class="card-meta"><div><h2>${p.title}</h2><p class="type">${p.team?'Team project · ':''}${p.type}</p></div><div class="right-meta"><p>${p.ko}</p><p class="year">${p.year}</p></div></div>${cover(p)}<span class="card-arrow" aria-hidden="true">↗</span></a>`}
function railMeta(p,label=p.disciplines||p.type){return `<a class="rail-meta" href="#/project/${p.id}"><span class="rail-title">${p.title}</span><span class="rail-client">${p.ko}</span><span class="rail-type">${p.team?'Team project · ':''}${label}</span><span class="rail-date">${p.year}</span></a>`}
function railCard(p,key=p.cover,{eager=false}={}){return `<article class="rail-item">${railMeta(p)}<a class="rail-cover" data-project="${p.id}" href="#/project/${p.id}" aria-label="${p.title} 프로젝트 보기">${imageAsset(key,{eager})}</a></article>`}
function videoPreview(p=projects[0]){
  const a=assets[p.gallery?.[0]||p.cover];
  if(p.film.src)return `<section class="video-preview" aria-label="${esc(p.film.label)}"><div class="video-stage"><video controls controlslist="nodownload" playsinline preload="none" poster="${a.src}" aria-label="${esc(p.film.label)}"><source src="${esc(p.film.src)}" type="video/mp4">이 브라우저에서 영상을 재생할 수 없습니다. 최신 브라우저에서 다시 시도해 주세요.</video></div><div class="video-caption"><span role="status" class="video-status">${esc(p.film.label)}</span></div></section>`;
  return `<section class="video-preview" aria-label="${esc(p.film.label)}" data-video-id="${esc(p.film.id)}" data-video-title="${esc(p.title+' — '+p.film.label)}" data-video-label="${esc(p.film.label)}"><div class="video-stage"><button type="button" class="video-poster" aria-label="${esc(p.ko)} 영상 재생"><img src="${a.src}" alt="" width="${a.width}" height="${a.height}" loading="lazy"><span class="play-icon" aria-hidden="true">▶</span><span class="video-poster-caption">${p.title}<span>Play film ↗</span></span></button></div><div class="video-caption"><span role="status" class="video-status">${esc(p.film.label)}</span><a href="https://youtu.be/${esc(p.film.id)}" target="_blank" rel="noopener noreferrer">YouTube에서 보기 ↗</a></div></section>`;
}
function home(){
  const p=projects[0],weave=projects.find(p=>p.id==='weave-kitchen'),vegemil=projects.find(p=>p.id==='vegemil');
  const grips=projects.find(p=>p.id==='grips');
  return `<h1 class="sr-only">${esc(profile.siteName)} — Selected works</h1><div class="home-grid"><section class="home-rail" tabindex="0" aria-label="왼쪽 프로젝트 목록 — 별도로 스크롤"><div class="rail-content">${railCard(p,'poster',{eager:true})}${railCard(vegemil)}<a class="rail-end" href="#/index">View project index ↗</a></div></section><section class="home-rail" tabindex="0" aria-label="오른쪽 프로젝트 목록 — 별도로 스크롤"><div class="rail-content">${railCard(weave,'weave-hero',{eager:true})}${railCard(grips)}${railCard(p,'guide')}<article class="rail-item">${railMeta(p,'Brand film')}${videoPreview()}</article>${railCard(p,'signage')}<a class="rail-end" href="#/cv">CV ↗</a></div></section></div>`;
}
function filterButtons(){return `<div class="filters" aria-label="Filter by discipline">${types.map(t=>`<button type="button" data-filter="${t}" class="${state.filter===t?'active':''}" aria-pressed="${state.filter===t}">${t}</button>`).join('')}</div>`}
function grid(){const list=selected();return `<h1 class="sr-only">Projects</h1><div class="subbar"><span class="eyebrow">Projects / 2026</span>${filterButtons()}<span class="results-count">${String(list.length).padStart(2,'0')} projects</span></div><div class="project-grid">${list.map(card).join('')}</div>`}
function index(){
  const list=selected();
  return `<h1 class="sr-only">Project index</h1><div class="index-layout"><aside class="index-sidebar"><p>Index<br><span class="eyebrow">2026</span></p><p class="eyebrow">Type of work</p>${filterButtons()}<p class="index-caption">An overview of selected works.<br>프로젝트명에 마우스를 올리면<br>해당 행 아래에 이미지가 표시됩니다.</p></aside><section aria-label="Project index"><div class="index-table-head"><span>No.</span><span>Project</span><span>Discipline</span><span>Year</span></div>${list.map(p=>`<a class="index-row" href="#/project/${p.id}" data-preview="${p.id}"><span>${String(projects.indexOf(p)+1).padStart(2,'0')}</span><span class="row-title">${p.title}${p.team?'<small class="team-label">Team project</small>':''}</span><span class="row-type">${p.type}</span><span class="row-year">${p.year} ↗</span></a>`).join('')}<div class="index-bottom"><span>${String(list.length).padStart(2,'0')} selected projects</span><span>Selected works & studies</span></div></section></div><div class="index-preview" aria-hidden="true" hidden></div>`;
}
function cvEntry(entry){return `<div class="cv-entry"><p>${esc(entry.title)}</p><p>${esc(entry.detail)}</p><p>${esc(entry.dates)}</p></div>`}
function cv(){
  return `<article class="cv-sheet" aria-label="Park Jina curriculum vitae"><div class="cv-toolbar"><h1>CV</h1><button type="button" data-close-cv aria-label="Close CV">(Close)</button></div><section class="cv-row cv-contact" aria-labelledby="cv-name"><h2 id="cv-name">${esc(profile.name)}</h2><div class="cv-detail"><a href="mailto:${esc(profile.email)}" class="cv-email">${esc(profile.email)}</a><div class="cv-socials">${profile.social.map(link=>`<a href="${esc(link.url)}" target="_blank" rel="noopener noreferrer">${esc(link.label)}</a>`).join('')}</div></div></section><section class="cv-row" aria-labelledby="cv-education"><h2 id="cv-education">Education</h2><div class="cv-detail">${profile.education.map(cvEntry).join('')}</div></section><section class="cv-row" aria-labelledby="cv-experience"><h2 id="cv-experience">Experience</h2><div class="cv-detail">${profile.experience.map(cvEntry).join('')}</div></section><section class="cv-row cv-awards" aria-labelledby="cv-award"><h2 id="cv-award">Award</h2><div class="cv-detail">${profile.awards.map(cvEntry).join('')}</div></section></article>`;
}
function closeCV(){state.restoreCV=true;location.hash=state.cvReturn}
function motifFigure(number){
  const a=assets['vegemil-motif'];
  return `<figure class="gallery-figure motif-figure"><div class="motif-scroll" data-motif><div class="motif-viewport" tabindex="0" role="region" aria-label="베지밀 긴 모티프" aria-describedby="motif-instructions"><img class="motif-image" src="${a.src}" width="${a.width}" height="${a.height}" alt="${esc(a.alt)}" loading="lazy" decoding="async" draggable="false"></div></div><figcaption><span>${String(number).padStart(2,'0')} / ${esc(a.label)}</span><span class="motif-hint"><span class="motif-hover-hint">Hover to explore →</span><span class="motif-scroll-hint">Scroll to explore →</span></span></figcaption><p class="sr-only" id="motif-instructions">마우스를 올리면 이미지가 천천히 오른쪽으로 이동합니다. 키보드 좌우 방향키로도 이동할 수 있습니다. 모바일에서는 아래로 스크롤해 전체 이미지를 볼 수 있습니다.</p></figure>`;
}
function gallery(p){
  const keys=p.id==='vegemil'?p.gallery.flatMap(key=>key==='vegemil-graphics'?[key,'vegemil-motif']:[key]):p.gallery;
  return keys.map((key,i)=>{if(key==='vegemil-motif')return motifFigure(i+1);const a=assets[key],label=a.label||(key==='hero'?'Identity':key[0].toUpperCase()+key.slice(1));return `<figure class="gallery-figure">${imageAsset(key,{eager:i===0})}<figcaption><span>${String(i+1).padStart(2,'0')} / ${esc(label)}</span><span>${esc(a.alt)}</span></figcaption></figure>${p.film&&i===0?videoPreview(p):''}`}).join('');
}
function detail(p){
  const n=projects[(projects.indexOf(p)+1)%projects.length];
  const awards=p.awards?.length?`<section class="project-award" aria-label="수상 내역"><span>${p.awards.length===1?'Award':'Awards'}</span>${p.awards.map(award=>`<p>${esc(award)}</p>`).join('')}</section>`:'';
  const credits=p.team?`<dt>Type</dt><dd>Team project</dd><dt>My role</dt><dd><ul class="project-roles" aria-label="My role">${p.roles.map(role=>`<li>${esc(role)}</li>`).join('')}</ul></dd>`:'';
  return `<div class="detail-layout"><aside class="detail-info"><span class="detail-number">Project ${String(projects.indexOf(p)+1).padStart(2,'0')} / ${String(projects.length).padStart(2,'0')}</span><h1>${p.title}</h1>${p.fullTitle?`<h2 class="project-full-title">${esc(p.fullTitle)}</h2>`:''}${p.subtitle?`<p class="project-subtitle">${esc(p.subtitle)}</p>`:''}<dl><dt>Project</dt><dd>${p.ko}</dd><dt>Discipline</dt><dd>${p.disciplines||p.type}</dd>${p.material?`<dt>Material</dt><dd>${p.material}</dd>`:''}${p.year==='—'?'':`<dt>Year</dt><dd>${p.year}</dd>`}${credits}</dl><p class="description">${p.description}</p>${awards}${p.film?'<a class="film-jump" href="#film" data-film-jump>Watch film ↓</a>':''}<a href="#/projects" class="back-link">← All projects</a></aside><article class="detail-assets" aria-label="${p.title} gallery">${gallery(p)}<a class="next-project" href="#/project/${n.id}"><span>Next project</span><span>${n.title} ↗</span></a></article></div>`;
}
function render({keepScroll=false}={}){
  disposeMotif();
  disposePreviews();
  if(state.view==='home')main.querySelectorAll('.home-rail').forEach((rail,i)=>state.rails[i]=rail.scrollTop);
  const path=location.hash.replace(/^#\/?/,'').split('/');
  const nextView=path[0]==='info'?'cv':path[0]||'home';
  if(nextView==='cv'&&state.view!=='cv'){
    state.cvReturn=state.route;
    state.cvReturnScroll=window.scrollY;
  }
  state.view=nextView;
  if(state.view!=='cv')state.route=location.hash||'#/';
  document.body.classList.toggle('is-home',state.view==='home');
  document.body.classList.toggle('is-cv',state.view==='cv');
  resetCursor();
  document.querySelectorAll('[data-nav]').forEach(a=>{
    if(a.dataset.nav===(state.view==='project'?'projects':state.view))a.setAttribute('aria-current','page');
    else a.removeAttribute('aria-current');
  });
  let html,title;
  if(state.view==='project'){
    const id=path[1]==='between-objects'?'hangang-tuh':path[1];
    const p=projects.find(p=>p.id===id);
    html=p?detail(p):'<p>Project not found.</p><a class="back-link" href="#/projects">← All projects</a>';
    title=p?.title||'Project not found';
  }else{
    html=state.view==='projects'?grid():state.view==='index'?index():state.view==='cv'?cv():home();
    title=state.view==='home'?'Portfolio':state.view==='cv'?'CV':state.view[0].toUpperCase()+state.view.slice(1);
  }
  main.innerHTML=`<div class="${state.view==='home'?'home-view':state.view==='cv'?'cv-view':keepScroll?'':'page-enter'}">${html}</div>`;
  document.title=`${title} — ${profile.siteName}`;
  document.querySelector('#announcement').textContent=keepScroll?`${selected().length} projects shown`:title;
  if(!keepScroll)window.scrollTo({top:state.restoreCV?state.cvReturnScroll:0,behavior:'instant'});
  state.restoreCV=false;
  bind();
  if(state.view==='home')main.querySelectorAll('.home-rail').forEach((rail,i)=>rail.scrollTop=state.rails[i]);
}
function bindAssetErrors(root=main){
  root.querySelectorAll('.project-media img').forEach(img=>{
    const fallback=()=>{img.hidden=true;img.nextElementSibling.hidden=false};
    img.addEventListener('error',fallback,{once:true});
    if(img.complete&&img.naturalWidth===0)fallback();
  });
}
function bindIndexPreview(){
  const preview=main.querySelector('.index-preview');
  if(!preview)return;
  let hoveredRow;
  let focusedRow;

  function update(){
    const row=hoveredRow||focusedRow;
    preview.hidden=!row;
    if(!row||preview.parentElement===row)return;
    const project=projects.find(p=>p.id===row.dataset.preview);
    preview.innerHTML=cover(project);
    row.append(preview);
    bindAssetErrors(preview);
  }

  main.querySelectorAll('[data-preview]').forEach(row=>{
    row.addEventListener('pointerenter',event=>{
      if(event.pointerType==='touch')return;
      hoveredRow=row;
      update();
    });
    row.addEventListener('pointerleave',()=>{
      if(hoveredRow===row)hoveredRow=null;
      update();
    });
    row.addEventListener('focus',()=>{
      if(!row.matches(':focus-visible'))return;
      focusedRow=row;
      update();
    });
    row.addEventListener('blur',()=>{
      if(focusedRow===row)focusedRow=null;
      update();
    });
  });
}
function bind(){
  bindAssetErrors();
  disposeMotif=bindMotifMotion(main);
  disposePreviews=bindProjectPreviews(main,projects,assets);
  main.querySelectorAll('.video-stage video').forEach(video=>{
    video.addEventListener('contextmenu',event=>event.preventDefault());
    video.addEventListener('error',()=>{video.closest('.video-preview').querySelector('.video-status').textContent='영상을 불러오지 못했습니다. 페이지를 새로고침해 다시 시도해 주세요.'});
  });
  main.querySelector('[data-close-cv]')?.addEventListener('click',closeCV);
  main.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{
    state.filter=b.dataset.filter;render({keepScroll:true});
    main.querySelector(`[data-filter="${state.filter}"]`)?.focus({preventScroll:true});
  }));
  bindIndexPreview();
  main.querySelectorAll('.video-poster').forEach(button=>button.addEventListener('click',()=>{
    const section=button.closest('.video-preview');
    const iframe=document.createElement('iframe');
    iframe.src=`https://www.youtube-nocookie.com/embed/${encodeURIComponent(section.dataset.videoId)}?autoplay=1&playsinline=1&rel=0`;
    iframe.title=section.dataset.videoTitle;
    iframe.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.referrerPolicy='strict-origin-when-cross-origin';
    iframe.allowFullscreen=true;
    section.querySelector('.video-stage').replaceChildren(iframe);
    section.querySelector('.video-status').textContent=`${section.dataset.videoLabel} · YouTube`;
    section.querySelector('iframe').focus();
  }));
  main.querySelector('[data-film-jump]')?.addEventListener('click',e=>{
    e.preventDefault();const film=main.querySelector('.video-preview');
    film.scrollIntoView({behavior:reduced?'instant':'smooth',block:'center'});
    film.querySelector('.video-poster,iframe,video')?.focus({preventScroll:true});
  });
}
function resetCursor(){
  document.documentElement.classList.remove('has-logo-cursor');
  cursorLabel.classList.remove('visible');
}

function updateCursor(event){
  if(event.pointerType!=='mouse'){
    resetCursor();
    return;
  }

  const overProject=Boolean(event.target.closest?.('[data-project]'));
  cursorLabel.classList.toggle('visible',overProject);
  if(overProject){
    cursorLabel.style.left=`${Math.min(event.clientX,innerWidth-135)}px`;
    cursorLabel.style.top=`${Math.min(event.clientY,innerHeight-60)}px`;
  }

  const useNativeCursor=overProject||event.target.closest?.('iframe, video, .motif-viewport');
  const showLogo=!useNativeCursor&&cursorLogo.complete&&cursorLogo.naturalWidth>0;
  document.documentElement.classList.toggle('has-logo-cursor',showLogo);
  if(showLogo){
    cursorLogo.style.left=`${event.clientX}px`;
    cursorLogo.style.top=`${event.clientY}px`;
  }
}

document.addEventListener('pointerover',updateCursor,{passive:true});
document.addEventListener('pointermove',updateCursor,{passive:true});
document.addEventListener('pointercancel',resetCursor);
document.documentElement.addEventListener('pointerleave',resetCursor);
window.addEventListener('blur',resetCursor);
document.querySelector('#top').addEventListener('click',()=>{
  const behavior=reduced?'instant':'smooth';window.scrollTo({top:0,behavior});
  main.querySelectorAll('.home-rail').forEach(rail=>rail.scrollTo({top:0,behavior}));
});
document.querySelector('.skip-link').addEventListener('click',e=>{
  e.preventDefault();(main.querySelector('.home-rail')||main).focus({preventScroll:true});
});
window.addEventListener('hashchange',()=>{state.filter='All';render();main.focus({preventScroll:true})});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&state.view==='cv')closeCV()});
render();
