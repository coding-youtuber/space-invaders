import { playerActions } from "../js/PlayerActions.js";

var keybinds = { 32: "fire",
                37: "moveLeft",
                39: "moveRight"};

function keyDown(e) {
  var x = e.which || e.keyCode;

  if(keybinds[x] !== undefined) {
    e.preventDefault();
    playerActions.startAction(x, keybinds[x]);
  }
}

function keyUp(e) {
  var x = e.which || e.keyCode;

  if(keybinds[x] !== undefined) {
    e.preventDefault();
    playerActions.endAction(x);
  }
}

document.body.addEventListener("keydown", keyDown);
document.body.addEventListener("keyup", keyUp);
