import { setVisibleDataset } from "../utils/setVisibleDataset.js";

export const showLastHero = () => {
  const heroesElements = document.getElementsByClassName("superhero_container");
  const lastHero = document.getElementById(`${heroesElements.length - 1}`);
  lastHero.style.display = "flex";
  setVisibleDataset(lastHero, true);
};
