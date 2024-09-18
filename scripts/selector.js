document.getElementById('theme-switch').addEventListener('change', function () {
  const toggler = document.querySelector('.theme-toggler');
  if (this.checked) {
    toggler.classList.add('theme-toggler-active');
  } else {
    toggler.classList.remove('theme-toggler-active');
  }
});
