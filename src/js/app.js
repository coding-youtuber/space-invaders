const testModules = require('./test-module');
require('../css/app.css');

var canvas = document.getElementById("game-layer");
var context = canvas.getContext("2d");

function Player(x, y) {
  this.x = x;
  this.y = y;
  this.width = 50;
  this.height = 50;
  this.direction = -1;
}

Player.prototype.draw = function() {
  context.fillStyle = "blue";
  context.fillRect(this.x, this.y, this.width, this.height);
}

Player.prototype.update = function() {
  this.y = this.y + this.direction;

  if(this.y <= 0 || this.y + this.height >= canvas.height) {
    this.direction *= -1;
  }
}

function Enemy(x, y) {
  this.x = x;
  this.y = y;
  this.width = 25;
  this.height = 25;
  this.direction = -1;
}

Enemy.prototype.draw = function() {
  context.fillStyle = "red";
  context.fillRect(this.x, this.y, this.width, this.height);
}

Enemy.prototype.update = function() {
  this.y = this.y + this.direction;

  if(this.y <= 0 || this.y + this.height >= canvas.height) {
    this.direction *= -1;
  }
}


var player = new Player(100, 175);
var enemy1 = new Enemy(20, 25);
var enemy2 = new Enemy(180, 25);
var enemy3 = new Enemy(340, 25);

function frameUpdate() {
  context.fillStyle = "gray";
  context.fillRect(0, 0, canvas.width, canvas.height);

  player.update();
  player.draw();

  enemy1.update();
  enemy1.draw();

  enemy2.update();
  enemy2.draw();

  enemy3.update();
  enemy3.draw();

  window.requestAnimationFrame(frameUpdate);
}

frameUpdate();
