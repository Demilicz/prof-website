const iconMenu = document.querySelector('.menu-burger');
const bodyMenu = document.querySelector('.header__nav');

iconMenu.addEventListener('click', () => {
  document.body.classList.toggle('_lock');
  iconMenu.classList.toggle('_active');
  bodyMenu.classList.toggle('_active');
});
