/* ===== ADMIN DASHBOARD — CHOCONESIA ===== */

/* ===== DOM REFS ===== */
const themeToggle = document.getElementById('theme-toggle');

/* ===== THEME — DARK DEFAULT + LOCALSTORAGE + CIRCLE REVEAL ANIMATION ===== */
const savedTheme = localStorage.getItem('choconesia-theme');
if (savedTheme === 'light') {
  document.documentElement.setAttribute('data-theme', 'light');
  if (themeToggle) themeToggle.querySelector('i').className = 'fas fa-sun';
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const rect = themeToggle.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const diag = Math.ceil(Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2)) * 2;
    const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();

    const overlay = document.createElement('div');
    overlay.style.cssText = `position:fixed;left:${cx}px;top:${cy}px;width:${diag}px;height:${diag}px;margin:-${diag / 2}px 0 0 -${diag / 2}px;border-radius:50%;background:${accent};pointer-events:none;z-index:99999;transform:scale(0)`;
    document.body.appendChild(overlay);

    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';

    const tl = gsap.timeline({
      onComplete: () => {
        overlay.remove();
      }
    });

    tl.to(overlay, {
      scale: 1,
      opacity: 1,
      duration: 0.35,
      ease: 'power3.in',
      onComplete: () => {
        document.documentElement.setAttribute('data-theme', next);
        themeToggle.querySelector('i').className = next === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
        if (next === 'light') {
          localStorage.setItem('choconesia-theme', 'light');
        } else {
          localStorage.removeItem('choconesia-theme');
        }
      }
    });

    tl.to(overlay, {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.out'
    });
  });
}