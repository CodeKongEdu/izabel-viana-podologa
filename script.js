const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const header=document.querySelector('.site-header');
const progress=document.getElementById('scrollProgress');
function onScroll(){const y=window.scrollY;header?.classList.toggle('scrolled',y>24);const max=document.documentElement.scrollHeight-innerHeight; if(progress) progress.style.width=`${max>0?Math.min(100,y/max*100):0}%`;}
addEventListener('scroll',onScroll,{passive:true});onScroll();

const menuToggle=document.getElementById('menuToggle'),mobileMenu=document.getElementById('mobileMenu');
if(menuToggle&&mobileMenu){menuToggle.addEventListener('click',()=>{const open=mobileMenu.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));document.body.classList.toggle('menu-open',open)});mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobileMenu.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');document.body.classList.remove('menu-open')}));}

const reveals=[...document.querySelectorAll('.reveal')];
if(!reduceMotion&&'IntersectionObserver'in window){const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});reveals.forEach(el=>io.observe(el));}else reveals.forEach(el=>el.classList.add('visible'));

// Hero slideshow
const slides=[...document.querySelectorAll('[data-hero-slide]')],dots=[...document.querySelectorAll('[data-hero-dot]')];let heroIndex=0,heroTimer;
function setHero(i){heroIndex=(i+slides.length)%slides.length;slides.forEach((s,j)=>s.classList.toggle('active',j===heroIndex));dots.forEach((d,j)=>d.classList.toggle('active',j===heroIndex));}
function startHero(){if(reduceMotion||slides.length<2)return;clearInterval(heroTimer);heroTimer=setInterval(()=>setHero(heroIndex+1),6500)}
dots.forEach((d,i)=>d.addEventListener('click',()=>{setHero(i);startHero()}));setHero(0);startHero();

