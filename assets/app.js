// c 2020 Miguel Rivas Perez

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  let width = 10,
    bombAmount = 20,
    squares = [];
  // Create the board
  const createBoard = () => {
    //   get shuffled game array to set random bombs
    const bombsArray = Array(bombAmount).fill("bomb");
    const emptyArray = Array(width * width - bombAmount).fill("valid");
    console.log(bombsArray, emptyArray);
    for (let i = 0; i < width * width; i++) {
      const square = document.createElement("div");
      square.setAttribute("id", i);
      grid.appendChild(square);
      squares.push(square);
    }
  };

  createBoard();
});
