document.addEventListener('DOMContentLoaded', async () => {
  console.log(`loaded in ${Date.now() - performance.timing.navigationStart}ms`);

  const dialog_open = document.querySelector('#dialog_open');
  const dialog_close = document.querySelector('#dialog_close');

  dialog_open.addEventListener('click', () => {
    document.querySelector('#dialog').setAttribute('open', '');
  });

  dialog_close.addEventListener('click', () => {
    document.querySelector('#dialog').setAttribute('open', 'false');
  });
});
