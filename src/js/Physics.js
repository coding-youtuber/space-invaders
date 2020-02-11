import { vectorScalarMultiply, vectorAdd } from "../js/Vector.js";
import { game } from "../js/Game.js";

export var physics = (function () {
  function _update(dt) {
    var i,
        e,
        velocity,
    entities = game.entities();

    for (i = entities.length - 1; i >= 0; i--) {
      e = entities[i];

      // console.log(e.position);
      velocity = vectorScalarMultiply(e.direction, e.speed);
      // console.log(velocity);

      // console.log(velocity);
      e.position = vectorAdd(
        e.position,
        vectorScalarMultiply(velocity, dt)
      );
    }
  }

  return {
    update: _update
  };

})();
