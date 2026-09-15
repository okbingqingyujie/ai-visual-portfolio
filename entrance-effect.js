/* Replace this isolated effect when the original entrance code is supplied. */
(() => {
  const root = document.querySelector('.entrance');
  const art = document.querySelector('.entrance-art');
  const canvas = document.querySelector('#visual-field');
  const ctx = canvas.getContext('2d');
  if (!ctx) { document.querySelector('.motion-toggle').hidden = true; return; }
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let paused = reduced.matches, frame = 0, width, height, lastDraw = -Infinity;
  const image = new Image();
  image.onload = () => { art.style.backgroundImage = 'url("assets/form.webp")'; art.classList.add('loaded'); };
  image.src = 'assets/form.webp';
  function resize() { const dpr = Math.min(devicePixelRatio || 1, matchMedia('(pointer: coarse)').matches ? 1.5 : 2); width = innerWidth; height = root.clientHeight; canvas.width = width*dpr; canvas.height = height*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); draw(0); }
  function draw(time) {
    ctx.clearRect(0,0,width,height);
    const x=width*.72, y=height*.48;
    for(let i=0;i<26;i++) { const angle=i*.08+Math.sin(time*.00012)*.07; ctx.save();ctx.translate(x,y);ctx.rotate(angle);ctx.beginPath();ctx.ellipse(0,0,width*.19+i*2,height*.29+i*2,0,0,Math.PI*2);ctx.strokeStyle=`rgba(202,155,112,${.025+i*.0008})`;ctx.lineWidth=.7;ctx.stroke();ctx.restore(); }
  }
  function loop(time) { if(time-lastDraw>=1000/30){draw(time);lastDraw=time;} if(!paused&&!document.hidden) frame=requestAnimationFrame(loop); }
  function sync(){ cancelAnimationFrame(frame); const button=document.querySelector('.motion-toggle');button.setAttribute('aria-pressed',String(paused));button.innerHTML=paused?'<span aria-hidden="true">▷</span> 播放动效':'<span aria-hidden="true">Ⅱ</span> 暂停动效';if(!paused&&!document.hidden) frame=requestAnimationFrame(loop); }
  document.querySelector('.motion-toggle').addEventListener('click',()=>{paused=!paused;sync();});
  document.addEventListener('visibilitychange',sync);
  const onMotionChange=()=>{paused=reduced.matches;sync();};
  if(reduced.addEventListener)reduced.addEventListener('change',onMotionChange);
  else reduced.addListener(onMotionChange);
  root.addEventListener('pointermove',event=>{if(paused||event.pointerType==='touch')return;art.style.setProperty('--pointer-x',`${(event.clientX/innerWidth-.5)*12}px`);art.style.setProperty('--pointer-y',`${(event.clientY/innerHeight-.5)*9}px`);});
  addEventListener('resize',resize);resize();sync();
})();
