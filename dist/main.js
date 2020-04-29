/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Board.js":
/*!**********************!*\
  !*** ./src/Board.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Square__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Square */ \"./src/Square.js\");\n\n\nclass Board {\n  constructor() {\n    this.grid = [[], [], [], []];\n    this.addRandomSquare();\n    this.addRandomSquare();\n    this.change = false;\n    this.up = this.up;\n    this.down = this.down;\n    this.left = this.left;\n    this.right = this.right;\n  }\n\n  addSquare(square, row, col) {\n    this.grid[row][col] = square;\n  }\n\n  full() {\n    for (let row = 0; row < 4; row++) {\n      for (let col = 0; col < 4; col++) {\n        if (!this.grid[row][col]) return false;\n      }\n    }\n\n    return true;\n  }\n\n  gameOver() {\n    let collapsible = true;\n\n    if (collapsible) {\n      collapsible = false;\n\n      for (let row = 0; row < 3; row++) {\n        for (let col = 0; col < 3; col++) {\n          let currentSquare = this.grid[row][col];\n          let rowPlusOne = this.grid[row + 1][col];\n          let colPlusOne = this.grid[row][col + 1];\n\n          if (row === 2) {\n            if (\n              (this.full() && currentSquare.value === rowPlusOne.value) ||\n              (this.full() && currentSquare.value === colPlusOne.value)\n            )\n              collapsible = true;\n\n            const newRow = 3;\n            let newCurrentSquare = this.grid[newRow][col];\n            let newColPlusOne = this.grid[newRow][col + 1];\n\n            if (this.full() && newCurrentSquare.value === newColPlusOne.value)\n              collapsible = true;\n          } else if (col === 2) {\n            if (\n              (this.full() && currentSquare.value === rowPlusOne.value) ||\n              (this.full() && currentSquare.value === colPlusOne.value)\n            )\n              collapsible = true;\n\n            const newCol = 3;\n            let newCurrentSquare = this.grid[row][newCol];\n            let newRowPlusOne = this.grid[row + 1][newCol];\n\n            if (this.full() && newCurrentSquare.value === newRowPlusOne.value)\n              collapsible = true;\n          } else {\n            if (\n              (this.full() && currentSquare.value === rowPlusOne.value) ||\n              (this.full() && currentSquare.value === colPlusOne.value)\n            )\n              collapsible = true;\n          }\n        }\n      }\n    }\n\n    if (this.full() && !collapsible) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  removeSquare(row, col) {\n    this.grid[row][col] = undefined;\n  }\n\n  addRandomSquare() {\n    if (!this.gameOver()) {\n      let row = Math.floor(Math.random() * 4);\n      let col = Math.floor(Math.random() * 4);\n      let num = Math.random() * 1;\n      let square = num > 0.5 ? new _Square__WEBPACK_IMPORTED_MODULE_0__[\"default\"]() : new _Square__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4);\n\n      while (this.grid[row][col]) {\n        row = Math.floor(Math.random() * 4);\n        col = Math.floor(Math.random() * 4);\n      }\n\n      this.grid[row][col] = square;\n    }\n  }\n\n  up() {\n    this.pushUp();\n    this.condenseUp();\n    this.pushUp();\n    if (this.change) {\n      this.addRandomSquare();\n      this.change = false;\n    }\n  }\n\n  pushUp() {\n    for (let row = 0; row < 4; row++) {\n      for (let col = 0; col < 4; col++) {\n        if (this.grid[row][col]) {\n          const square = this.grid[row][col];\n          let localRow = row;\n\n          while (localRow - 1 >= 0 && !this.grid[localRow - 1][col]) {\n            this.removeSquare(localRow, col);\n            this.addSquare(square, localRow - 1, col);\n            this.change = true;\n            localRow--;\n          }\n        }\n      }\n    }\n  }\n\n  condenseUp() {\n    for (let row = 0; row < 4; row++) {\n      for (let col = 0; col < 4; col++) {\n        if (this.grid[row][col]) {\n          const square = this.grid[row][col];\n\n          if (row + 1 < 4 && this.grid[row + 1][col]) {\n            const compareSquare = this.grid[row + 1][col];\n\n            if (square.value === compareSquare.value) {\n              this.removeSquare(row + 1, col);\n              square.value = square.value * 2;\n            }\n          }\n        }\n      }\n    }\n  }\n\n  down() {\n    this.pushDown();\n    this.condenseDown();\n    this.pushDown();\n    if (this.change) {\n      this.addRandomSquare();\n      this.change = false;\n    }\n  }\n\n  pushDown() {\n    for (let row = 3; row >= 0; row--) {\n      for (let col = 0; col < 4; col++) {\n        if (this.grid[row][col]) {\n          const square = this.grid[row][col];\n          let localRow = row;\n\n          while (localRow + 1 < 4 && !this.grid[localRow + 1][col]) {\n            this.removeSquare(localRow, col);\n            this.addSquare(square, localRow + 1, col);\n            this.change = true;\n            localRow++;\n          }\n        }\n      }\n    }\n  }\n\n  condenseDown() {\n    for (let row = 3; row >= 0; row--) {\n      for (let col = 0; col < 4; col++) {\n        if (this.grid[row][col]) {\n          const square = this.grid[row][col];\n\n          if (row - 1 >= 0 && this.grid[row - 1][col]) {\n            const compareSquare = this.grid[row - 1][col];\n\n            if (square.value === compareSquare.value) {\n              this.removeSquare(row - 1, col);\n              square.value = square.value * 2;\n            }\n          }\n        }\n      }\n    }\n  }\n\n  left() {\n    this.pushLeft();\n    this.condenseLeft();\n    this.pushLeft();\n    if (this.change) {\n      this.addRandomSquare();\n      this.change = false;\n    }\n  }\n\n  pushLeft() {\n    for (let row = 0; row < 4; row++) {\n      for (let col = 0; col < 4; col++) {\n        if (this.grid[row][col]) {\n          const square = this.grid[row][col];\n          let localCol = col;\n\n          while (localCol - 1 >= 0 && !this.grid[row][localCol - 1]) {\n            this.removeSquare(row, localCol);\n            this.addSquare(square, row, localCol - 1);\n            this.change = true;\n            localCol--;\n          }\n        }\n      }\n    }\n  }\n\n  condenseLeft() {\n    for (let row = 0; row < 4; row++) {\n      for (let col = 0; col < 4; col++) {\n        if (this.grid[row][col]) {\n          const square = this.grid[row][col];\n\n          if (col + 1 < 4 && this.grid[row][col + 1]) {\n            const compareSquare = this.grid[row][col + 1];\n\n            if (square.value === compareSquare.value) {\n              this.removeSquare(row, col + 1);\n              square.value = square.value * 2;\n            }\n          }\n        }\n      }\n    }\n  }\n\n  right() {\n    this.pushRight();\n    this.condenseRight();\n    this.pushRight();\n    if (this.change) {\n      this.addRandomSquare();\n      this.change = false;\n    }\n  }\n\n  pushRight() {\n    for (let row = 0; row < 4; row++) {\n      for (let col = 3; col >= 0; col--) {\n        if (this.grid[row][col]) {\n          const square = this.grid[row][col];\n          let localCol = col;\n\n          while (localCol + 1 < 4 && !this.grid[row][localCol + 1]) {\n            this.removeSquare(row, localCol);\n            this.addSquare(square, row, localCol + 1);\n            this.change = true;\n            localCol++;\n          }\n        }\n      }\n    }\n  }\n\n  condenseRight() {\n    for (let row = 0; row < 4; row++) {\n      for (let col = 3; col >= 0; col--) {\n        if (this.grid[row][col]) {\n          const square = this.grid[row][col];\n\n          if (col - 1 >= 0 && this.grid[row][col - 1]) {\n            const compareSquare = this.grid[row][col - 1];\n\n            if (square.value === compareSquare.value) {\n              this.removeSquare(row, col - 1);\n              square.value = square.value * 2;\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\n\n\n//# sourceURL=webpack:///./src/Board.js?");

