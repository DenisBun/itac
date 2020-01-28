export const filterArrayBasedOnCurrentTurn = (arrayToFilter, currentTurn) => {
    return [].filter.call(arrayToFilter, el => {
      return el.innerHTML === currentTurn;
    });
};