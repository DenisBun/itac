import { showSuperheroBasedOnDirection } from "./buttonHandlers.js";

window.addEventListener("keydown", e => {
  if (e.code === "ArrowRight") {
    showSuperheroBasedOnDirection('right');
  } else if (e.code === "ArrowLeft") {
    showSuperheroBasedOnDirection('left');
  }
});
