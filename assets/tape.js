(function () {
  const canvas = document.getElementById('tape');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const STEP_PX = 3, SPREAD = 1.2, LEAN = 0.01;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let W, H, N, price = 100, inv = 0, trades = 0, frame = 0;
  let mid = [], bid = [], ask = [], fills = [];
  const css = n => getComputedStyle(document.documentElement).getPropertyValue(n).trim();
  const BID = css('--bid'), ASK = css('--ask'), TEXT = css('--text');
  function size() {
    const dpr = window.devicePixelRatio || 1;
    W = canvas.clientWidth; H = canvas.clientHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    N = Math.ceil(W / STEP_PX) + 1;
  }
  function step() {
    price += (Math.random() - 0.5) * 0.8 + (100 - price) * 0.002;
    const quote = price - LEAN * inv;
    mid.push(price); bid.push(quote - SPREAD / 2); ask.push(quote + SPREAD / 2);
    if (mid.length > N) { mid.shift(); bid.shift(); ask.shift(); }
    fills.forEach(f => f.i--);
    fills = fills.filter(f => f.i >= 0);
    const r = Math.random(), last = mid.length - 1;
    if (r < 0.07) { inv--; trades++; fills.push({ i: last, y: ask[last], c: ASK }); }
    else if (r < 0.14) { inv++; trades++; fills.push({ i: last, y: bid[last], c: BID }); }
  }
  function draw() {
    ctx.clearRect(0, 0, W, H);
    const lo = Math.min(...bid) - 1, hi = Math.max(...ask) + 1;
    const y = v => H - 16 - (v - lo) / (hi - lo) * (H - 32);
    const x = i => W - (mid.length - 1 - i) * STEP_PX;
    ctx.beginPath();
    mid.forEach((_, i) => ctx.lineTo(x(i), y(ask[i])));
    for (let i = mid.length - 1; i >= 0; i--) ctx.lineTo(x(i), y(bid[i]));
    ctx.closePath(); ctx.fillStyle = 'rgba(140,153,184,.16)'; ctx.fill();
    ctx.beginPath();
    mid.forEach((v, i) => i ? ctx.lineTo(x(i), y(v)) : ctx.moveTo(x(i), y(v)));
    ctx.strokeStyle = TEXT; ctx.lineWidth = 1.5; ctx.stroke();
    fills.forEach(f => { ctx.beginPath(); ctx.arc(x(f.i), y(f.y), 3.5, 0, 6.283); ctx.fillStyle = f.c; ctx.fill(); });
  }
  function readout() {
    document.getElementById('inv').textContent = inv;
    document.getElementById('trades').textContent = trades;
  }
  size();
  for (let k = 0; k < N; k++) step();
  draw(); readout();
  window.addEventListener('resize', () => { size(); draw(); });
  if (reduce) return;
  (function loop() {
    if (++frame % 3 === 0) { step(); draw(); if (frame % 15 === 0) readout(); }
    requestAnimationFrame(loop);
  })();
})();
