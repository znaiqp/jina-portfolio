import { hangangAssets } from './assets.js';
import { weaveAssets } from './weave-assets.js';
import { vegemilAssets } from './vegemil-assets.js';
import { bindMotifMotion } from './motif.js';
import { profile } from './profile.js';
import { projectCredits } from './project-credits.js';
const assets={...hangangAssets,...weaveAssets,...vegemilAssets};

// Supplied projects use their own image galleries. Other entries remain examples.
const projects = [
  {id:'hangang-tuh',title:'HANGANG TUH',ko:'한강터',type:'Brand identity',disciplines:'Brand identity, Pictogram, Signage',year:'2026',ratio:'1.7778',bg:'#f1f1ed',cover:'hero',film:{id:'XqM5RE9RETE',label:'한강터 브랜드 필름'},subtitle:'한강의 인파 밀집 위험과 정보 전달을 위해 설계된 공공 정보 브랜딩 시스템.',award:'2026 Red Dot Design Brand Communication Junior Award | Winner',gallery:['hero','posters','campaign','pictograms','signage','poster','guide'],description:'한강터는 인파 밀집 위험과 교통 혼잡을 줄이고, 한강의 문화유산과 254가지에 달하는 활동 정보를 전달하는 공공 정보 브랜딩 시스템입니다. AI 기반 인파 밀집도 분석으로 축제 방문객을 안전한 경로로 안내하며, 활동을 액티비티·어반·리프레쉬·개더링의 4개 구역으로 분류합니다. 로고의 원형 단위를 활용한 디자인과 픽토그램으로 일관되고 직관적인 시각 언어를 구축했습니다. 안내 표지판·지도·모바일 앱·안전 경로 안내에 적용해 활동 정보와 공간 구역, 위험 지역을 쉽게 파악하고 한강을 안전하고 명확하게 경험하도록 돕습니다.'},
  {id:'weave-kitchen',title:'WEAVE KITCHEN',ko:'위브 키친',type:'Product',disciplines:'Product, Furniture',year:'—',ratio:'2.66',bg:'#eeece9',cover:'weave-hero',material:'인조대리석',film:{id:'OfqosCr1TNE',label:'위브 키친 프로젝트 영상'},subtitle:'2인 이상의 교류와 다이닝 경험을 확장하는 관계 중심형 아일랜드 식탁',gallery:['weave-hero','weave-overall','weave-cantilever','weave-construction','weave-sink','weave-faucet','weave-storage','weave-wine'],description:'위브(WEAVE)는 2인 이상의 교류와 다이닝 경험을 확장하는 관계 중심형 아일랜드 식탁입니다. 모듈러 주방의 삼각형 조리 동선과 체류 높이를 고려해 준비부터 식사까지 이어지도록 설계했습니다. 한쪽에 배치한 캔틸레버 구조로 다리 공간을 확보해 마주 앉아 대화할 수 있으며, 측면 수납과 싱크·수전은 식사 준비와 와인 칠링을 돕습니다. 직선적인 작업 공간과 곡선적인 교류 공간을 결합하고, 인조대리석 일체형 몰드 성형으로 유려한 형태와 양산 가능성을 고려했습니다. 조리와 식사, 취미와 대화가 어우러지는 생활의 중심을 제안합니다.'},
  {id:'vegemil',title:'VEGEMIL',ko:'베지밀',fullTitle:'세대를 잇는 50년의 온기: 국민음료 베지밀 프로젝트',type:'Brand identity',disciplines:'Brand identity, Packaging, Brand experience',year:'—',ratio:'1.7778',bg:'#f6f2de',cover:'vegemil-hero',film:{src:'assets/vegemil-film.mp4',label:'베지밀 프로젝트 영상'},subtitle:'모든 세대의 건강한 일상을 제안하는 베지밀 웰니스 리브랜딩 프로젝트.',award:'대한디자인전람회 | 특선',gallery:['vegemil-hero','vegemil-sharing','vegemil-identity','vegemil-logo-ko','vegemil-logo-en','vegemil-graphics','vegemil-packages','vegemil-prototypes','vegemil-gift','vegemil-gift-life','vegemil-pocket','vegemil-together','vegemil-daily','vegemil-shirt','vegemil-shirt-back','vegemil-shirt-detail','vegemil-shirt-life','vegemil-pyramid','vegemil-bottles','vegemil-keyring','vegemil-bloom-lab','vegemil-wellness-space'],description:'베지밀의 50년 헤리티지와 신뢰를 바탕으로, 모든 세대가 일상에서 선택하는 웰니스 브랜드로 재정의했습니다. 고착화된 이미지를 개선하고 젊은 세대와의 접점을 넓히기 위해 ‘모두를 위한 균형(Balanced Circle for All)’을 중심으로 패키지와 그래픽 시스템을 재설계했습니다. 재활용 가능한 선물형 패키지와 굿즈로 지속 가능한 소비를 제안하고, 오프라인 공간 ‘Vege Bloom Lab’에서 건강한 일상을 경험하도록 설계해 브랜드 경험을 확장했습니다. 이를 통해 건강한 소비와 지속 가능한 식문화를 연결하는 브랜드 방향성을 제시합니다.'},
  {id:'common-ground',title:'Common Ground',ko:'함께 머무는 풍경',type:'Space',year:'2026',ratio:'1.6',bg:'#f7f7f3',description:'일상 속에서 함께 머무는 공간을 주제로 한 예시 프로젝트입니다. 공간의 맥락과 사용자 경험, 설계 의도를 실제 프로젝트 내용으로 교체할 수 있습니다.'},
  {id:'a-new-routine',title:'A New Routine',ko:'새로운 일상의 방식',type:'Brand identity',year:'2026',ratio:'1.25',bg:'#e8e8e3',description:'일상적인 습관에서 새로운 가능성을 발견하는 브랜드 디자인 예시입니다. 브랜드의 핵심 개념과 시각 언어가 전개되는 과정을 담는 영역입니다.'},
  {id:'soft-structure',title:'Soft Structure',ko:'유연한 구조',type:'Product',year:'2025',ratio:'.88',bg:'#efefeb',description:'구조와 감각의 균형을 살펴보는 제품 디자인 예시입니다. 소재 연구, 형태 실험, 프로토타입과 최종 결과를 순서대로 소개할 수 있습니다.'},
  {id:'traces-of-place',title:'Traces of Place',ko:'장소의 흔적',type:'Editorial',year:'2025',ratio:'1.4',bg:'#f5f5f0',description:'장소에 남아 있는 기록을 엮는 편집 디자인 예시입니다. 리서치 자료와 편집 방향, 지면 구성의 원리를 실제 작업 내용으로 채울 수 있습니다.'},
  {id:'in-between',title:'In—Between',ko:'경계에서 발견한 것들',type:'Space',year:'2025',ratio:'1.25',bg:'#e9e9e4',description:'공간과 공간의 경계를 다루는 디자인 예시입니다. 현장에서 발견한 질문이 공간적 제안으로 이어지는 과정을 소개하는 영역입니다.'},
  {id:'small-gestures',title:'Small Gestures',ko:'작은 움직임',type:'Brand identity',year:'2024',ratio:'1.2',bg:'#f5f5f1',description:'작은 몸짓에서 출발한 시각 아이덴티티 예시입니다. 로고, 타이포그래피와 다양한 매체의 응용을 하나의 시각 언어로 소개할 수 있습니다.'},
  {id:'collected-notes',title:'Collected Notes',ko:'모아둔 생각들',type:'Editorial',year:'2024',ratio:'.9',bg:'#edede8',description:'관찰과 생각을 모은 편집 디자인 예시입니다. 이미지, 텍스트, 실험을 연결하는 작업의 구성과 결과를 담을 수 있습니다.'}
].map(project=>({...project,...projectCredits[project.id]}));
const types=['All','Product','Space','Brand identity','Editorial'];
const main=document.querySelector('main');
const cursor=document.querySelector('.cursor-label');
const state={filter:'All',view:null,rails:[0,0],route:'#/',cvReturn:'#/',cvReturnScroll:0,restoreCV:false};
let disposeMotif=()=>{};
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const selected=()=>projects.filter(p=>state.filter==='All'||p.type===state.filter);
document.querySelector('.nav-count').textContent=String(projects.length).padStart(2,'0');

