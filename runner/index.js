(function () {
  const get = (target) => {
    return document.querySelector(target);
  };

  let leftPos = 0;
  const $runnerIcon = get('.runner-icon');

  const onKeyDown = (e) => {
    const keycode = e.keyCode;
    if (keycode === 37) {
      leftPos--;
      $runnerIcon.style.left = `${leftPos}%`;
    }
    if (keycode === 39) {
      leftPos++;
      $runnerIcon.style.left = `${leftPos}%`;
    }
  };

  const init = () => {
    window.addEventListener('keydown', onKeyDown);
  };

  init();
})();
