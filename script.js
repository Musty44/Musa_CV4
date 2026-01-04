// Simple interactions: dark mode toggle and year injection
(function(){
  const el = document.documentElement;
  const btn = document.getElementById('modeToggle');
  const yearEl = document.getElementById('year');

  // set year
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // load saved mode
  const saved = localStorage.getItem('site-mode');
  if (saved === 'dark') {
    document.body.classList.add('dark');
    btn.textContent = '☀️';
  }

  btn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    btn.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('site-mode', isDark ? 'dark' : 'light');
  });

  // download button analytics placeholder
  const downloadBtn = document.getElementById('downloadBtn');
  if (downloadBtn) downloadBtn.addEventListener('click', () => {
    // placeholder for tracking or analytics
    console.log('CV downloaded');
  });
})();
