(function () {
  const pop = document.createElement('div');
  pop.className = 'pop';
  pop.setAttribute('role', 'status');
  document.body.appendChild(pop);
  let timer;
  function say(msg) {
    pop.textContent = msg;
    pop.classList.add('show');
    clearTimeout(timer);
    timer = setTimeout(() => pop.classList.remove('show'), 2200);
  }
  const h1 = document.querySelector('h1');
  if (h1) { h1.style.cursor = 'pointer'; h1.addEventListener('click', () => say('Hi, I’m Esther. Thanks for stopping by.')); }
  const tape = document.getElementById('tape');
  if (tape) tape.addEventListener('click', () => say('Hi, I’m Esther. This market is simulated.'));
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { threshold: 0.15 });
    document.querySelectorAll('.projects>li').forEach(li => { li.classList.add('reveal'); io.observe(li); });
  }
})();
