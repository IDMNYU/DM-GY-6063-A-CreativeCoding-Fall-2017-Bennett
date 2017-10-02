function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  translate(width / 2, height / 2);
  for (var i = 0; i < 200; i++) {
    rotate(0.1);
    ellipse(i, 0, 10, 10);
  }
}