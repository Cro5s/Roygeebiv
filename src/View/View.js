class View {
  constructor(root, board) {
    this.root = root;
    this.board = board;
    this.createView();
    this.setAttributes = this.setAttributes;
  }

  // Created in order to set multiple attributes at once on an element
  setAttributes(el, attribs) {
    for (let key in attribs) {
      el.setAttribute(key, attribs[key]);
    }
  }

  createView() {
    const ul = document.createElement("ul");
    this.setAttributes(ul, { class: "view-ul" });

    // Figure out how this will be rendered in the view
    // this.board.grid[i][j];

    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        let cell = document.createElement("li");
        this.setAttributes(cell, {
          class: "view-col",
          row: row,
          col: col,
          pos: [row, col],
        });

        ul.appendChild(cell);
      }
    }

    this.root.appendChild(ul);
  }
}

module.exports = View;
