import {
  insertHeroesContainer,
  renderHeroes,
  createSlideButtons
} from "./DOMhandlers.js";
import { addButtonHandlers } from "./buttonHandlers.js";
import { API_URL } from "./constants/apiUrl.js";
import { showFirstHero } from "../js/superheroes/showFirstHero.js";
import "./addSwipes.js";
import "./addKeyboardClicks.js";

const getSuperheroes = () => {
  return fetch(API_URL)
    .then(res => res.json())
    .then(heroes => {
      heroes.length = 10;
      return heroes;
    });
};

getSuperheroes().then(superheroes => {
  insertHeroesContainer();
  renderHeroes(superheroes);
  createSlideButtons();
  addButtonHandlers();
  showFirstHero();
});
