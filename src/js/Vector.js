
// var v3 = v1.add(v2);
// var v3 = vectorAdd(v1, v2);

export var Vector2d = function (x, y) {
  this.x = x;
  this.y = y;
}

export function vectorAdd(v1, v2) {
  return new Vector2d(v1.x + v2.x, v1.y + v2.y);
}

export function vectorSubtract(v1, v2) {
  return new Vector2d(v1.x - v2.x, v1.y - v2.y);
}

export function vectorScalarMultiply(v1, s) {
  return new Vector2d(v1.x * s, v1.y * s);
}

export function vectorLength(v) {
  return Math.sqrt(v.x * v.x, v.y * v.y);
}

export function vectorNormalize(v) {
  var reciprocal = 1.0 / (vectorLength(v) + 1.0e-037);

  return vectorScalarMultiply(v, reciprocal);
}
