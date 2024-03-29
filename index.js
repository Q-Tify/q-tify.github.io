const valueInput = document.getElementById('Value');
const hideToggle = document.getElementById('Hide');
const animateToggle = document.getElementById('Animate');
const progressBlock = document.getElementById('progressBlock');

valueInput.addEventListener('input', function () {
  let inputValue = this.value.replace(/[^0-9]/g, '');
  inputValue = Math.max(0, Math.min(inputValue, 100));

  this.value = inputValue;
  progressBlock.setAttribute('value', inputValue);
});

animateToggle.addEventListener('change', function () {
  if (animateToggle.checked) {
    animateToggle.parentNode.classList.add('controls-container__item--active');
    progressBlock.setAttribute('Animated', '');
  } else {
    animateToggle.parentNode.classList.remove('controls-container__item--active');
    progressBlock.removeAttribute('Animated');
  }
});

hideToggle.addEventListener('change', function () {
  if (hideToggle.checked) {
    hideToggle.parentNode.classList.add('controls-container__item--active');
    progressBlock.setAttribute('state', 'Hidden');
  } else {
    hideToggle.parentNode.classList.remove('controls-container__item--active');
    progressBlock.setAttribute('state', 'Normal');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  progressBlock.setAttribute('value', valueInput.value);
});
