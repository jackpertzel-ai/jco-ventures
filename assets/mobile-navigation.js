(() => {
  const header = document.querySelector('.site-header');
  const menu = header?.querySelector('.site-menu');
  if (!menu) return;
  const trigger = menu.querySelector('summary');
  const panel = menu.querySelector('.site-menu-panel');
  const mobile = matchMedia('(max-width:980px)');
  const pagePath = header.dataset.sitePath;
  const locationLabel = menu.querySelector('.site-menu-location');
  const sectionLinks = [...menu.querySelectorAll('[data-section]')];
  const sections = pagePath === '/' ? sectionLinks.map(link => ({link, section:document.getElementById(link.dataset.section)})).filter(item => item.section) : [];
  const closeMenu = (restoreFocus = false) => {
    menu.open = false;
    if (restoreFocus) trigger.focus({preventScroll:true});
  };
  const sizePanel = () => {
    const available = Math.max(100, window.innerHeight - header.getBoundingClientRect().bottom - 1);
    panel.style.setProperty('--menu-available-height', `${available}px`);
  };
  const updateLocation = () => {
    if (!sections.length) return;
    let current;
    for (const item of sections) {
      if (item.section.getBoundingClientRect().top <= header.getBoundingClientRect().bottom + 120) current = item;
    }
    for (const item of sections) {
      if (item === current) item.link.setAttribute('aria-current','location');
      else item.link.removeAttribute('aria-current');
    }
    locationLabel.textContent = current ? current.link.querySelector('span').textContent : 'Home';
  };
  menu.addEventListener('toggle', () => { if (menu.open) { sizePanel(); updateLocation(); } });
  panel.addEventListener('click', event => {
    const link = event.target.closest('a');
    if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const target = pagePath === '/' && link.dataset.section ? document.getElementById(link.dataset.section) : null;
    closeMenu();
    if (target) requestAnimationFrame(() => {
      const added = !target.hasAttribute('tabindex');
      if (added) target.setAttribute('tabindex','-1');
      target.focus({preventScroll:true});
      if (added) target.addEventListener('blur', () => target.removeAttribute('tabindex'), {once:true});
    });
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.open) { event.preventDefault(); closeMenu(true); }
  });
  document.addEventListener('pointerdown', event => {
    if (menu.open && !header.contains(event.target)) closeMenu(panel.contains(document.activeElement));
  });
  document.addEventListener('focusin', event => {
    if (menu.open && !header.contains(event.target)) closeMenu();
  });
  window.addEventListener('resize', () => {
    sizePanel();
    if (!mobile.matches && menu.open) {
      const restore = menu.contains(document.activeElement);
      closeMenu();
      if (restore) header.querySelector('.wordmark').focus({preventScroll:true});
    }
  });
  let scheduled = false;
  window.addEventListener('scroll', () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => { updateLocation(); if (menu.open) sizePanel(); scheduled = false; });
  }, {passive:true});
  window.addEventListener('pageshow', () => { closeMenu(); updateLocation(); });
  updateLocation();
})();
