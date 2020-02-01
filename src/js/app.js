const testModules = require('./test-module');
require('../css/app.css');

function Player(x, y) {
  this.x = x;
  this.y = y;
  this.width = 50;
  this.height = 50;
  this.direction = -1;
}

Player.prototype.update = function() {
  if(this.y <= 0 || this.y + this.height >= game.gameFieldHeight()) {
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

Enemy.prototype.update = function() {
  if(this.y <= 0 || this.y + this.height >= game.gameFieldHeight()) {
    this.direction *= -1;
  }
}

var renderer = (function () {

  function _drawEnemy(context, enemy) {
    context.fillStyle = "red";
    context.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
  }

  function _drawPlayer(context, player) {
    context.fillStyle = "blue";
    context.fillRect(player.x, player.y, player.width, player.height);
  }

  function _render() {
    var canvas = document.getElementById("game-layer");
    var context = canvas.getContext("2d");

    context.fillStyle = "gray";
    context.fillRect(0, 0, canvas.width, canvas.height);

    var i,
    entity,
    entities = game.entities();

    for (var i = 0; i < entities.length; i++) {
      entity = entities[i];

      if(entity instanceof Enemy) {
        _drawEnemy(context, entity);
      }
      else if(entity instanceof Player) {
        _drawPlayer(context, entity);
      }
    }
  }

  return {
    render: _render
  };

})();

var physics = (function () {
  function _update() {
    var i,
    entities = game.entities();

    for (var i = 0; i < entities.length; i++) {
      entities[i].y += entities[i].direction;
    }
  }

  return {
    update: _update
  };

})();

var game = (function () {
  var _gameFieldHeight = 600;
  var _entities = [];

  function _start() {
    _entities.push(new Player(100, 175));
    _entities.push(new Enemy(20, 25));
    _entities.push(new Enemy(180, 25));
    _entities.push(new Enemy(340, 25));

    window.requestAnimationFrame(this.update.bind(this));
  }

  function _update() {
    physics.update();

    var i;

    for (var i = 0; i < _entities.length; i++) {
      _entities[i].update();
    }

    renderer.render();

    window.requestAnimationFrame(this.update.bind(this));

  }

  return {
    start: _start,
    update: _update,
    entities: function () {
      return _entities;
    },
    gameFieldHeight: function () {
      return _gameFieldHeight;
    }
  };

})();

game.start();
