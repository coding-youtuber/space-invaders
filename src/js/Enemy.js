import {Entity} from "../js/Entity.js";
import { game } from "../js/Game.js";

export function Enemy(position, speed, direction, rank) {
  Entity.call(this, position, speed, direction);

  this.width = 13;
  this.height = 10;
  this.rank = rank;
}

Enemy.prototype = Object.create(Entity.prototype);

Enemy.prototype.update = function(dt) {
  Entity.prototype.update.call(this, dt);

  // console.log(this.collisionRect().bottom());
  if(this.collisionRect().top() <= 0 ||
  this.collisionRect().bottom() >= game.gameFieldRect().bottom()) {
    this.direction.y *= -1;
  }
};

// export default Enemy;
