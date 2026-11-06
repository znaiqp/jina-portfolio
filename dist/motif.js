// Hover advances the panorama rightward. Touch layouts tie it to vertical scroll.
// Dispose on hash navigation, when the portfolio replaces its DOM.
export function bindMotifMotion(root){
  const section=root.querySelector('[data-motif]');
  if(!section)return ()=>{};
  const viewport=section.querySelector('.motif-viewport');
  const image=section.querySelector('img');
  const touchLayout=matchMedia('(max-width:800px), (hover:none)');
  const reducedMotion=matchMedia('(prefers-reduced-motion:reduce)');
  let progress=0,distance=0,frame=0,previous=0,hovered=false,focused=false,visible=false;
  const clamp=value=>Math.max(0,Math.min(1,value));
  const stop=()=>{cancelAnimationFrame(frame);frame=0;previous=0};
  const paint=()=>{
    image.style.transform=`translate3d(${-distance*(1-progress)}px,0,0)`;
  };
  const scrollProgress=()=>{
    if(!touchLayout.matches||reducedMotion.matches)return;
    const top=parseFloat(getComputedStyle(viewport).top)||0;
    progress=clamp((top-section.getBoundingClientRect().top)/Math.max(1,distance));
    paint();
  };
  const tick=time=>{
    frame=0;
    if(reducedMotion.matches||touchLayout.matches||!visible||(!hovered&&!focused)||progress>=1){previous=0;return}
    if(previous)progress=clamp(progress+Math.min(time-previous,50)*.04/Math.max(1,distance));
    previous=time;paint();
    if(progress<1)frame=requestAnimationFrame(tick);
  };
  const start=()=>{if(!frame)frame=requestAnimationFrame(tick)};
  const measure=()=>{
    stop();
    distance=Math.max(0,viewport.clientHeight*Number(image.getAttribute('width'))/Number(image.getAttribute('height'))-viewport.clientWidth);
    section.style.setProperty('--motif-travel',`${distance}px`);
    section.dataset.mode=reducedMotion.matches?'reduced':touchLayout.matches?'scroll':'hover';
    if(reducedMotion.matches){image.style.transform='none';return}
    paint();scrollProgress();start();
  };
  const enter=event=>{if(event.pointerType==='mouse'){hovered=true;start()}};
  const leave=()=>{hovered=false;if(!focused)stop()};
  const focus=()=>{focused=viewport.matches(':focus-visible');if(focused)start()};
  const blur=()=>{focused=false;if(!hovered)stop()};
  const keyboard=event=>{
    if(reducedMotion.matches||touchLayout.matches)return;
    const steps={ArrowRight:progress+.1,ArrowLeft:progress-.1,Home:0,End:1};
    if(!(event.key in steps))return;
    event.preventDefault();focused=true;progress=clamp(steps[event.key]);paint();start();
  };
  let scrollFrame=0;
  const scroll=()=>{if(!scrollFrame&&touchLayout.matches&&!reducedMotion.matches)scrollFrame=requestAnimationFrame(()=>{scrollFrame=0;scrollProgress()})};
  viewport.addEventListener('pointerenter',enter);
  viewport.addEventListener('pointerleave',leave);
  viewport.addEventListener('focus',focus);
  viewport.addEventListener('blur',blur);
  viewport.addEventListener('keydown',keyboard);
  window.addEventListener('scroll',scroll,{passive:true});
  touchLayout.addEventListener('change',measure);
  reducedMotion.addEventListener('change',measure);
  const resize=new ResizeObserver(measure);resize.observe(viewport);
  const visibility=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;if(visible)start();else stop()});visibility.observe(viewport);
  measure();
  return ()=>{
    stop();cancelAnimationFrame(scrollFrame);resize.disconnect();visibility.disconnect();
    window.removeEventListener('scroll',scroll);
    touchLayout.removeEventListener('change',measure);
    reducedMotion.removeEventListener('change',measure);
    viewport.removeEventListener('pointerenter',enter);
    viewport.removeEventListener('pointerleave',leave);
    viewport.removeEventListener('focus',focus);
    viewport.removeEventListener('blur',blur);
    viewport.removeEventListener('keydown',keyboard);
  };
}
