import Square from "../Square/Square";

class Board {
  constructor() {
    this.grid = [[], [], [], []];
    this.addRandomSquare();
    this.addRandomSquare();
    this.change = false;
    this.up = this.up;
    this.down = this.down;
    this.left = this.left;
    this.right = this.right;
  }

  addSquare(square, row, col) {
    this.grid[row][col] = square;
  }

  full() {
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        if (!this.grid[row][col]) return false;
      }
    }

    return true;
  }

  gameOver() {
    // this.collapsible = true;
    let collapsible = true;

    if (collapsible) {
      collapsible = false;

      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
          let currentSquare = this.grid[row][col];
          let rowPlusOne = this.grid[row + 1][col];
          let colPlusOne = this.grid[row][col + 1];

          if (
            (this.full() && currentSquare.value === rowPlusOne.value) ||
            (this.full() && currentSquare.value === colPlusOne.value)
          )
            collapsible = true;
        }
      }
    }

    if (this.full() && !collapsible) {
      return true;
    } else {
      return false;
    }
  }

  removeSquare(row, col) {
    this.grid[row][col] = undefined;
  }

  addRandomSquare() {
    // if (this.full()) return;
    if (!this.full()) {
      let row = Math.floor(Math.random() * 4);
      let col = Math.floor(Math.random() * 4);
      let num = Math.random() * 1;
      let square = num > 0.5 ? new Square() : new Square(4);

      while (this.grid[row][col]) {
        row = Math.floor(Math.random() * 4);
        col = Math.floor(Math.random() * 4);
      }

      this.grid[row][col] = square;
    }
  }

  // move(row, col) {}

  up() {
    this.pushUp();
    this.condenseUp();
    this.pushUp();
    if (this.change) {
      this.addRandomSquare();
      this.change = false;
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
              if (square.value >= 128) {
                this.gameOver = true;
              }
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
      this.change = false;
    }
  }

  pushDown() {
    for (let row = 3; row >= 0; row--) {
      for (let col = 0; col < 4; col++) {
        if (this.grid[row][col]) {
          const square = this.grid[row][col];
          let localRow = row;

          while (localRow + 1 < 4 && !this.grid[localRow + 1][col]) {
            this.removeSquare(localRow, col);
            this.addSquare(square, localRow + 1, col);
            this.change = true;
            localRow++;
          }
        }
      }
    }
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
              if (square.value >= 128) {
                this.gameOver = true;
              }
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
      this.change = false;
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
              if (square.value >= 128) {
                this.gameOver = true;
              }
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
      this.change = false;
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
              if (square.value >= 128) {
                this.gameOver = true;
              }
            }
          }
        }
      }
    }
  }
}

export default Board;
