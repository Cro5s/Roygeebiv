import Square from "../Square/Square";

class Board {
  constructor() {
    this.grid = [[], [], [], []];
    this.addRandomSquare();
    this.addRandomSquare();
    this.change = false;
    this.down();
  }

  addSquare(square, row, col) {
    this.grid[row][col] = square;
  }

  full() {
    return false;
  }

  removeSquare(row, col) {
    this.grid[row][col] = undefined;
  }

  addRandomSquare() {
    if (this.full()) return;
    let row = Math.floor(Math.random() * 4);
    let col = Math.floor(Math.random() * 4);
    let num = Math.random() * 1;
    let square = num > 0.5 ? new Square() : new Square(4);

    while (this.grid[row][col]) {
      row = Math.floor(Math.random() * 4);
      col = Math.floor(Math.random() * 4);
    }

    this.grid[row][col] = square;
    console.log("New Square added at", row, col);
  }

  up() {
    this.pushUp();
    this.condenseUp();
    this.pushUp();
    if (this.change) {
      this.addRandomSquare();
    }
  }

  pushUp() {
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        if (this.grid[row][col]) {
          const square = this.grid[row][col];
          let localRow = row;

          while (localRow - 1 >= 0 && !this.grid[localRow - 1][col]) {
            this.removeSquare(localRow, col);
            this.addSquare(square, localRow - 1, col);
            this.change = true;
            localRow--;
          }
        }
      }
    }
  }

  condenseUp() {
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        if (this.grid[row][col]) {
          const square = this.grid[row][col];

          if (row + 1 < 4 && this.grid[row + 1][col]) {
            const compareSquare = this.grid[row + 1][col];

            if (square.value === compareSquare.value) {
              this.removeSquare(row + 1, col);
              square.value = square.value * 2;
            }
          }
        }
      }
    }
  }

  down() {
    this.pushDown();
    this.condenseDown();
    this.pushDown();
    if (this.change) {
      this.addRandomSquare();
      console.log("Inside change if statement");
    }
  }

  pushDown() {
    // let change = false;

    for (let row = 3; row >= 0; row--) {
      for (let col = 0; col < 4; col++) {
        if (this.grid[row][col]) {
          const square = this.grid[row][col];
          let localRow = row;
          console.log(
            "Before change",
            row,
            col,
            "Square value:",
            square.value,
            "Changed:",
            this.change
          );

          while (localRow + 1 < 4 && !this.grid[localRow + 1][col]) {
            this.removeSquare(localRow, col);
            this.addSquare(square, localRow + 1, col);
            this.change = true;
            localRow++;
            console.log(
              "We changed",
              row + 1,
              col,
              "Square value:",
              square.value,
              "Changed:",
              this.change
            );
          }
        }
      }
    }

    // if (change) {
    //   this.addRandomSquare();
    //   console.log("Inside change if statement");
    // }
  }

  condenseDown() {
    for (let row = 3; row >= 0; row--) {
      for (let col = 0; col < 4; col++) {
        if (this.grid[row][col]) {
          const square = this.grid[row][col];

          if (row - 1 >= 0 && this.grid[row - 1][col]) {
            const compareSquare = this.grid[row - 1][col];

            if (square.value === compareSquare.value) {
              this.removeSquare(row - 1, col);
              square.value = square.value * 2;
            }
          }
        }
      }
    }
  }

  left() {
    this.pushLeft();
    this.condenseLeft();
    this.pushLeft();
    if (this.change) {
      this.addRandomSquare();
    }
  }

  pushLeft() {
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        if (this.grid[row][col]) {
          const square = this.grid[row][col];
          let localCol = col;

          while (localCol - 1 >= 0 && !this.grid[row][localCol - 1]) {
            this.removeSquare(row, localCol);
            this.addSquare(square, row, localCol - 1);
            this.change = true;
            localCol--;
          }
        }
      }
    }
  }

  condenseLeft() {
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        if (this.grid[row][col]) {
          const square = this.grid[row][col];

          if (col + 1 < 4 && this.grid[row][col + 1]) {
            const compareSquare = this.grid[row][col + 1];

            if (square.value === compareSquare.value) {
              this.removeSquare(row, col + 1);
              square.value = square.value * 2;
            }
          }
        }
      }
    }
  }

  right() {
    this.pushRight();
    this.condenseRight();
    this.pushRight();
    if (this.change) {
      this.addRandomSquare();
    }
  }

  pushRight() {
    for (let row = 0; row < 4; row++) {
      for (let col = 3; col >= 0; col--) {
        if (this.grid[row][col]) {
          const square = this.grid[row][col];
          let localCol = col;

          while (localCol + 1 < 4 && !this.grid[row][localCol + 1]) {
            this.removeSquare(row, localCol);
            this.addSquare(square, row, localCol + 1);
            this.change = true;
            localCol++;
          }
        }
      }
    }
  }

  condenseRight() {
    for (let row = 0; row < 4; row++) {
      for (let col = 3; col >= 0; col--) {
        if (this.grid[row][col]) {
          const square = this.grid[row][col];

          if (col - 1 >= 0 && this.grid[row][col - 1]) {
            const compareSquare = this.grid[row][col - 1];

            if (square.value === compareSquare.value) {
              this.removeSquare(row, col - 1);
              square.value = square.value * 2;
            }
          }
        }
      }
    }
  }
}

export default Board;
