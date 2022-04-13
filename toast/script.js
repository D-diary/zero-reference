(function () {
  const get = (target) => {
    return document.querySelector(target);
  };

  let id = 0;

  const $toastButton = get('.toast-button');
  const $toastContainer = get('.toast-container');

  const onClickToastButton = () => {
    let $toast = document.createElement('div');
    $toast.classList.add('toast');
    id++;
    $toast.innerText = `${id}번 토스트 입니다.`;
    $toastContainer.prepend($toast);
    $toast.classList.add('show');

    setTimeout(() => {
      $toast.classList.remove('show');
      $toastContainer.removeChild($toast);
    }, 3000);
  };

  const init = () => {
    $toastButton.addEventListener('click', onClickToastButton);
  };

  init();
})();
