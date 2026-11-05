import { hangangAssets } from './assets.js';
import { weaveAssets } from './weave-assets.js';
const assets={...hangangAssets,...weaveAssets};

// Supplied projects use their own image galleries. Other entries remain examples.
const projects = [
  {id:'hangang-tuh',title:'HANGANG TUH',ko:'한강터',type:'Brand identity',disciplines:'Brand identity, Pictogram, Signage',year:'2026',ratio:'1.7778',bg:'#f1f1ed',cover:'hero',film:true,gallery:['hero','posters','campaign','pictograms','signage','poster','guide'],description:'활동과 사람이 모이는 한강의 터. 한강터는 활동, 도시, 휴식, 모임을 하나의 흐름으로 연결하는 공간 브랜드 디자인 프로젝트입니다. 유연한 타원 형태를 바탕으로 심볼과 그래픽을 전개하고, 픽토그램과 사인, 포스터, 안내 책자로 확장했습니다.'},
  {id:'weave-kitchen',title:'WEAVE KITCHEN',ko:'위브 키친',type:'Product',disciplines:'Product, Furniture',year:'—',ratio:'2.66',bg:'#eeece9',cover:'weave-hero',material:'인조대리석',subtitle:'2인 이상의 교류와 다이닝 경험을 확장하는 관계 중심형 아일랜드 식탁',gallery:['weave-hero','weave-overall','weave-cantilever','weave-construction','weave-sink','weave-faucet','weave-storage','weave-wine'],description:'위브(WEAVE)는 2인 이상의 교류와 다이닝 경험을 확장하는 관계 중심형 아일랜드 식탁입니다. 모듈러 주방의 삼각형 조리 동선과 체류 높이를 고려해 준비부터 식사까지 이어지도록 설계했습니다. 한쪽에 배치한 캔틸레버 구조로 다리 공간을 확보해 마주 앉아 대화할 수 있으며, 측면 수납과 싱크·수전은 식사 준비와 와인 칠링을 돕습니다. 직선적인 작업 공간과 곡선적인 교류 공간을 결합하고, 인조대리석 일체형 몰드 성형으로 유려한 형태와 양산 가능성을 고려했습니다. 조리와 식사, 취미와 대화가 어우러지는 생활의 중심을 제안합니다.'},
  {id:'common-ground',title:'Common Ground',ko:'함께 머무는 풍경',type:'Space',year:'2026',ratio:'1.6',bg:'#f7f7f3',description:'일상 속에서 함께 머무는 공간을 주제로 한 예시 프로젝트입니다. 공간의 맥락과 사용자 경험, 설계 의도를 실제 프로젝트 내용으로 교체할 수 있습니다.'},
  {id:'a-new-routine',title:'A New Routine',ko:'새로운 일상의 방식',type:'Brand identity',year:'2026',ratio:'1.25',bg:'#e8e8e3',description:'일상적인 습관에서 새로운 가능성을 발견하는 브랜드 디자인 예시입니다. 브랜드의 핵심 개념과 시각 언어가 전개되는 과정을 담는 영역입니다.'},
  {id:'soft-structure',title:'Soft Structure',ko:'유연한 구조',type:'Product',year:'2025',ratio:'.88',bg:'#efefeb',description:'구조와 감각의 균형을 살펴보는 제품 디자인 예시입니다. 소재 연구, 형태 실험, 프로토타입과 최종 결과를 순서대로 소개할 수 있습니다.'},
  {id:'traces-of-place',title:'Traces of Place',ko:'장소의 흔적',type:'Editorial',year:'2025',ratio:'1.4',bg:'#f5f5f0',description:'장소에 남아 있는 기록을 엮는 편집 디자인 예시입니다. 리서치 자료와 편집 방향, 지면 구성의 원리를 실제 작업 내용으로 채울 수 있습니다.'},
  {id:'in-between',title:'In—Between',ko:'경계에서 발견한 것들',type:'Space',year:'2025',ratio:'1.25',bg:'#e9e9e4',description:'공간과 공간의 경계를 다루는 디자인 예시입니다. 현장에서 발견한 질문이 공간적 제안으로 이어지는 과정을 소개하는 영역입니다.'},
  {id:'small-gestures',title:'Small Gestures',ko:'작은 움직임',type:'Brand identity',year:'2024',ratio:'1.2',bg:'#f5f5f1',description:'작은 몸짓에서 출발한 시각 아이덴티티 예시입니다. 로고, 타이포그래피와 다양한 매체의 응용을 하나의 시각 언어로 소개할 수 있습니다.'},
  {id:'collected-notes',title:'Collected Notes',ko:'모아둔 생각들',type:'Editorial',year:'2024',ratio:'.9',bg:'#edede8',description:'관찰과 생각을 모은 편집 디자인 예시입니다. 이미지, 텍스트, 실험을 연결하는 작업의 구성과 결과를 담을 수 있습니다.'}
];
const types=['All','Product','Space','Brand identity','Editorial'];
const main=document.querySelector('main');
const cursor=document.querySelector('.cursor-label');
const state={filter:'All',view:null,rails:[0,0]};
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const selected=()=>projects.filter(p=>state.filter==='All'||p.type===state.filter);
document.querySelector('.nav-count').textContent=String(projects.length).padStart(2,'0');

