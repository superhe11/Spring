import {NAV_DATA} from './headerarray.js';

document.addEventListener('DOMContentLoaded', () => {
  const navContainer = document.querySelector('.header_container-dropdown');

  function createNavItem(item) {
    const li = document.createElement('li');
    li.className = 'header__nav-item';

    const text = document.createElement('span');
    text.textContent = item.text;

    const icon = document.createElement('img');
    icon.className = 'header__icon';
    icon.alt = 'Dropdown icon';
    icon.src = item.icon;

    const submenu = document.createElement('ul');
    submenu.className = 'header__dropdown-menu';

    item.submenu.forEach((subItem) => {
      const subLi = document.createElement('li');
      subLi.className = 'header__dropdown-menu-element';

      const link = document.createElement('a');
      link.className = subItem.className || 'header__dropdown-menu-link';
      link.href = subItem.href;
      link.textContent = subItem.text;

      subLi.appendChild(link);
      submenu.appendChild(subLi);
    });

    li.appendChild(text);
    li.appendChild(icon);
    li.appendChild(submenu);

    return li;
  }

  function renderNav() {
    const ul = document.createElement('ul');
    ul.className = 'header__nav-list';

    NAV_DATA.forEach((item) => {
      const navItem = createNavItem(item);
      ul.appendChild(navItem);
    });

    navContainer.appendChild(ul);
  }

  renderNav();
});
