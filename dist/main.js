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

/***/ "./src/Board/Board.js":
/*!****************************!*\
  !*** ./src/Board/Board.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Square_Square__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Square/Square */ \"./src/Square/Square.js\");\n\n\nclass Board {\n  constructor() {\n    this.grid = [\n      [null, null, null, null],\n      [null, null, null, null],\n      [null, null, null, null],\n      [null, null, null, null],\n    ];\n    this.createGrid();\n  }\n\n  createGrid() {\n    for (let i = 0; i < 2; i++) {\n      let pos = [Math.random(3), Math.random(3)];\n      let num = Math.random(1);\n      let squareColor = num < 1 ? new _Square_Square__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Red\") : new _Square_Square__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Orange\");\n\n      while (this.grid[pos[0]][pos[1]] === null) {\n        this.grid[pos[0]][pos[1]] = squareColor;\n      }\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\n// module.exports = Board;\n\n\n//# sourceURL=webpack:///./src/Board/Board.js?");

/***/ }),

/***/ "./src/Square/Square.js":
/*!******************************!*\
  !*** ./src/Square/Square.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst COLORS = [\"Red\", \"Orange\", \"Yellow\", \"Green\", \"Blue\", \"Indigo\", \"Violet\"];\nclass Square {\n  constructor() {\n    this.color = color;\n    // this.val = null;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Square);\n\n\n//# sourceURL=webpack:///./src/Square/Square.js?");

/***/ }),

/***/ "./src/View/View.js":
/*!**************************!*\
  !*** ./src/View/View.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class View {\n  constructor(root, board) {\n    this.root = root;\n    this.board = board;\n    this.createView();\n    this.setAttributes = this.setAttributes;\n  }\n\n  // Created in order to set multiple attributes at once on an element\n  setAttributes(el, attribs) {\n    for (let key in attribs) {\n      el.setAttribute(key, attribs[key]);\n    }\n  }\n\n  createView() {\n    const ul = document.createElement(\"ul\");\n    this.setAttributes(ul, { class: \"view-ul\" });\n\n    // Figure out how this will be rendered in the view\n    // this.board.grid[i][j];\n\n    for (let row = 0; row < 4; row++) {\n      for (let col = 0; col < 4; col++) {\n        let cell = document.createElement(\"li\");\n        this.setAttributes(cell, {\n          class: \"view-col\",\n          row: row,\n          col: col,\n          pos: [row, col],\n        });\n\n        ul.appendChild(cell);\n      }\n    }\n\n    this.root.appendChild(ul);\n  }\n}\n\nmodule.exports = View;\n\n\n//# sourceURL=webpack:///./src/View/View.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Board_Board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board/Board */ \"./src/Board/Board.js\");\n/* harmony import */ var _View_View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View/View */ \"./src/View/View.js\");\n/* harmony import */ var _View_View__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_View_View__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const root = document.getElementById(\"root\");\n  new _View_View__WEBPACK_IMPORTED_MODULE_1___default.a(root, _Board_Board__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });