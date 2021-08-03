function menuClick() {
  const mobileMenu = document.querySelector('#mobile_menu');
  const navText = document.querySelector('#nav_ul');

  mobileMenu.classList.toggle('hide');
  navText.classList.toggle('show');
}

const buttonMenu = document.querySelector('#mobile_menu');
buttonMenu.addEventListener('click', menuClick);

const closeIcon = document.querySelector('#close-icon');
closeIcon.addEventListener('click', menuClick);