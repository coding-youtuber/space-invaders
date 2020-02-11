import { Entity } from "../js/Entity.js";
import { game } from "../js/Game.js";
import { Vector2d, vectorAdd } from "../js/Vector.js";

export function Player(position, speed, direction) {
  Entity.call(this, position, speed, direction);

  this.width = 20;
  this.height = 10;

  this.movingLeft = false;
  this.movingRight = false;
}

Player.prototype = Object.create(Entity.prototype);

Player.prototype.updateDirection = function () {
  var direction = new Vector2d(0, 0);

  if(this.movingLeft) {
    direction = vectorAdd(direction, new Vector2d(-1, 0));
  }

  if(this.movingRight) {
    direction = vectorAdd(direction, new Vector2d(1, 0));
  }

  this.direction = direction;
}

Player.prototype.moveRight = function (enable) {
  this.movingRight = enable;
  this.updateDirection();
}

Player.prototype.moveLeft = function (enable) {
  this.movingLeft = enable;
  this.updateDirection();
}

Player.prototype.fire = function () {
  console.log("Fire to be implemented");
}

Player.prototype.update = function(dt) {
  Entity.prototype.update.call(this, dt);

  if(this.collisionRect().top() <= 0 ||
  this.collisionRect().bottom() >= game.gameFieldRect().bottom()) {
    this.direction.y *= -1;
  }
}
