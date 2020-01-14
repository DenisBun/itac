import { setVisibleDataset } from "./utils/setVisibleDataset.js";
import { showFirstHero } from "./superheroes/showFirstHero.js";
import { showLastHero } from "./superheroes/showLastHero.js";

const hideCurrentVisibleSuperhero = direction => {
  const currentVisibleSuperhero = document.querySelector(
    '.superhero_container[data-visible="true"]'
  );
  currentVisibleSuperhero.style.display = "none";
  setVisibleDataset(currentVisibleSuperhero, false);
  toggleVisibleSuperhero(+currentVisibleSuperhero.id, direction);
};

const toggleVisibleSuperhero = (currentVisibleId, direction) => {
  const heroToToggle = document.getElementById(
    `${direction === "left" ? currentVisibleId - 1 : currentVisibleId + 1}`
  );
  if (heroToToggle) {
    heroToToggle.style.display = "flex";
    setVisibleDataset(heroToToggle, true);
  } else {
    direction === "left" ? showLastHero() : showFirstHero();
  }
};

export function leftClick() {
  hideCurrentVisibleSuperhero("left");
}

export function rightClick() {
  hideCurrentVisibleSuperhero("right");
}

export const addButtonHandlers = () => {
  document.querySelector(".left_button").addEventListener("click", leftClick);
  document.querySelector(".right_button").addEventListener("click", rightClick);
};
