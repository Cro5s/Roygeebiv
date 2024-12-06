import Board from '../Board';

class View {
    constructor() {
        this.board = new Board();
        this.grid = [[], [], [], []];
        this.createView();
        this.keyDownListener();
        this.onClickListener();
        // this.score();
        this.render = this.render.bind(this);
    }

    // Created in order to set multiple attributes at once on an element
    setAttributes(el, attribs) {
        for (let key in attribs) {
            el.setAttribute(key, attribs[key]);
        }
    }

    // score() {
    //   let gameScore = `
    //     <h2 class="score">Score: ${this.board.score}</h2>
    //   `;

    //   console.log("Score:", this.board.score);
    //   document
    //     .getElementById("score-div")
    //     .insertAdjacentHTML("beforeend", gameScore);
    // }

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
            } else if (this.board.gameOver()) this.endGame();
        };

        document.addEventListener('keydown', onKeyDown);
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
            const msg = `<p class="movement-rules">
          To move pieces on the board you can use the direction keys (up, down,
          left, right) or W for up, S for down, A for left, and D for right.
        </p>
        <p class="game-rules">
          Squares change in order according to the rainbow (Red, Orange, Yellow,
          Green, Blue, Indigo, Violet). Combine squares of the same color until
          you get one violet square to win!
        </p>`;

            const mdl = this.modal({ msg });
            document
                .getElementById('body')
                .insertAdjacentHTML('beforeend', mdl);
        };

        const closeRules = () => {
            document.getElementById('game-rules-container').remove();
        };

        document.getElementById('new-game').addEventListener('click', newGame);
        document.getElementById('rules').addEventListener('click', rules);
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('fa-times-circle')) closeRules();
        });
    }

    endGame() {
        window.alert('Game Over');
    }

    modal(props) {
        const { msg } = props;

        return `
      <div id="game-rules-container">
        <div class="details-container">
          <i class="far fa-times-circle"></i>
          ${msg}
        </div>
      </div>
    `;
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

    win() {
        const winningSquare = document.getElementById(128);

        if (winningSquare) {
            this.board.gameOver = true;
            window.alert('You Win!');
            document.getElementById('new-game').click();
        }
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
