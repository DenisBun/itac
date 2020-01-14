import { showSuperheroBasedOnDirection } from '../js/buttonHandlers.js';


let start;
let end;


//ToDo: добавить минимальный диапазон между clientX

window.addEventListener('touchstart', function(event) {
    start = event.touches[0].clientX;
});

window.addEventListener('touchend', function(event) {
    end = event.changedTouches[0].clientX;
    showSuperheroBasedOnDirection(start > end ? 'right' : 'left');
});