function placeholder(p,asset='01',ratio=p.ratio){
  return `<div class="placeholder" role="img" aria-label="${esc(p.title)} — image placeholder ${asset}" style="--ratio:${ratio};--bg:${p.bg}"><svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg><span class="asset-label" aria-hidden="true"><span>IMAGE ${asset}</span><span>${esc(profile.siteName)}</span></span></div>`;
}
function imageAsset(key,{eager=false}={}){
  const a=assets[key];
  return `<div class="project-media" data-asset="${key}"><img src="${a.src}" width="${a.width}" height="${a.height}" alt="${esc(a.alt)}" loading="${eager?'eager':'lazy'}" decoding="async" ${eager?'fetchpriority="high"':''}><div class="image-fallback" hidden>${placeholder({title:a.alt,ratio:a.width/a.height,bg:'#f4f4f0'})}</div></div>`;
}
function cover(p){return p.cover?imageAsset(p.cover):placeholder(p)}
function card(p){return `<a class="project-card" href="#/project/${p.id}" data-project="${p.id}"><div class="card-meta"><div><h2>${p.title}</h2><p class="type">${p.team?'Team project · ':''}${p.type}</p></div><div class="right-meta"><p>${p.ko}</p><p class="year">${p.year}${p.gallery?'':' · Sample'}</p></div></div>${cover(p)}<span class="card-arrow" aria-hidden="true">↗</span></a>`}
function railMeta(p,label=p.disciplines||p.type){return `<a class="rail-meta" href="#/project/${p.id}"><span class="rail-title">${p.title}</span><span class="rail-client">${p.ko}</span><span class="rail-type">${p.team?'Team project · ':''}${label}</span><span class="rail-date">${p.year}${p.gallery?'':' · Sample'}</span></a>`}
function railCard(p,key=p.cover,{eager=false}={}){return `<article class="rail-item">${railMeta(p)}<a class="rail-cover" data-project="${p.id}" href="#/project/${p.id}" aria-label="${p.title} 프로젝트 보기">${key?imageAsset(key,{eager}):placeholder(p)}</a></article>`}
function videoPreview(p=projects[0]){
  const a=assets[p.gallery?.[0]||p.cover];
  if(p.film.src)return `<section class="video-preview" aria-label="${esc(p.film.label)}"><div class="video-stage"><video controls controlslist="nodownload" playsinline preload="none" poster="${a.src}" aria-label="${esc(p.film.label)}"><source src="${esc(p.film.src)}" type="video/mp4">이 브라우저에서 영상을 재생할 수 없습니다. 최신 브라우저에서 다시 시도해 주세요.</video></div><div class="video-caption"><span role="status" class="video-status">${esc(p.film.label)}</span></div></section>`;
  return `<section class="video-preview" aria-label="${esc(p.film.label)}" data-video-id="${esc(p.film.id)}" data-video-title="${esc(p.title+' — '+p.film.label)}" data-video-label="${esc(p.film.label)}"><div class="video-stage"><button type="button" class="video-poster" aria-label="${esc(p.ko)} 영상 재생"><img src="${a.src}" alt="" width="${a.width}" height="${a.height}" loading="lazy"><span class="play-icon" aria-hidden="true">▶</span><span class="video-poster-caption">${p.title}<span>Play film ↗</span></span></button></div><div class="video-caption"><span role="status" class="video-status">${esc(p.film.label)}</span><a href="https://youtu.be/${esc(p.film.id)}" target="_blank" rel="noopener noreferrer">YouTube에서 보기 ↗</a></div></section>`;
}
function home(){
  const p=projects[0],weave=projects.find(p=>p.id==='weave-kitchen'),vegemil=projects.find(p=>p.id==='vegemil');
  const samples=projects.filter(p=>!p.gallery);
  return `<h1 class="sr-only">${esc(profile.siteName)} — Selected works</h1><div class="home-grid"><section class="home-rail" tabindex="0" aria-label="왼쪽 프로젝트 목록 — 별도로 스크롤"><div class="rail-content">${railCard(vegemil,vegemil.cover,{eager:true})}${railCard(p,'poster')}${samples.filter((_,i)=>i%2===0).map(p=>railCard(p)).join('')}<a class="rail-end" href="#/index">View project index ↗</a></div></section><section class="home-rail" tabindex="0" aria-label="오른쪽 프로젝트 목록 — 별도로 스크롤"><div class="rail-content">${railCard(weave,'weave-hero',{eager:true})}${railCard(p,'guide')}<article class="rail-item">${railMeta(p,'Brand film')}${videoPreview()}</article>${railCard(p,'signage')}${samples.filter((_,i)=>i%2===1).map(p=>railCard(p)).join('')}<a class="rail-end" href="#/cv">CV ↗</a></div></section></div>`;
}
function filterButtons(){return `<div class="filters" aria-label="Filter by discipline">${types.map(t=>`<button type="button" data-filter="${t}" class="${state.filter===t?'active':''}" aria-pressed="${state.filter===t}">${t}</button>`).join('')}</div>`}
function grid(){const list=selected();return `<h1 class="sr-only">Projects</h1><div class="subbar"><span class="eyebrow">Projects / 2024—2026</span>${filterButtons()}<span class="results-count">${String(list.length).padStart(2,'0')} projects</span></div><div class="project-grid">${list.map(card).join('')}</div>`}
function index(){
  const list=selected();
  return `<h1 class="sr-only">Project index</h1><div class="index-layout"><aside class="index-sidebar"><p>Index<br><span class="eyebrow">2024—2026</span></p><p class="eyebrow">Type of work</p>${filterButtons()}<p class="index-caption">An overview of selected works.<br>프로젝트명에 마우스를 올려<br>이미지를 미리 볼 수 있습니다.</p></aside><section aria-label="Project index"><div class="index-table-head"><span>No.</span><span>Project</span><span>Discipline</span><span>Year</span></div>${list.map(p=>`<a class="index-row" href="#/project/${p.id}" data-preview="${p.id}"><span>${String(projects.indexOf(p)+1).padStart(2,'0')}</span><span class="row-title">${p.title}${p.team?'<small class="team-label">Team project</small>':''}</span><span class="row-type">${p.type}</span><span class="row-year">${p.year} ↗</span></a>`).join('')}<div class="index-bottom"><span>${String(list.length).padStart(2,'0')} selected projects</span><span>Selected works & studies</span></div></section></div><div class="index-preview" aria-hidden="true"></div>`;
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
  if(!p.gallery)return `${placeholder(p,'01','1.3')}${placeholder(p,'02','.9')}<div class="asset-pair">${placeholder(p,'03')}${placeholder(p,'04')}</div>${placeholder(p,'05','1.6')}`;
  const keys=p.id==='vegemil'?p.gallery.flatMap(key=>key==='vegemil-graphics'?[key,'vegemil-motif']:[key]):p.gallery;
  return keys.map((key,i)=>{if(key==='vegemil-motif')return motifFigure(i+1);const a=assets[key],label=a.label||(key==='hero'?'Identity':key[0].toUpperCase()+key.slice(1));return `<figure class="gallery-figure">${imageAsset(key,{eager:i===0})}<figcaption><span>${String(i+1).padStart(2,'0')} / ${esc(label)}</span><span>${esc(a.alt)}</span></figcaption></figure>${p.film&&i===0?videoPreview(p):''}`}).join('');
}
function detail(p){
  const n=projects[(projects.indexOf(p)+1)%projects.length];
  const credits=p.team?`<dt>Type</dt><dd>Team project / 팀 프로젝트</dd><dt>My role</dt><dd><ul class="project-roles" aria-label="담당 역할">${p.roles.map(role=>`<li>${esc(role)}</li>`).join('')}</ul></dd>`:'';
  return `<div class="detail-layout"><aside class="detail-info"><span class="detail-number">Project ${String(projects.indexOf(p)+1).padStart(2,'0')} / ${String(projects.length).padStart(2,'0')}</span><h1>${p.title}</h1>${p.fullTitle?`<h2 class="project-full-title">${esc(p.fullTitle)}</h2>`:''}${p.subtitle?`<p class="project-subtitle">${esc(p.subtitle)}</p>`:''}<dl><dt>Project</dt><dd>${p.ko}</dd><dt>Discipline</dt><dd>${p.disciplines||p.type}</dd>${p.material?`<dt>Material</dt><dd>${p.material}</dd>`:''}${p.year==='—'?'':`<dt>Year</dt><dd>${p.year}</dd>`}${credits}${p.gallery?'':`<dt>Status</dt><dd>Sample project / 예시 콘텐츠</dd>`}</dl><p class="description">${p.description}</p>${p.award?`<section class="project-award" aria-label="수상 내역"><span>Award</span><p>${esc(p.award)}</p></section>`:''}${p.film?'<a class="film-jump" href="#film" data-film-jump>Watch film ↓</a>':''}<a href="#/projects" class="back-link">← All projects</a></aside><article class="detail-assets" aria-label="${p.title} gallery">${gallery(p)}<a class="next-project" href="#/project/${n.id}"><span>Next project</span><span>${n.title} ↗</span></a></article></div>`;
}
function render({keepScroll=false}={}){
  disposeMotif();
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
  cursor.classList.remove('visible');
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
function bind(){
  bindAssetErrors();
  disposeMotif=bindMotifMotion(main);
  main.querySelectorAll('.video-stage video').forEach(video=>{
    video.addEventListener('contextmenu',event=>event.preventDefault());
    video.addEventListener('error',()=>{video.closest('.video-preview').querySelector('.video-status').textContent='영상을 불러오지 못했습니다. 페이지를 새로고침해 다시 시도해 주세요.'});
  });
  main.querySelector('[data-close-cv]')?.addEventListener('click',closeCV);
  main.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{
    state.filter=b.dataset.filter;render({keepScroll:true});
    main.querySelector(`[data-filter="${state.filter}"]`)?.focus({preventScroll:true});
  }));
  main.querySelectorAll('[data-project]').forEach(a=>{
    a.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse')cursor.classList.add('visible')});
    a.addEventListener('pointerleave',()=>cursor.classList.remove('visible'));
  });
  const preview=main.querySelector('.index-preview');
  main.querySelectorAll('[data-preview]').forEach(a=>{
    const show=()=>{const p=projects.find(p=>p.id===a.dataset.preview);preview.innerHTML=cover(p);preview.classList.add('show');bindAssetErrors(preview)};
    a.addEventListener('pointerenter',show);a.addEventListener('focus',show);
    a.addEventListener('pointerleave',()=>preview.classList.remove('show'));a.addEventListener('blur',()=>preview.classList.remove('show'));
  });
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
document.addEventListener('pointermove',e=>{
  cursor.style.left=`${Math.min(e.clientX,innerWidth-135)}px`;
  cursor.style.top=`${Math.min(e.clientY,innerHeight-60)}px`;
},{passive:true});
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
