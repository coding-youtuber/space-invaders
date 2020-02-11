import { Entity } from "../js/Entity.js";
import { game } from "../js/Game.js";

export function Player(position, speed, direction) {
  Entity.call(this, position, speed, direction);

  this.width = 20;
  this.height = 10;
}

Player.prototype = Object.create(Entity.prototype);

Player.prototype.update = function(dt) {
  Entity.prototype.update.call(this, dt);

  // console.log(this.collisionRect().bottom());
  // console.log(this.direction);
  // console.log(this.position);

  if(this.collisionRect().top() <= 0 ||
  this.collisionRect().bottom() >= game.gameFieldRect().bottom()) {
    // console.log("collision");
    this.direction.y *= -1;
  }
}
