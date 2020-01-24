export const checkForWin = (cellData, currentTurn) => {
  console.log(currentTurn, cellData);
  if (checkForHorizontalCells(cellData, currentTurn)) {
    console.log(`The winner is: ${currentTurn}`);
  } else if (checkForVerticalCells(cellData, currentTurn)) {
    console.log(`The winner is: ${currentTurn}`);
  }
};

const checkForHorizontalCells = ({ row }, currentTurn) => {
  const rowToCheck = document.querySelectorAll(`.cell[data-row='${row}']`);
  const filteredRowForCurrentTurn = [].filter.call(rowToCheck, el => {
    return el.innerHTML === currentTurn;
  });
  return filteredRowForCurrentTurn.length === rowToCheck.length;
};

const checkForVerticalCells = ({ column }, currentTurn) => {
  const columnToCheck = document.querySelectorAll(
    `.cell[data-column='${column}']`
  );
  const filteredColumnForCurrentTurn = [].filter.call(columnToCheck, el => {
    return el.innerHTML === currentTurn;
  });
  return filteredColumnForCurrentTurn.length === columnToCheck.length;
};
