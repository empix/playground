function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomColor() {
  return [random(0, 255), random(0, 255), random(0, 255), Math.random()];
}
