document.addEventListener('DOMContentLoaded', async () => {
  console.log(`loaded in ${Date.now() - performance.timing.navigationStart}ms`);

  const menu = document.querySelector('#menu');
  const dialog_open = document.querySelector('#dialog_open');
  const dialog_close = document.querySelector('#dialog_close');

  const force_newtab = document.querySelector('#force_newtab');
  const force_current = document.querySelector('#force_current');
  const force_dark = document.querySelector('#force_dark');
  const force_light = document.querySelector('#force_light');
  const force_system = document.querySelector('#force_system');

  force_newtab.addEventListener('click', () => {
    const allElements = document.querySelectorAll('*');
    allElements.forEach((element) => {
      if (element.href && element.href.startsWith('https://')) {
        element.target = '_blank';
        element.rel = 'noopener';
        element.style.fontFamily = "'Roboto', sans-serif";
      }
    });
  });

  force_current.addEventListener('click', () => {
    const allElements = document.querySelectorAll('*');
    allElements.forEach((element) => {
      if (element.href && element.href.startsWith('https://')) {
        element.target = '_self';
        element.rel = 'noopener';
        element.style.fontFamily = "'Roboto', sans-serif";
      }
    });
  });

  force_dark.addEventListener('click', () => {
    document.querySelector('html').classList.remove('mdui-theme-light');
    document.querySelector('html').classList.remove('mdui-theme-auto');
    document.querySelector('html').classList.add('mdui-theme-dark');
  });

  force_light.addEventListener('click', () => {
    document.querySelector('html').classList.remove('mdui-theme-dark');
    document.querySelector('html').classList.remove('mdui-theme-auto');
    document.querySelector('html').classList.add('mdui-theme-light');
  });

  force_system.addEventListener('click', () => {
    document.querySelector('html').classList.remove('mdui-theme-dark');
    document.querySelector('html').classList.remove('mdui-theme-light');
    document.querySelector('html').classList.add('mdui-theme-auto');
  });

  menu.addEventListener('click', () => {
    document.querySelector('#drawer').setAttribute('open', '');
  });

  dialog_open.addEventListener('click', () => {
    document.querySelector('#dialog').setAttribute('open', '');
  });

  dialog_close.addEventListener('click', () => {
    document.querySelector('#dialog').setAttribute('open', 'false');
  });
});
