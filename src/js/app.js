const testModules = require('./test-module');
require('../css/app.css');

import { game } from "../js/Game.js";
import "../js/Touch.js";
import "../js/Keyboard.js";

function randomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

game.start();
