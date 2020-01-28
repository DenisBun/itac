import { renderTable } from './renderTable.js';
import { clearTable } from './clearTable.js';
import { addClickHandler } from './addClickHandler.js';

export const renderStartNewGameBtn = (result) => {
    const newGameBtn = document.createElement('button');
    newGameBtn.innerHTML = `${result} -> click to start new game`;
    newGameBtn.addEventListener('click', startNewGame);
    document.querySelector('.wrapper').appendChild(newGameBtn);
}

const startNewGame = () => {
    clearTable();
    renderTable();
    addClickHandler();
}