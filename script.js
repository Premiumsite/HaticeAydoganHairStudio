const loader=document.getElementById('loader');window.addEventListener('load',()=>setTimeout(()=>loader.classList.add('hide'),450));
const nav=document.getElementById('nav');let lastY=0;window.addEventListener('scroll',()=>{const y=window.scrollY;if(y>120&&y>lastY)nav.classList.add('hidden');else nav.classList.remove('hidden');lastY=y});
const io=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}})},{threshold:.14});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const petals=document.querySelector('.petal-field');for(let i=0;i<32;i++){const p=document.createElement('span');p.className='petal';p.style.left=Math.random()*100+'vw';p.style.animationDuration=9+Math.random()*12+'s';p.style.animationDelay=-(Math.random()*12)+'s';p.style.setProperty('--drift',(Math.random()*240-120)+'px');p.style.transform=`scale(${.6+Math.random()*1.1})`;petals.appendChild(p)}
const glow=document.getElementById('cursorGlow');let gx=0,gy=0,tx=0,ty=0;window.addEventListener('pointermove',e=>{tx=e.clientX;ty=e.clientY});function moveGlow(){gx+=(tx-gx)*.08;gy+=(ty-gy)*.08;glow.style.left=gx+'px';glow.style.top=gy+'px';requestAnimationFrame(moveGlow)}moveGlow();
document.querySelectorAll('.owner-card,.service-card,.glass-card').forEach(card=>{card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect();const x=e.clientX-r.left-r.width/2;const y=e.clientY-r.top-r.height/2;card.style.transform=`rotateY(${x/r.width*5}deg) rotateX(${-y/r.height*5}deg)`});card.addEventListener('pointerleave',()=>card.style.transform='')});
const lb=document.getElementById('lightbox'),lbImg=lb.querySelector('img'),lbBtn=lb.querySelector('button');document.querySelectorAll('.gallery-item').forEach(a=>{a.addEventListener('click',e=>{e.preventDefault();lbImg.src=a.href;lb.classList.add('active')})});function closeLb(){lb.classList.remove('active');lbImg.src=''}lbBtn.addEventListener('click',closeLb);lb.addEventListener('click',e=>{if(e.target===lb)closeLb()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLb()});
document.querySelectorAll('img').forEach(img=>{img.addEventListener('error',()=>{const wrap=img.closest('a')||img;wrap.style.display='none'})});

// premium review slider
const reviewCards=[...document.querySelectorAll('.review-track .review-card')];
let reviewIndex=0;
function showReview(i){
  if(!reviewCards.length)return;
  reviewCards[reviewIndex].classList.remove('active');
  reviewIndex=(i+reviewCards.length)%reviewCards.length;
  reviewCards[reviewIndex].classList.add('active');
}
document.querySelector('.review-arrow.prev')?.addEventListener('click',()=>showReview(reviewIndex-1));
document.querySelector('.review-arrow.next')?.addEventListener('click',()=>showReview(reviewIndex+1));
setInterval(()=>showReview(reviewIndex+1),5200);
