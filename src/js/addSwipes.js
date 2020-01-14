import { leftClick, rightClick } from '../js/buttonHandlers.js';


let start;
let end;


//ToDo: добавить минимальный диапазон между clientX

window.addEventListener('touchstart', function(event) {
    start = event.touches[0].clientX;
});

window.addEventListener('touchend', function(event) {
    end = event.changedTouches[0].clientX;
    if( start > end ) {
        console.log('swipe right')
        rightClick();
    } else {
        console.log('swipe left')
        leftClick();
    }
});