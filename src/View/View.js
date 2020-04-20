import Board from "../Board/Board";

class View {
  constructor() {
    this.board = new Board();
    this.grid = [[], [], [], []];
    this.createView();
    this.keyDownListener();
    this.onClickListener();
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
      if (!this.board.gameOver()) {
        switch (e.keyCode || e.which) {
          case 38:
            this.board.up();
            this.render();
            this.timeOut();
            break;
          case 87:
            this.board.up();
            this.render();
            this.timeOut();
            break;
          case 40:
            this.board.down();
            this.render();
            this.timeOut();
            break;
          case 83:
            this.board.down();
            this.render();
            this.timeOut();
            break;
          case 37:
            this.board.left();
            this.render();
            this.timeOut();
            break;
          case 65:
            this.board.left();
            this.render();
            this.timeOut();
            break;
          case 39:
            this.board.right();
            this.render();
            this.timeOut();
            break;
          case 68:
            this.board.right();
            this.render();
            this.timeOut();
            break;
          default:
            return;
        }
      } else if (this.board.gameOver()) {
        this.endGame();
      }
    };

    document.addEventListener("keydown", onKeyDown);
  }

  timeOut() {
    setTimeout(() => this.win(), 100);
  }

  onClickListener() {
    const newGame = () => {
      this.board = new Board();
      this.render();
    };

    const rules = () => {
      document.querySelector(".game-rules-container").style = "display: block";
    };

    const closeRules = () => {
      document.querySelector(".game-rules-container").style = "display: none";
    };

    document.getElementById("new-game").addEventListener("click", newGame);
    document.getElementById("rules").addEventListener("click", rules);
    document
      .querySelector(".fa-times-circle")
      .addEventListener("click", closeRules);
  }

  endGame() {
    window.alert("Game Over");
  }

  render() {
    this.grid.forEach((row, rowIdx) => {
      row.forEach((el, colIdx) => {
        let square = this.board.grid[rowIdx][colIdx];
        const color = square ? square.color() : "";
        const value = square ? square.value : 0;

        this.setAttributes(el, { class: color, id: value });
      });
    });
  }

  win() {
    const winningSquare = document.getElementById(128);

    if (winningSquare) {
      this.board.gameOver = true;
      window.alert("You Win!");
      document.getElementById("new-game").click();
    }
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
