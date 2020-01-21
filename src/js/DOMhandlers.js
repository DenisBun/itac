const ROOT_ELEMENT = document.getElementById("root");

export const insertHeroesContainer = () => {
  const container = document.createElement("div");
  container.className = "superheroes_container";
  ROOT_ELEMENT.appendChild(container);
};

export const renderHeroes = superheroesArray => {
  console.log(superheroesArray);
  superheroesArray.forEach((superhero, index) => {
    insertHeroToContainer(superhero, index);
  });
};

export const insertHeroToContainer = ({ id, name, images: { md } }, index) => {
  // шаг 1 - создаю heroContainer
  const heroContainer = document.createElement("div");
  heroContainer.className = "superhero_container";
  heroContainer.id = index;
  heroContainer.dataset.heroId = id;
  // шаг 2 - создаю картинку
  const heroImg = document.createElement("img");
  heroImg.src = md;
  // шаг 3 - создаю название
  const heroTitle = document.createElement("h1");
  heroTitle.innerHTML = name;
  // Шаг 4 - вставляю картинку и название в heroContainer
  heroContainer.appendChild(heroImg);
  heroContainer.appendChild(heroTitle);
  // шаг 5 - втсавляю heroCotainer в heroesContainer
  document.querySelector(".superheroes_container").appendChild(heroContainer);
  heroContainer.addEventListener("click", e => {
    fetchHeroData(e.currentTarget.dataset.heroId);
  });
};

export const createSlideButtons = () => {
  const buttonsContainer = document.createElement("div");
  buttonsContainer.className = "buttons_container";
  const leftButton = document.createElement("button");
  leftButton.className = "left_button";
  leftButton.innerHTML = "⬅";
  const rightButton = document.createElement("button");
  rightButton.className = "right_button";
  rightButton.innerHTML = "➡";
  buttonsContainer.appendChild(leftButton);
  buttonsContainer.appendChild(rightButton);
  ROOT_ELEMENT.appendChild(buttonsContainer);
};

const fetchHeroData = heroId => {
  return fetch(
    `https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/${heroId}.json`
  )
    .then(data => data.json())
    .then(
      ({
        name,
        powerstats,
        appearance: { race },
        biography: { fullName },
        images: { lg: heroImage }
      }) => createHero(name, powerstats, race, fullName, heroImage)
    )
    .then(() => {
      createGoBackButton();
    });
};

const createHero = (name, powerstats, race, fullName, heroImage) => {
  removeSlider();
  const heroContainer = document.createElement("div");
  heroContainer.className = "heroContainer";
  heroContainer.innerHTML = `
    <h1>${name}</h1>
    <div class="title">${fullName}</div>
    <img src=${heroImage} />
  `;
  document.getElementById("root").appendChild(heroContainer);
};

const removeSlider = () => {
  document.querySelector(".superheroes_container").style.display = "none";
  document.querySelector(".buttons_container").style.display = "none";
};

const showSlider = () => {
  document.querySelector(".superheroes_container").style.display = "flex";
  document.querySelector(".buttons_container").style.display = "flex";
  document.querySelector('.heroContainer').remove();
  document.querySelector('.goBackBtn').remove();
}

const createGoBackButton = () => {
  const button = document.createElement('button');
  button.className = 'goBackBtn';
  button.innerHTML = 'Go Back';
  button.addEventListener('click', showSlider)
  document.getElementById("root").appendChild(button);
}
