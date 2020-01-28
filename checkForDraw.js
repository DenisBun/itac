export const checkForDraw = () => {
  const allCells = document.getElementsByClassName("cell");
  return [].every.call(allCells, cell => {
    return cell.innerHTML !== "";
  });
};
