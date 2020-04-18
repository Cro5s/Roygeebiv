import Board from "../Board/Board";

class View {
  constructor() {
    this.board = new Board();
    this.grid = [[], [], [], []];
    this.createView();
    this.keyDownListener();
    this.newGameListener();
    this.render = this.render.bind(this);
  }

  // Created in order to set multiple attributes at once on an element
  setAttributes(el, attribs) {
    for (let key in attribs) {
      el.setAttribute(key, attribs[key]);
    }
  }

  keyDownListener() {
    const onKeyDown = (e) => {
      e.preventDefault();

      if (!this.board.gameOver()) {
        switch (e.keyCode || e.which) {
          case 38:
            this.board.up();
            this.render();
            break;
          case 87:
            this.board.up();
            this.render();
            break;
          case 40:
            this.board.down();
            this.render();
            break;
          case 83:
            this.board.down();
            this.render();
            break;
          case 37:
            this.board.left();
            this.render();
            break;
          case 65:
            this.board.left();
            this.render();
            break;
          case 39:
            this.board.right();
            this.render();
            break;
          case 68:
            this.board.right();
            this.render();
            break;
          default:
            return;
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
  }

  newGameListener() {
    const newGame = () => {
      this.board = new Board();
      this.render();
    };

    document.getElementById("new-game").addEventListener("click", newGame);
  }

  endGame() {
    window.alert("Game Over");
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
