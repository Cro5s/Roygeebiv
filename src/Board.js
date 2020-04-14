class Board {
  constructor() {
    const board = new Array(4, Array(4));
    this.board = this.createBoard;
  }
}

let board;

function createBoard() {
  board = [
    [0, 0, 0, null],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
}

function addSquare() {
  let options = [];

  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      if (board[row][col] === 0) {
        options.push({
          x: row,
          y: col,
        });
      }
    }
  }
}

let cell = random(options);
let randomCell = random(1);
board[spot.x][spot.y] = randomCell > 0.5 ? "Red" : "Orange";

function draw() {
  background(0);

  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {}
  }
}
