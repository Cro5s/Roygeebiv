import Board from "../Board/Board";

class View {
  constructor() {
    this.board = new Board();
    this.grid = [[], [], [], []];
    this.createView();
  }

  // Created in order to set multiple attributes at once on an element
  setAttributes(el, attribs) {
    for (let key in attribs) {
      el.setAttribute(key, attribs[key]);
    }
  }

  render() {
    this.grid.forEach((row, rowIdx) => {
      row.forEach((el, colIdx) => {
        const square = this.board.grid[rowIdx][colIdx];
        const color = square ? square.color() : "";
        this.setAttributes(el, { class: color });
      });
    });
  }

  createView() {
    const game = document.getElementById("game-div");
    const ul = document.createElement("ul");
    this.setAttributes(ul, { class: "view-ul" });

    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        let cell = document.createElement("li");

        this.setAttributes(cell, {
          pos: [row, col],
        });

        this.grid[row][col] = cell;
        ul.appendChild(cell);
      }
    }

    root.appendChild(game);
    game.appendChild(ul);
  }
}

export default View;