function placeholder(p,asset='01',ratio=p.ratio){
  return `<div class="placeholder" role="img" aria-label="${esc(p.title)} — image placeholder ${asset}" style="--ratio:${ratio};--bg:${p.bg}"><svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg><span class="asset-label" aria-hidden="true"><span>IMAGE ${asset}</span><span>HANGANG TUH</span></span></div>`;
}
function imageAsset(key,{eager=false}={}){
  const a=assets[key];
  return `<div class="project-media" data-asset="${key}"><img src="${a.src}" width="${a.width}" height="${a.height}" alt="${esc(a.alt)}" loading="${eager?'eager':'lazy'}" decoding="async" ${eager?'fetchpriority="high"':''}><div class="image-fallback" hidden>${placeholder({title:a.alt,ratio:a.width/a.height,bg:'#f4f4f0'})}</div></div>`;
}
function cover(p){return p.cover?imageAsset(p.cover):placeholder(p)}
function card(p){return `<a class="project-card" href="#/project/${p.id}" data-project="${p.id}"><div class="card-meta"><div><h2>${p.title}</h2><p class="type">${p.type}</p></div><div class="right-meta"><p>${p.ko}</p><p class="year">${p.year}${p.gallery?'':' · Sample'}</p></div></div>${cover(p)}<span class="card-arrow" aria-hidden="true">↗</span></a>`}
function railMeta(p,label=p.disciplines||p.type){return `<a class="rail-meta" href="#/project/${p.id}"><span class="rail-title">${p.title}</span><span class="rail-client">${p.ko}</span><span class="rail-type">${label}</span><span class="rail-date">${p.year}${p.gallery?'':' · Sample'}</span></a>`}
function railCard(p,key=p.cover,{eager=false}={}){return `<article class="rail-item">${railMeta(p)}<a class="rail-cover" data-project="${p.id}" href="#/project/${p.id}" aria-label="${p.title} 프로젝트 보기">${key?imageAsset(key,{eager}):placeholder(p)}</a></article>`}
function videoPreview(){return `<section class="video-preview" aria-label="한강터 브랜드 영상"><div class="video-stage"><button type="button" class="video-poster" aria-label="한강터 영상 재생"><img src="${hangangAssets.hero.src}" alt="" width="${hangangAssets.hero.width}" height="${hangangAssets.hero.height}" loading="lazy"><span class="play-icon" aria-hidden="true">▶</span><span class="video-poster-caption">HANGANG TUH<span>Play brand film ↗</span></span></button></div><div class="video-caption"><span role="status" class="video-status">한강터 브랜드 필름</span><a href="https://youtu.be/XqM5RE9RETE" target="_blank" rel="noopener noreferrer">YouTube에서 보기 ↗</a></div></section>`}
function home(){
  const p=projects[0],weave=projects.find(p=>p.id==='weave-kitchen');
  const samples=projects.filter(p=>!p.gallery);
  return `<h1 class="sr-only">HANGANG TUH — Selected works</h1><div class="home-grid"><section class="home-rail" tabindex="0" aria-label="왼쪽 프로젝트 목록 — 별도로 스크롤"><div class="rail-content">${railCard(p,'poster',{eager:true})}${samples.filter((_,i)=>i%2===0).map(p=>railCard(p)).join('')}<a class="rail-end" href="#/index">View project index ↗</a></div></section><section class="home-rail" tabindex="0" aria-label="오른쪽 프로젝트 목록 — 별도로 스크롤"><div class="rail-content">${railCard(weave,'weave-hero',{eager:true})}${railCard(p,'guide')}<article class="rail-item">${railMeta(p,'Brand film')}${videoPreview()}</article>${railCard(p,'signage')}${samples.filter((_,i)=>i%2===1).map(p=>railCard(p)).join('')}<a class="rail-end" href="#/info">Info ↗</a></div></section></div>`;
}
function filterButtons(){return `<div class="filters" aria-label="Filter by discipline">${types.map(t=>`<button type="button" data-filter="${t}" class="${state.filter===t?'active':''}" aria-pressed="${state.filter===t}">${t}</button>`).join('')}</div>`}
function grid(){const list=selected();return `<h1 class="sr-only">Projects</h1><div class="subbar"><span class="eyebrow">Projects / 2024—2026</span>${filterButtons()}<span class="results-count">${String(list.length).padStart(2,'0')} projects</span></div><div class="project-grid">${list.map(card).join('')}</div>`}
function index(){
  const list=selected();
  return `<h1 class="sr-only">Project index</h1><div class="index-layout"><aside class="index-sidebar"><p>Index<br><span class="eyebrow">2024—2026</span></p><p class="eyebrow">Type of work</p>${filterButtons()}<p class="index-caption">An overview of selected works.<br>프로젝트명에 마우스를 올려<br>이미지를 미리 볼 수 있습니다.</p></aside><section aria-label="Project index"><div class="index-table-head"><span>No.</span><span>Project</span><span>Discipline</span><span>Year</span></div>${list.map(p=>`<a class="index-row" href="#/project/${p.id}" data-preview="${p.id}"><span>${String(projects.indexOf(p)+1).padStart(2,'0')}</span><span class="row-title">${p.title}</span><span class="row-type">${p.type}</span><span class="row-year">${p.year} ↗</span></a>`).join('')}<div class="index-bottom"><span>${String(list.length).padStart(2,'0')} selected projects</span><span>Selected works & studies</span></div></section></div><div class="index-preview" aria-hidden="true"></div>`;
}
function info(){return `<div class="info-layout"><div class="info-caption">Info / About</div><article class="info-body"><h1>HANGANG TUH<br>Selected perspectives.</h1><p class="korean">익숙한 일상에서 질문을 발견하고,<br>사물과 공간, 이미지로 생각을 연결합니다.</p><p class="english">Finding questions in the everyday.<br>Connecting ideas through objects, spaces, and images.</p><a href="#/project/hangang-tuh" aria-label="한강터 프로젝트 보기">${imageAsset('hero')}</a><p class="draft-note">소개 문구 초안입니다. 자신의 디자인 관점과 관심 분야를 이곳에 적어주세요.<br>한강터와 위브 키친 외의 프로젝트는 구성을 보여주기 위한 예시 콘텐츠입니다.</p></article><aside class="info-aside"><section><h2>Name</h2><p>HANGANG TUH</p></section><section><h2>Disciplines</h2><p>Product<br>Space<br>Brand identity<br>Editorial</p></section><section><h2>Contact</h2><p>연락처는 추후 업데이트됩니다.</p></section><section><h2>Archive</h2><p>2024—2026<br>Selected works & experiments</p></section><section><h2>Featured projects</h2><p><a href="#/project/hangang-tuh">한강터 / HANGANG TUH ↗</a><br><a href="#/project/weave-kitchen">위브 키친 / WEAVE KITCHEN ↗</a></p></section></aside></div>`}
function gallery(p){
  if(!p.gallery)return `${placeholder(p,'01','1.3')}${placeholder(p,'02','.9')}<div class="asset-pair">${placeholder(p,'03')}${placeholder(p,'04')}</div>${placeholder(p,'05','1.6')}`;
  return p.gallery.map((key,i)=>{const a=assets[key],label=a.label||(key==='hero'?'Identity':key[0].toUpperCase()+key.slice(1));return `<figure class="gallery-figure">${imageAsset(key,{eager:i===0})}<figcaption><span>${String(i+1).padStart(2,'0')} / ${esc(label)}</span><span>${esc(a.alt)}</span></figcaption></figure>${p.film&&i===0?videoPreview():''}`}).join('');
}
function detail(p){
  const n=projects[(projects.indexOf(p)+1)%projects.length];
  return `<div class="detail-layout"><aside class="detail-info"><span class="detail-number">Project ${String(projects.indexOf(p)+1).padStart(2,'0')} / ${String(projects.length).padStart(2,'0')}</span><h1>${p.title}</h1>${p.subtitle?`<p class="project-subtitle">${esc(p.subtitle)}</p>`:''}<dl><dt>Project</dt><dd>${p.ko}</dd><dt>Discipline</dt><dd>${p.disciplines||p.type}</dd>${p.material?`<dt>Material</dt><dd>${p.material}</dd>`:''}${p.year==='—'?'':`<dt>Year</dt><dd>${p.year}</dd>`}${p.gallery?'':`<dt>Status</dt><dd>Sample project / 예시 콘텐츠</dd>`}</dl><p class="description">${p.description}</p>${p.film?'<a class="film-jump" href="#film" data-film-jump>Watch brand film ↓</a>':''}<a href="#/projects" class="back-link">← All projects</a></aside><article class="detail-assets" aria-label="${p.title} gallery">${gallery(p)}<a class="next-project" href="#/project/${n.id}"><span>Next project</span><span>${n.title} ↗</span></a></article></div>`;
}
function render({keepScroll=false}={}){
  if(state.view==='home')main.querySelectorAll('.home-rail').forEach((rail,i)=>state.rails[i]=rail.scrollTop);
  const path=location.hash.replace(/^#\/?/,'').split('/');
  state.view=path[0]||'home';
  document.body.classList.toggle('is-home',state.view==='home');
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
    html=state.view==='projects'?grid():state.view==='index'?index():state.view==='info'?info():home();
    title=state.view==='home'?'Portfolio':state.view[0].toUpperCase()+state.view.slice(1);
  }
  main.innerHTML=`<div class="${state.view==='home'?'home-view':keepScroll?'':'page-enter'}">${html}</div>`;
  document.title=title==='HANGANG TUH'?'HANGANG TUH — 한강터':`${title} — HANGANG TUH`;
  document.querySelector('#announcement').textContent=keepScroll?`${selected().length} projects shown`:title;
  if(!keepScroll)window.scrollTo({top:0,behavior:'instant'});
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
    section.querySelector('.video-stage').innerHTML='<iframe src="https://www.youtube-nocookie.com/embed/XqM5RE9RETE?autoplay=1&playsinline=1&rel=0" title="한강터 HANGANG TUH 브랜드 영상" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
    section.querySelector('.video-status').textContent='한강터 브랜드 필름 · YouTube';
    section.querySelector('iframe').focus();
  }));
  main.querySelector('[data-film-jump]')?.addEventListener('click',e=>{
    e.preventDefault();const film=main.querySelector('.video-preview');
    film.scrollIntoView({behavior:reduced?'instant':'smooth',block:'center'});
    film.querySelector('.video-poster,iframe')?.focus({preventScroll:true});
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
render();