// Need selector
const needData={
  encravada:{index:'01',kicker:'Onicocriptose',title:'Unha encravada',text:'Atendimento para casos de unha encravada, com avaliação do quadro, cuidado podológico e orientações para o pós-atendimento.',image:'assets/images/tratamentos/framed/unha-encravada.webp',alt:'Caso real de unha encravada atendido na clínica',caption:'Caso real · avaliação e cuidado podológico',msg:'tratamento para unha encravada'},
  micose:{index:'02',kicker:'Onicomicose',title:'Micose de unha',text:'A onicomicose é uma infecção fúngica que pode alterar cor, espessura e textura da unha. O cuidado podológico inclui avaliação, higienização e acompanhamento da evolução.',image:'assets/images/tratamentos/framed/fungos-micoses.webp',alt:'Sequência real de acompanhamento de micose de unha',caption:'Onicomicose · avaliação e acompanhamento',msg:'micose de unha'},
  correcao:{index:'03',kicker:'Ortoniquia',title:'Correção ungueal',text:'Recursos de ortoniquia para auxiliar a correção do formato das unhas, respeitando a anatomia, a evolução e a necessidade de cada caso.',image:'assets/images/tratamentos/framed/correcao-ungueal.webp',alt:'Sequência real de correção ungueal',caption:'Evolução real · correção gradual e acompanhamento',msg:'correção ungueal e ortoniquia'},
  fissuras:{index:'04',kicker:'Pele dos pés',title:'Fissuras e rachaduras',text:'Cuidados para pele ressecada, fissuras plantares e áreas que precisam recuperar conforto e integridade.',image:'assets/images/tratamentos/framed/fissuras-rachaduras.webp',alt:'Caso real de fissuras e recuperação da pele dos pés',caption:'Recuperação da pele · mais conforto ao caminhar',msg:'fissuras e rachaduras nos pés'},
  calo:{index:'05',kicker:'Heloma',title:'Calo com núcleo',text:'O heloma é uma calosidade localizada, geralmente ligada à pressão ou ao atrito, que pode causar dor ao caminhar. O atendimento busca reduzir a calosidade e aliviar o ponto de pressão com segurança.',image:'assets/images/tratamentos/framed/calo-nucleo.webp',alt:'Caso real de heloma, conhecido como calo com núcleo',caption:'Heloma · avaliação e cuidado localizado',msg:'calo com núcleo e heloma'},
  laser:{index:'06',kicker:'Integrado ao protocolo',title:'Laserterapia',text:'Recurso complementar integrado ao protocolo de tratamento quando indicado, auxiliando o cuidado e o acompanhamento podológico conforme a necessidade de cada caso.',image:'assets/images/tratamentos/framed/laserterapia.webp',alt:'Aplicação de laserterapia em atendimento podológico',caption:'Laserterapia · conforme avaliação e indicação',msg:'laserterapia podológica'},
  especiais:{index:'07',kicker:'Atenção específica',title:'Cuidados especiais',text:'Atendimento para pés diabéticos, podopediatria e podologia geriátrica, considerando as particularidades de cada fase, condição e necessidade.',image:'assets/images/tratamentos/framed/cuidados-especiais.webp',alt:'Izabel Viana durante atendimento podológico individualizado',caption:'Atendimento individualizado · cuidado conforme a necessidade',msg:'pés diabéticos, podopediatria ou podologia geriátrica'},
  preventivo:{index:'08',kicker:'Acompanhamento',title:'Cuidado preventivo',text:'Atendimento periódico para acompanhar unhas e pele dos pés, identificar alterações e manter uma rotina de cuidado.',image:'assets/images/tratamentos/framed/cuidado-preventivo.webp',alt:'Izabel Viana Podóloga em ambiente clínico',caption:'Prevenção · rotina e acompanhamento',msg:'cuidado podológico preventivo'}
};
const stage=document.getElementById('needStage');
function selectNeed(key,scroll=false){
  const d=needData[key]; if(!d||!stage)return;
  const img=stage.querySelector('[data-need-image]');
  const visual=stage.querySelector('.need-visual');
  stage.classList.add('changing');
  const preload=new Image();
  preload.onload=()=>{
    stage.querySelector('.need-index').textContent=d.index;
    stage.querySelector('[data-need-kicker]').textContent=d.kicker;
    stage.querySelector('[data-need-title]').textContent=d.title;
    stage.querySelector('[data-need-text]').textContent=d.text;
    img.src=d.image; img.alt=d.alt;
    if(visual) visual.style.setProperty('--need-bg',`url("${d.image}")`);
    const caption=stage.querySelector('[data-need-caption]'); if(caption)caption.textContent=d.caption;
    const link=stage.querySelector('[data-need-link]'); link.href=`https://wa.me/5511960145012?text=${encodeURIComponent('Olá! Vim pelo site e gostaria de saber mais sobre '+d.msg+'.')}`;
    requestAnimationFrame(()=>stage.classList.remove('changing'));
  };
  preload.onerror=()=>stage.classList.remove('changing');
  preload.src=d.image;
  document.querySelectorAll('.need-chip').forEach(b=>{const active=b.dataset.need===key;b.classList.toggle('active',active);b.setAttribute('aria-selected',String(active));});
  document.querySelectorAll('[data-service]').forEach(c=>c.classList.toggle('is-highlighted',c.dataset.service===key));
  if(scroll)stage.scrollIntoView({behavior:reduceMotion?'auto':'smooth',block:'center'});
}
const needChips=[...document.querySelectorAll('.need-chip')];
needChips.forEach((b,i)=>{b.addEventListener('click',()=>selectNeed(b.dataset.need,false));b.addEventListener('keydown',e=>{if(!['ArrowRight','ArrowLeft','Home','End'].includes(e.key))return;e.preventDefault();let n=i;if(e.key==='ArrowRight')n=(i+1)%needChips.length;if(e.key==='ArrowLeft')n=(i-1+needChips.length)%needChips.length;if(e.key==='Home')n=0;if(e.key==='End')n=needChips.length-1;needChips[n].focus();selectNeed(needChips[n].dataset.need,false);});});
document.querySelectorAll('[data-focus-need]').forEach(b=>b.addEventListener('click',()=>selectNeed(b.dataset.focusNeed,true)));

