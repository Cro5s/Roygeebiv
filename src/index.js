import Board from "./Board/Board";
import View from "./View/View";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  new View(root, Board);
});
