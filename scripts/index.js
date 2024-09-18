import { setupThemeSwitch } from './selector.js';
import { renderNav } from './header.js';
import { setupBurgerMenu } from './burger.js';
//import { setupFakeShop } from './fakeshop.js';
import { renderCards, initCardSearch } from './cards.js';

document.addEventListener('DOMContentLoaded', () => {
  setupThemeSwitch();
  renderNav();
  setupBurgerMenu();

  //setupFakeShop();

  renderCards();
  initCardSearch();
});
