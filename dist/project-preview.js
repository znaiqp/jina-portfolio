export function bindProjectPreviews(root, projects, assets) {
  const motion = matchMedia('(any-hover: hover) and (prefers-reduced-motion: no-preference)');
  const stops = [...root.querySelectorAll('.project-grid .project-card')].map(card => {
    const project = projects.find(p => p.id === card.dataset.project);
    const media = card.querySelector('.project-media');
    const frames = [project.cover, ...project.gallery.filter(key => key !== project.cover)];
    let session;
    let timer;
    let current;
    let hovered = false;
    let focused = false;

    function stop() {
      session?.abort();
      session = null;
      clearTimeout(timer);
      media.querySelectorAll('.preview-frame').forEach(frame => frame.remove());
      current = null;
    }

    function update() {
      if (!motion.matches || (!hovered && !focused)) {
        stop();
        return;
      }
      if (session || frames.length < 2) return;

      session = new AbortController();
      const { signal } = session;
      let index = 1;
      async function advance() {
        const image = new Image();
        image.className = 'preview-frame';
        image.alt = '';
        image.src = assets[frames[index]].src;
        index = (index + 1) % frames.length;

        try {
          await image.decode();
          if (signal.aborted) return;

          const previous = current;
          current = image;
          media.append(image);
          const fade = image.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 120 });
          fade.onfinish = () => previous?.remove();
        } catch {
          // Keep the last usable image visible if a preview frame fails to load.
        }
        if (!signal.aborted) timer = setTimeout(advance, 420);
      }
      timer = setTimeout(advance, 120);
    }

    media.addEventListener('pointerenter', event => {
      if (event.pointerType === 'touch') return;
      hovered = true;
      update();
    });
    media.addEventListener('pointerleave', () => { hovered = false; update(); });
    card.addEventListener('focus', () => { focused = card.matches(':focus-visible'); update(); });
    card.addEventListener('blur', () => { focused = false; update(); });
    motion.addEventListener('change', update);
    return () => { stop(); motion.removeEventListener('change', update); };
  });
  return () => stops.forEach(stop => stop());
}
