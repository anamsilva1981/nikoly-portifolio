document.addEventListener('click', function (event) {
  const link = event.target.closest('a[href^="#"]');
  if (!link) return;

  const href = link.getAttribute('href');
  if (!href || href === '#') return;

  const target = document.querySelector(href);
  if (!target) return;

  event.preventDefault();

  target.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });

  if (window.history && window.history.replaceState) {
    window.history.replaceState(null, '', href);
  }
});
