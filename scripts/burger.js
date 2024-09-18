import {NAV_DATA} from './headerarray.js';

function renderMenu() {
  const menuContainer = document.querySelector('.header__burger-menu');

  NAV_DATA.forEach((item) => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    const textIconContainer = document.createElement('div');
    textIconContainer.classList.add('text-icon-container');

    const itemText = document.createElement('span');
    itemText.textContent = item.text;

    const itemIcon = document.createElement('img');
    itemIcon.classList.add('menu-icon', 'rotate-icon');
    itemIcon.src = 'img/DDIconW.svg';

    textIconContainer.appendChild(itemText);
    textIconContainer.appendChild(itemIcon);
    menuItem.appendChild(textIconContainer);

    if (item.submenu) {
      const submenuContainer = document.createElement('div');
      submenuContainer.classList.add('submenu', 'submenu-hidden');

      item.submenu.forEach((sub) => {
        const submenuItem = document.createElement('a');
        submenuItem.href = sub.href;
        submenuItem.textContent = sub.text;
        submenuItem.classList.add('submenu-item');

        submenuContainer.appendChild(submenuItem);
      });

      menuItem.appendChild(submenuContainer);
      menuItem.addEventListener('click', () => {
        const isActive = menuItem.classList.contains('active');

        document.querySelectorAll('.menu-item.active').forEach((item) => {
          if (item !== menuItem) {
            item.classList.remove('active');
            item.querySelector('.submenu').classList.add('submenu-hidden');
            item.querySelector('.rotate-icon').classList.remove('rotate');
          }
        });
        menuItem.classList.toggle('active');
        submenuContainer.classList.toggle('submenu-hidden', isActive);
        itemIcon.classList.toggle('rotate', !isActive);
      });
    }

    menuContainer.appendChild(menuItem);
  });
}
function toggleMenu() {
  const fullscreenMenu = document.querySelector('.header__fullscreen-menu');
  const burgerIcon = document.querySelector('.burger-icon');
  const rotateImage = document.querySelector('.rotate-image');

  fullscreenMenu.classList.toggle('active');
  burgerIcon.classList.toggle('active');

  document.querySelectorAll('.header__burger-line').forEach((line) => {
    line.classList.toggle('burger-line-white');
  });

  if (rotateImage) {
    rotateImage.classList.toggle('rotate');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderMenu();

  const burgerIcon = document.querySelector('.burger-icon');
  burgerIcon.addEventListener('click', toggleMenu);
});
