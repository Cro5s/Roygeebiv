import Board from './Board';

class View {
  constructor() {
    this.board = new Board();
    this.grid = [[], [], [], []];
    this.isGameOver = false;
    this.createView();
    this.keyDownListener();
    this.onClickListener();
    this.render = this.render.bind(this);

    this.endGameModal = ({ titleText, firstMessageText, confirmText }) =>
      new Modal({
        titleText: titleText,
        firstMessageText: firstMessageText,
        confirmText: confirmText,
      });

    const rulesModal = new Modal({
      titleText: 'Rules',
      firstMessageText:
        'To move pieces on the board you can use the direction keys (up, down, left, right) or W for up, S for down, A for left, and D for right.',
      secondMessageText:
        'Squares change in order according to the rainbow (Red, Orange, Yellow, Green, Blue, Indigo, Violet). Combine tiles to get the violet square and win!',
      confirmText: 'X',
    });

    document.getElementById('openModal').addEventListener('click', (event) => {
      rulesModal.open();
    });
  }

  // Sets multiple attributes at once on an element
  setAttributes(el, attribs) {
    for (let key in attribs) {
      el.setAttribute(key, attribs[key]);
    }
  }

  keyDownListener() {
    const onKeyDown = (e) => {
      if (this.isGameOver) return;

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
      } else {
        this.endGame();
      }
    };

    document.addEventListener('keydown', onKeyDown);
  }

  timeOut() {
    setTimeout(() => this.win(), 100);
  }

  onClickListener() {
    const newGame = () => {
      this.isGameOver = false;
      this.board = new Board();
      this.render();
    };

    document.getElementById('new-game').addEventListener('click', newGame);
  }

  endGame() {
    this.isGameOver = true;
    this.endGameModal({
      titleText: 'Game Over',
      firstMessageText: "Better luck next time! Click 'New Game' to try again.",
      confirmText: 'X',
    })
      .open()
      .then(() => {
        this.isGameOver = false;
        this.board = new Board();
        this.render();
      });
  }

  win() {
    const winningSquare = document.getElementById(128);

    if (winningSquare) {
      this.isGameOver = true;
      this.endGameModal({
        titleText: 'Congratulations!',
        firstMessageText:
          "You reached the violet square! Click 'New Game' to play again.",
        confirmText: 'X',
      })
        .open()
        .then(() => {
          this.isGameOver = false;
          this.board = new Board();
          this.render();
        });
    }
  }

  render() {
    this.grid.forEach((row, rowIdx) => {
      row.forEach((el, colIdx) => {
        let square = this.board.grid[rowIdx][colIdx];
        const color = square ? square.color() : '';
        const value = square ? square.value : 0;

        this.setAttributes(el, { class: color, id: value });
      });
    });
  }

  createView() {
    const game = document.getElementById('game-div');
    const ul = document.createElement('ul');
    this.setAttributes(ul, { class: 'view-ul' });

    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        let cell = document.createElement('li');

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
