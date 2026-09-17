const revealTargets = document.querySelectorAll('.project,.qa-card,.skill,.learning,.about,.contact');
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('show'); observer.unobserve(e.target); } });
},{threshold:.12});
revealTargets.forEach(el=>{el.classList.add('reveal');observer.observe(el)});
