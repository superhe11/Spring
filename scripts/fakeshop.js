let projectsData = [];

async function fetchProjects() {
  const response = await fetch('https://fakestoreapi.com/products');
  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }
  const products = await response.json();
  return products.map((product) => ({
    name: product.title,
    description: product.description,
    image: product.image,
  }));
}

function createProjectElement(project) {
  const projectElement = document.createElement('div');
  projectElement.classList.add('item');

  const projectImage = document.createElement('img');
  projectImage.src = project.image;
  projectImage.classList.add('item-img');
  projectImage.alt = project.name;
  projectElement.appendChild(projectImage);

  const projectText = document.createElement('div');
  projectText.classList.add('item-text');

  const projectTitle = document.createElement('p');
  projectTitle.textContent = project.name;
  projectTitle.classList.add('item-header');
  projectText.appendChild(projectTitle);

  const projectDescription = document.createElement('p');
  projectDescription.textContent = project.description;
  projectDescription.classList.add('item-description');
  projectText.appendChild(projectDescription);

  projectElement.appendChild(projectText);
  return projectElement;
}

async function displayProjects() {
  const projectContainer = document.querySelector('.main__card-section');
  const fragment = document.createDocumentFragment();

  try {
    projectsData = await fetchProjects();
    projectsData.forEach((project) => {
      const projectElement = createProjectElement(project);
      fragment.appendChild(projectElement);
    });
    projectContainer.appendChild(fragment);
  } catch (error) {
    console.error('Error displaying projects:', error);
  }
}

let debounceTimeout;
function debounceSearch(callback, delay) {
  return function () {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      callback();
    }, delay);
  };
}

function filterProjects() {
  const searchValue = document
    .getElementById('search-input')
    .value.toLowerCase();
  const projectContainer = document.querySelector('.main__card-section');
  projectContainer.innerHTML = '';

  const filteredProjects = projectsData.filter((project) => {
    const title = project.name.toLowerCase();
    const description = project.description.toLowerCase();
    return title.includes(searchValue) || description.includes(searchValue);
  });

  if (filteredProjects.length === 0) {
    projectContainer.innerHTML = '<p>No results found</p>';
  } else {
    filteredProjects.forEach((project) => {
      const projectElement = createProjectElement(project);
      projectContainer.appendChild(projectElement);
    });
  }
}

export function setupFakeShop() {
  document.getElementById('search-input').addEventListener('input', debounceSearch(filterProjects, 300));
  displayProjects();
}
