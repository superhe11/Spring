import { CARDS } from './arraycards.js';
let debounceTimeout;
export function renderCards() {
  const cardSection = document.querySelector('.main__card-section');

  CARDS.forEach((cardObj) => {
    const cardOutline = document.createElement('div');
    cardOutline.className = cardObj.outlineClass;

    const cardContainer = document.createElement('div');
    cardContainer.className = cardObj.card.cardClass;

    const cardImage = document.createElement('img');
    cardImage.className = cardObj.card.image.imageClass;
    cardImage.src = cardObj.card.image.src;
    cardImage.alt = cardObj.card.image.alt;

    const textContainer = document.createElement('div');
    const heading = document.createElement('h3');
    heading.textContent = cardObj.card.text.heading;

    const description = document.createElement('p');
    description.textContent = cardObj.card.text.description;

    textContainer.appendChild(heading);
    textContainer.appendChild(description);
    cardContainer.appendChild(cardImage);
    cardContainer.appendChild(textContainer);
    cardOutline.appendChild(cardContainer);
    cardSection.appendChild(cardOutline);
  });
}

export function initCardSearch() {
  document
    .getElementById('search-input')
    .addEventListener('input', debounceSearch(filterCards, 300));
}

function debounceSearch(callback, delay) {
  return function () {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      callback();
    }, delay);
  };
}

function filterCards() {
  const searchValue = document.getElementById('search-input').value.toLowerCase();
  const cardSection = document.querySelector('.main__card-section');
  cardSection.innerHTML = '';

  const filteredCards = CARDS.filter((cardObj) => {
    const title = cardObj.card.text.heading.toLowerCase();
    const description = cardObj.card.text.description.toLowerCase();
    return title.includes(searchValue) || description.includes(searchValue);
  });

  if (filteredCards.length === 0) {
    cardSection.innerHTML = '<p>No results found</p>';
  } else {
    filteredCards.forEach((cardObj) => {
      const cardOutline = document.createElement('div');
      cardOutline.className = cardObj.outlineClass;

      const cardContainer = document.createElement('div');
      cardContainer.className = cardObj.card.cardClass;

      const cardImage = document.createElement('img');
      cardImage.className = cardObj.card.image.imageClass;
      cardImage.src = cardObj.card.image.src;
      cardImage.alt = cardObj.card.image.alt;

      const textContainer = document.createElement('div');
      const heading = document.createElement('h3');
      heading.textContent = cardObj.card.text.heading;

      const description = document.createElement('p');
      description.textContent = cardObj.card.text.description;

      textContainer.appendChild(heading);
      textContainer.appendChild(description);
      cardContainer.appendChild(cardImage);
      cardContainer.appendChild(textContainer);
      cardOutline.appendChild(cardContainer);
      cardSection.appendChild(cardOutline);
    });
  }
}
