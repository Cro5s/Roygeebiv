class Board {
  constructor() {
    grid = new Array(
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null]
    );
    this.grid = this.grid.bind(this);
  }

  addSquare() {
    let options = [];

    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        if (board[row][col] === null) {
          options.push({
            x: row,
            y: col,
          });
        }
      }
    }
  }

  draw() {
    background(0);

    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {}
    }
  }
}
