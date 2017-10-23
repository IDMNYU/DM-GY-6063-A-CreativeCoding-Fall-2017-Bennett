var num = 0;
var colour = 0;
var ring = 0;
var xPos = 0;
var yPos = 0;
var w = 0;
var acceleration = 0;
var velocity = 0;
var oldX = 0;
var oldY = 0;

var liteB, melon, medBlu, pink, orange, mustard, ring;
var clrs = [];

function setup() {

  //createCanvas(displayWidth, displayHeight);
  createCanvas(800, 800);
  num = 3;
  xPos = 0;
  xPos = 0;
  w = 40;

  acceleration = random(1) / 5;
  velocity = random(5, 10);
  a = random(0, TWO_PI);

  liteBlu = color(87, 199, 232);
  // 4th parameter to color effects alpha
  melon = color(232, 141, 103, random(10, 50));
  pink = color(220, 82, 245);
  mustard = color(209, 191, 91);
  ring = color(114, 232, 120);
  medBlu = color(70, 123, 206);

  // grouping all the colors into one array
  clrs = [liteBlu, melon, pink, mustard, ring];
  background(medBlu);
}

function draw() {
  background(medBlu); // medBlue
  //update the opacity with a random value
  var r = random(10, 50)
  clrs[2] = color(220, 82, 245, r);

  //change variables tied with movement thru functions below
  // randMove();
  drunkAttract();

  // now display the items after updating movement variables
  display(clrs[1], clrs[4]);


}

function drunkAttract() {

  // drunk, brownian motion
  var dx = mouseX - xPos;
  var dy = mouseY - yPos;

  xPos = xPos + random(0, 0.2) * dx + random(-10, 10);
  yPos = yPos + random(0, 0.2) * dy + random(-10, 10);


}

function randMove() {
  // scooting around
  xPos = oldX + random(-20, 20);
  yPos = oldY + random(-20, 20);

  //store new values for next go:
  oldX = xPos;
  oldY = yPos;

  // checking the boundaries
  checkB_randMove();
}

function checkB_randMove() {
  // checking the boundaries
  if (xPos > width) oldX = 0;
  if (xPos < 0) oldX = width;
  if (yPos > height) oldY = 0;
  if (yPos < 0) oldY = height;
}

function display(clr_1, clr_2) { //display(x_, y_, clr1, clr2){
  //xPos = x_;
  //yPos = y_;
  // draw the shape
  strokeWeight(3);
  stroke(clr_2);
  fill(clr_1);
  for (var i = 0; i < num; i++) {

    ellipse(xPos, yPos, w, w);
    //ellipse(200, 200, 10, 10);
    ellipse(xPos + (w * .5), yPos + (w * .5), w, w);
    ellipse(xPos + (w * .5), yPos - (w * .5), w, w);

  }
}


function keyPressed() {
  background(0);
  xPos = random(width);
  yPos = random(height);
}