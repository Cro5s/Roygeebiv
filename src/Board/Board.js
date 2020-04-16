import Square from "../Square/Square";
// import Tile from "../Tile/Tile";

class Board {
  constructor() {
    this.createGrid();
    // this.addSquare = this.addSquare();
    // this.getRandomNum = this.getRandomNum;
  }

  // getRandomNum(max) {
  //   return Math.floor(Math.random() * Math.floor(max));
  // }

  addSquare(grid, row, col) {
    return (grid[row][col] = new Square());
  }

  createGrid() {
    // let grid = [];
    // for (let row = 0; row < rows; row++) {
    //   grid[row] = [];
    //   for (let col = 0; col < cols; col++) {
    //     const board = this.addSquare(grid, row, col);
    //   }
    // }
    // for (let i = 0; i < 2; i++) {
    // let row = this.getRandomNum(4);
    // let col = this.getRandomNum(4);
    // let row = Math.floor(Math.random() * 3);
    // let col = Math.floor(Math.random() * 3);
    // let num = Math.floor(Math.random() * 1);
    // let square = num < 1 ? "Red" : "Orange";
    // let square = num < 1 ? new Square("Red") : new Square("Orange");
    // while (this.grid[row][col] === null) {
    //   // row = this.getRandomNum(4);
    //   // col = this.getRandomNum(4);
    //   row = Math.floor(Math.random() * 3);
    //   col = Math.floor(Math.random() * 3);
    // }
    // this.grid[row][col] = square;
    // }
  }
}

export default Board;
