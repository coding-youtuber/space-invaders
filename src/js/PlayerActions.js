import { game } from "../js/Game.js";

export var playerActions = (function () {
  var _ongoingActions = [];

  function _startAction(id, playerAction) {
    if(playerAction === undefined) {
      return;
    }

    var f,
    acts = {"moveLeft": function () {
        if(game.player()) game.player().moveLeft(true);
      },
      "moveRight": function () {
        if(game.player()) game.player().moveRight(true);
      },
      "fire": function () {
        if(game.player()) game.player().fire();
      }
    };

    if(f = acts[playerAction]) f();

    _ongoingActions.push({idendifier: id, playerAction: playerAction});
  }

  function _endAction(id) {
    var f,
    acts = {"moveLeft": function () {
        if(game.player()) game.player().moveLeft(false);
      },
      "moveRight": function () {
        if(game.player()) game.player().moveRight(false);
      }
    };

    var idx = _ongoingActions.findIndex(function (a) {
      return a.idendifier === id;
    });

    if(idx >= 0) {
      if(f = acts[_ongoingActions[idx].playerAction]) f();
      _ongoingActions.splice(idx, 1);
    }
  }

  return {
    startAction: _startAction,
    endAction: _endAction
  };
})();
