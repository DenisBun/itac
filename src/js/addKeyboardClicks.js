import { leftClick, rightClick } from "./buttonHandlers.js";

window.addEventListener("keydown", e => {
  if (e.code === "ArrowRight") {
    rightClick();
  } else if (e.code === "ArrowLeft") {
    leftClick();
  }
});