/***/ }),

/***/ "./src/Square.js":
/*!***********************!*\
  !*** ./src/Square.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Square {\n  constructor(value = 2) {\n    this.value = value;\n  }\n\n  color() {\n    switch (this.value) {\n      case 2:\n        return \"Red\";\n      case 4:\n        return \"Orange\";\n      case 8:\n        return \"Yellow\";\n      case 16:\n        return \"Green\";\n      case 32:\n        return \"Blue\";\n      case 64:\n        return \"Indigo\";\n      case 128:\n        return \"Violet\";\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Square);\n\n\n//# sourceURL=webpack:///./src/Square.js?");

/***/ }),

/***/ "./src/View/View.js":
/*!**************************!*\
  !*** ./src/View/View.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Board */ \"./src/Board.js\");\n\n\nclass View {\n  constructor() {\n    this.board = new _Board__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.grid = [[], [], [], []];\n    this.createView();\n    this.keyDownListener();\n    this.onClickListener();\n    this.render = this.render.bind(this);\n  }\n\n  // Created in order to set multiple attributes at once on an element\n  setAttributes(el, attribs) {\n    for (let key in attribs) {\n      el.setAttribute(key, attribs[key]);\n    }\n  }\n\n  keyDownListener() {\n    const onKeyDown = (e) => {\n      if (!this.board.gameOver()) {\n        switch (e.keyCode || e.which) {\n          case 38:\n            this.board.up();\n            this.render();\n            this.timeOut();\n            break;\n          case 87:\n            this.board.up();\n            this.render();\n            this.timeOut();\n            break;\n          case 40:\n            this.board.down();\n            this.render();\n            this.timeOut();\n            break;\n          case 83:\n            this.board.down();\n            this.render();\n            this.timeOut();\n            break;\n          case 37:\n            this.board.left();\n            this.render();\n            this.timeOut();\n            break;\n          case 65:\n            this.board.left();\n            this.render();\n            this.timeOut();\n            break;\n          case 39:\n            this.board.right();\n            this.render();\n            this.timeOut();\n            break;\n          case 68:\n            this.board.right();\n            this.render();\n            this.timeOut();\n            break;\n          default:\n            return;\n        }\n      } else if (this.board.gameOver()) {\n        this.endGame();\n      }\n    };\n\n    document.addEventListener(\"keydown\", onKeyDown);\n  }\n\n  timeOut() {\n    setTimeout(() => this.win(), 100);\n  }\n\n  onClickListener() {\n    const newGame = () => {\n      this.board = new _Board__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n      this.render();\n    };\n\n    const modal = (props) => {\n      const { score, msg } = props;\n\n      return `\n        <div id=\"game-rules-container\">\n          <div class=\"details-container\">\n            <p class=\"modal-score\">${score}</p>\n            <p class=\"modal-msg\">${msg}</p>\n          </div>\n        </div>\n      `;\n    };\n\n    // top 50%\n    // transform: translateY(-100%)\n\n    const rules = () => {\n      // document.querySelector(\".game-rules-container\").style = \"display: block\";\n\n      const msg = `<p class=\"movement-rules\">\n          To move pieces on the board you can use the direction keys (up, down,\n          left, right) or W for up, S for down, A for left, and D for right.\n        </p>\n        <p class=\"game-rules\">\n          Squares change in order according to the rainbow (Red, Orange, Yellow,\n          Green, Blue, Indigo, Violet). Combine squares of the same color until\n          you get one violet square to win!\n        </p>`;\n\n      const m = modal({ msg });\n      document.getElementById(\"body\").insertAdjacentHTML(\"beforeend\", m);\n    };\n\n    const closeRules = () => {\n      // document.querySelector(\".game-rules-container\").style = \"display: none\";\n\n      document.getElementById(\"game-rules-container\").remove();\n    };\n\n    document.getElementById(\"new-game\").addEventListener(\"click\", newGame);\n    document.getElementById(\"rules\").addEventListener(\"click\", rules);\n    document.addEventListener(\"click\", (e) => {\n      e.target.id;\n      // currentTarget\n      //e.target.classList.contains(\"js-closemodal\")\n      // if the event that happened was on the x then call close rules function\n    });\n    // document\n    //   .querySelector(\".fa-times-circle\")\n    //   .addEventListener(\"click\", closeRules);\n  }\n\n  endGame() {\n    window.alert(\"Game Over\");\n  }\n\n  render() {\n    this.grid.forEach((row, rowIdx) => {\n      row.forEach((el, colIdx) => {\n        let square = this.board.grid[rowIdx][colIdx];\n        const color = square ? square.color() : \"\";\n        const value = square ? square.value : 0;\n\n        this.setAttributes(el, { class: color, id: value });\n      });\n    });\n  }\n\n  win() {\n    const winningSquare = document.getElementById(128);\n\n    if (winningSquare) {\n      this.board.gameOver = true;\n      window.alert(\"You Win!\");\n      document.getElementById(\"new-game\").click();\n    }\n  }\n\n  createView() {\n    const game = document.getElementById(\"game-div\");\n    const ul = document.createElement(\"ul\");\n    this.setAttributes(ul, { class: \"view-ul\" });\n\n    for (let row = 0; row < 4; row++) {\n      for (let col = 0; col < 4; col++) {\n        let cell = document.createElement(\"li\");\n\n        this.setAttributes(cell, {\n          pos: [row, col],\n        });\n\n        this.grid[row][col] = cell;\n        ul.appendChild(cell);\n      }\n    }\n\n    root.appendChild(game);\n    game.appendChild(ul);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (View);\n\n\n//# sourceURL=webpack:///./src/View/View.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _View_View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View/View */ \"./src/View/View.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const view = new _View_View__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  view.render();\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });