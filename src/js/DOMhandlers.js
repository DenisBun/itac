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

export const insertHeroToContainer = ({ name, images: { md } }, index) => {
  // шаг 1 - создаю heroContainer
  const heroContainer = document.createElement("div");
  heroContainer.className = "superhero_container";
  heroContainer.id = index;
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
