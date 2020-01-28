export const highlightWinnerCells = winnerCells => {
  winnerCells.forEach(cell => cell.classList.add("winner_cell"));
};