// Before/after comparison
for(const card of document.querySelectorAll('[data-compare]')){const range=card.querySelector('.compare-range'),wrap=card.querySelector('.compare-after-wrap'),after=card.querySelector('.compare-after'),divider=card.querySelector('.compare-divider');const update=()=>{const v=Number(range.value);wrap.style.width=v+'%';after.style.width=`${10000/Math.max(v,1)}%`;divider.style.left=v+'%'};range.addEventListener('input',update);update();}

// Reviews
const track=document.getElementById('reviewTrack'),reviewCards=track?[...track.children]:[],reviewDots=document.getElementById('reviewDots');let reviewIndex=0,reviewTimer,touchStart=0;
function goReview(i){if(!track||!reviewCards.length)return;reviewIndex=(i+reviewCards.length)%reviewCards.length;track.style.transform=`translateX(-${reviewIndex*100}%)`;reviewDots?.querySelectorAll('button').forEach((d,j)=>d.classList.toggle('active',j===reviewIndex));}
if(reviewDots){reviewCards.forEach((_,i)=>{const b=document.createElement('button');b.setAttribute('aria-label',`Ver avaliação ${i+1}`);b.addEventListener('click',()=>{goReview(i);restartReviews()});reviewDots.appendChild(b)})}
function restartReviews(){if(reduceMotion||reviewCards.length<2)return;clearInterval(reviewTimer);reviewTimer=setInterval(()=>goReview(reviewIndex+1),6500)}
document.getElementById('reviewPrev')?.addEventListener('click',()=>{goReview(reviewIndex-1);restartReviews()});document.getElementById('reviewNext')?.addEventListener('click',()=>{goReview(reviewIndex+1);restartReviews()});track?.addEventListener('touchstart',e=>touchStart=e.touches[0].clientX,{passive:true});track?.addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-touchStart;if(Math.abs(dx)>40){goReview(reviewIndex+(dx<0?1:-1));restartReviews()}},{passive:true});goReview(0);restartReviews();

// Lightbox
const lightbox=document.getElementById('lightbox'),lightboxImg=lightbox?.querySelector('img');document.querySelectorAll('[data-lightbox]').forEach(btn=>btn.addEventListener('click',()=>{if(!lightbox||!lightboxImg)return;lightboxImg.src=btn.dataset.lightbox;lightboxImg.alt=btn.querySelector('img')?.alt||'Imagem ampliada';lightbox.showModal()}));lightbox?.querySelector('.lightbox-close')?.addEventListener('click',()=>lightbox.close());lightbox?.addEventListener('click',e=>{if(e.target===lightbox)lightbox.close()});

// Video play in view + manual toggle
const storyVideo=document.getElementById('storyVideo'),videoToggle=document.getElementById('videoToggle'),phoneFrame=document.querySelector('.phone-frame');function syncVideo(){if(!storyVideo||!phoneFrame)return;phoneFrame.classList.toggle('playing',!storyVideo.paused);videoToggle?.setAttribute('aria-label',storyVideo.paused?'Reproduzir vídeo':'Pausar vídeo');if(videoToggle)videoToggle.innerHTML=`<span>${storyVideo.paused?'▶':'Ⅱ'}</span>`}
videoToggle?.addEventListener('click',()=>{if(storyVideo.paused)storyVideo.play().catch(()=>{});else storyVideo.pause();syncVideo()});storyVideo?.addEventListener('play',syncVideo);storyVideo?.addEventListener('pause',syncVideo);if(storyVideo&&!reduceMotion&&'IntersectionObserver'in window){const vio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting&&e.intersectionRatio>.6)storyVideo.play().catch(()=>{});else storyVideo.pause()}),{threshold:[0,.6,1]});vio.observe(storyVideo)}

// FAQ single-open
for(const d of document.querySelectorAll('.faq-list details'))d.addEventListener('toggle',()=>{if(d.open)document.querySelectorAll('.faq-list details').forEach(o=>{if(o!==d)o.open=false})});

// Data layer hooks for later GTM/Google Ads configuration
for(const el of document.querySelectorAll('.track'))el.addEventListener('click',()=>{window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:el.dataset.event||'interaction',placement:el.dataset.placement||'unknown'})});

document.getElementById('year').textContent=new Date().getFullYear();
