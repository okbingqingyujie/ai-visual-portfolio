(() => {
  const data=window.PORTFOLIO || {};
  document.querySelectorAll('[data-profile]').forEach(el=>{ const value=data[el.dataset.profile];if(value)el.textContent=value; });
  if(data.name)document.title=`${data.name} · 作品集`;
  if(data.avatar){const img=new Image();img.src=data.avatar;img.alt=`${data.name || '设计师'}的头像`;img.onload=()=>{document.querySelector('#portrait').replaceChildren(img);};}
  [['projects','completedProjects'],['years','yearsExperience']].forEach(([key,field])=>{const value=data[field];if(value!==null&&value!==undefined&&value!==''){const el=document.querySelector(`[data-metric="${key}"]`);el.textContent=String(value)+(key==='years'?' 年':'');el.parentElement.querySelector('.pending-label').hidden=true;}});
  if(data.experience?.length){ const list=document.querySelector('#experience-list');list.replaceChildren();data.experience.forEach(item=>{const row=document.createElement('div');row.className='experience-item';const date=document.createElement('span');date.className='experience-date';date.textContent=item.period;const content=document.createElement('div');const title=document.createElement('strong');title.textContent=item.title;const description=document.createElement('p');description.textContent=item.description;content.append(title,description);row.append(date,content);list.append(row);});}
  if(data.email){const link=document.querySelector('#email-link');link.textContent=data.email;link.href=`mailto:${data.email}`;link.hidden=false;document.querySelector('#email-pending').hidden=true;const cta=document.querySelector('#email-action');cta.href=link.href;cta.replaceChildren(document.createTextNode('发起一次对话 ↗'));}
  if(data.wechat){const button=document.querySelector('#wechat-copy');button.textContent=`${data.wechat} · 复制`;button.hidden=false;document.querySelector('#wechat-pending').hidden=true;button.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(data.wechat);showToast('微信号已复制');}catch{showToast(`请手动复制微信号：${data.wechat}`);}});}
  if(data.email||data.wechat)document.querySelector('#contact-note').hidden=true;
  let toastTimer;function showToast(message){const el=document.querySelector('.toast');el.textContent=message;el.hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.hidden=true,5000);}
  const toggle=document.querySelector('.menu-toggle'),menu=document.querySelector('.mobile-nav');
  function closeMenu(){toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','打开导航');menu.hidden=true;}
  toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'关闭导航':'打开导航');menu.hidden=!open;});
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!menu.hidden){closeMenu();toggle.focus();}});
  document.addEventListener('click',event=>{if(!event.target.closest('.site-header'))closeMenu();});
  matchMedia('(min-width: 761px)').addEventListener('change',event=>{if(event.matches)closeMenu();});
  const dialog=document.querySelector('#project-dialog');
  document.querySelectorAll('[data-project]').forEach(button=>{
    const project=data.projects?.[button.dataset.project];if(!project)return;
    const image=button.querySelector('img');image.src=project.image;image.alt=project.alt;
    const title=button.querySelector('strong');const [name,subtitle]=project.title.split(' — ');title.replaceChildren(document.createTextNode(name));
    if(subtitle&&button.classList.contains('project-featured')){const span=document.createElement('span');span.textContent=` — ${subtitle}`;title.append(span);}
    button.setAttribute('aria-label',`查看概念作品：${project.title}`);
    button.querySelector('.project-overline>span').textContent=project.category;
    button.querySelector('.project-summary').textContent=project.description.split('。')[0]+'。';
  });
  document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{const project=data.projects?.[button.dataset.project];if(!project)return;document.querySelector('#dialog-title').textContent=project.title;document.querySelector('#dialog-category').textContent=project.category;document.querySelector('#dialog-description').textContent=project.description;document.querySelector('#dialog-concept').textContent=project.concept;const image=document.querySelector('#dialog-img');image.src=project.image;image.alt=project.alt;dialog.showModal();dialog.scrollTop=0;document.body.classList.add('locked');}));
  document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();}});
  dialog.addEventListener('close',()=>document.body.classList.remove('locked'));
  const sections=document.querySelectorAll('main section[id],footer[id]');
  const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){document.querySelectorAll('.desktop-nav a').forEach(link=>{if(link.hash===`#${entry.target.id}`)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});}});},{rootMargin:'-20% 0px -55% 0px'});sections.forEach(section=>observer.observe(section));
})();
