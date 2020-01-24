import { defineTurn } from './defineTurn.js';
import { checkForWin } from './checkForWin.js';

let currentTurn;

export const addClickHandler = () => {
    const wrapper = document.querySelector('.wrapper');
    wrapper.addEventListener('click', handleCellClick);
}

const handleCellClick = ({ target }) => {
    if (target.className === 'cell') {
        target.innerHTML = defineTurn(currentTurn);
        target.classList.add('disabled');
        document.querySelector('.currentPlayer').innerHTML = `Current player: ${currentTurn ? currentTurn : 'X'}`;
        currentTurn = defineTurn(currentTurn);
        checkForWin({
            column: target.dataset.column, row: target.dataset.row
        }, currentTurn);
    }
}