// require("./View.css");
// import "./View.css";

class View {
  constructor() {
    // this.board = board;
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

    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        let cell = document.createElement("li");
        // debugger;
        // let square = this.board.grid[row][col];
        this.setAttributes(cell, {
          class: "view-col",
          row: row,
          col: col,
          pos: [row, col],
          // spot: square,
        });
        ul.appendChild(cell);
      }
    }

    root.appendChild(ul);
  }
}

export default View;
