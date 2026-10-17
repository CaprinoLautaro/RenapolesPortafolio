const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Reveal al entrar en pantalla ---------- */
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => observer.observe(el));

/* ---------- Playhead: el scroll recorre la línea de tiempo del nav ---------- */
const root = document.documentElement;
let ticking = false;
function updatePlayhead() {
  const max = root.scrollHeight - window.innerHeight;
  const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
  root.style.setProperty('--p', p.toFixed(4));
  ticking = false;
}
window.addEventListener('scroll', () => {
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(updatePlayhead);
  }
}, { passive: true });
window.addEventListener('resize', updatePlayhead);
updatePlayhead();

/* ---------- Videos: solo reproducen los que se ven (mejor rendimiento) ---------- */
const videos = document.querySelectorAll('video.portfolio-video');
if (reduceMotion) {
  // Si la persona pidió menos movimiento, no hay autoplay: queda con controles.
  videos.forEach(v => { v.removeAttribute('autoplay'); v.pause(); v.controls = true; });
} else {
  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const v = entry.target;
      if (entry.isIntersecting) {
        const p = v.play();
        if (p && p.catch) p.catch(() => {});
      } else {
        v.pause();
      }
    });
  }, { threshold: 0.25 });
  videos.forEach(v => videoObserver.observe(v));
}

/* ---------- Accesibilidad: cada video lleva su título como etiqueta ---------- */
videos.forEach(v => {
  const card = v.closest('.video-card');
  const t = card && card.querySelector('.video-title');
  v.setAttribute('aria-label', t ? t.textContent.trim() : 'Reel destacado');
});

/* ---------- Tarjetas de formación: brillo que sigue al cursor ---------- */
if (!reduceMotion) {
  document.querySelectorAll('.edu-card').forEach(card => {
    card.addEventListener('pointermove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  });
}
