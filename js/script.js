function toggleMenu() {
  console.log('clicked');
  document.querySelector('.nav__small-screen').classList.toggle('nav__small-screen--invisible');
};

document.querySelector('.header__menu__icon--hamburger--mobile').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu();
});
