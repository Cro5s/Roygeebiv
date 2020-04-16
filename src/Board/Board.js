import Square from "../Square/Square";

class Board {
  constructor() {
    this.grid = [[], [], [], []];
    this.createGrid();
    this.addRandomSquares();
  }

  addSquare(row, col) {
    return (this.grid[row][col] = new Square());
  }

  addRandomSquares() {
    for (let i = 0; i < 2; i++) {
      let row = Math.floor(Math.random() * 3);
      let col = Math.floor(Math.random() * 3);
      let num = Math.random() * 1;
      // debugger;
      let square = num > 0.5 ? new Square() : new Square(4);

      while (!this.grid[row][col] === null) {
        row = Math.floor(Math.random() * 3);
        col = Math.floor(Math.random() * 3);
      }
      this.grid[row][col] = square;
    }
  }

  createGrid() {
    this.addRandomSquares();
  }
}

export default Board;
