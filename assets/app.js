// c 2020 Miguel Rivas Perez

const grid = document.querySelector(".grid");
let width = 10,
  bombAmount = 20,
  squares = [];

// Create the board
const createBoard = () => {
  // Create empty and bomb squares, shuffle the squares on the board
  const bombsArray = Array(bombAmount).fill("bomb"),
    emptyArray = Array(width * width - bombAmount).fill("valid"),
    gameArray = emptyArray.concat(bombsArray),
    shuffledArray = gameArray.sort(() => Math.random() - 0.5);

  for (let i = 0; i < width * width; i++) {
    const square = document.createElement("div");
    square.setAttribute("id", i);
    square.classList.add(shuffledArray[i]);
    grid.appendChild(square);
    squares.push(square);
  }

  //   Check every square to see if there are bombs nar them
  for (let i = 0; i < squares.length; i++) {
    let total = 0;
    const isLeftEdge = i % (width === 0),
      isRightEdge = i % width === width - 1;

    if (squares[i].classList.contains("valid")) {
      if (i > 0 && !isLeftEdge && squares[i - 1].classList.contains("bomb")) {
        total++;
      }
      if (i > 9 && !isRightEdge && squares[i + 1].classList.contains("bomb")) {
        total++;
      }
      squares[i].setAttribute("data", total);
      console.log(squares[i]);
    }
  }
};

createBoard();
