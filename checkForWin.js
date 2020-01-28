import { highlightWinnerCells } from './highlightWinnerCells.js';
import { filterArrayBasedOnCurrentTurn } from './filterArrayBasedOnCurrentTurn.js';
import { checkForDraw } from './checkForDraw.js';
import { renderStartNewGameBtn } from './renderStartNewGameBtn.js';

export const checkForWin = (cellData, currentTurn) => {
  const winnerCellsArrayForVericalOrHorizontal = checkForHorizontalAndVerticalCells(cellData, currentTurn);
  const winnerCellsArrayForMainOrSideDiagonal = checkForMainAndSideDiagonal(cellData, currentTurn);
  if (winnerCellsArrayForVericalOrHorizontal) {
    highlightWinnerCells(winnerCellsArrayForVericalOrHorizontal);
    renderStartNewGameBtn(`The winner is: ${currentTurn}`);
  } else if (winnerCellsArrayForMainOrSideDiagonal) {
    highlightWinnerCells(winnerCellsArrayForMainOrSideDiagonal)
    renderStartNewGameBtn(`The winner is: ${currentTurn}`);
  } else if (checkForDraw()) {
    renderStartNewGameBtn('DRAW');
  }
};

const checkForHorizontalAndVerticalCells = ({ row, column }, currentTurn) => {
  const rowToCheck = document.querySelectorAll(`.cell[data-row='${row}']`);
  const columnToCheck = document.querySelectorAll(
    `.cell[data-column='${column}']`
  );

  const filteredRowForCurrentTurn = filterArrayBasedOnCurrentTurn(
    rowToCheck,
    currentTurn
  );
  const filteredColumnForCurrentTurn = filterArrayBasedOnCurrentTurn(
    columnToCheck,
    currentTurn
  );
  if (filteredRowForCurrentTurn.length === rowToCheck.length) {
    return rowToCheck;
  }
  if (filteredColumnForCurrentTurn.length === columnToCheck.length) {
    return columnToCheck;
  }
};

const checkForMainAndSideDiagonal = ({ main_diagonal, side_diagonal }, currentTurn) => {
  if (side_diagonal) {
    const sideDiagonalElements = document.querySelectorAll(
      `.cell[data-side_diagonal='${side_diagonal}']`
    );
    const filteredSideDiagonalElements = filterArrayBasedOnCurrentTurn(sideDiagonalElements, currentTurn);
    if (sideDiagonalElements.length === filteredSideDiagonalElements.length) {
      return sideDiagonalElements;
    }
  }
  if (main_diagonal) {
    const mainDiagonalElements = document.querySelectorAll(
      `.cell[data-main_diagonal='${main_diagonal}']`
    );
    const filteredMainDiagonalElements = filterArrayBasedOnCurrentTurn(mainDiagonalElements, currentTurn);
    if (mainDiagonalElements.length === filteredMainDiagonalElements.length) {
      return mainDiagonalElements;
    }
  }
}
