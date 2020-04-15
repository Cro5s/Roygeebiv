import Square from "../Square/Square";

class Board {
  constructor() {
    this.grid = [
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
    ];
    this.createGrid();
  }

  createGrid() {
    for (let i = 0; i < 2; i++) {
      let pos = [Math.random(3), Math.random(3)];
      let num = Math.random(1);
      let squareColor = num < 1 ? new Square("Red") : new Square("Orange");

      while (this.grid[pos[0]][pos[1]] === null) {
        this.grid[pos[0]][pos[1]] = squareColor;
      }
    }
  }
}

export default Board;
// module.exports = Board;
