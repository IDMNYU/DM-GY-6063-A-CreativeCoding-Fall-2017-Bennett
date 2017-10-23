var num = 0;
var colour = 0;
var xPos = 0;
var yPos = 0;
var w = 0;
var acceleration = 0;
var velocity = 0;
var oldX = 0;
var oldY = 0;

function setup() {

  //createCanvas(displayWidth, displayHeight);
  createCanvas(800, 800);
  colour = color(87, 199, 232);
  num = 3;
  xPos = 100;
  xPos = 200;
  w = 40;

  acceleration = random(1) / 5;
  velocity = random(5, 10);
  a = random(0, TWO_PI);
}

function draw() {
 
  
  background(70, 123, 206);

  //change variables tied with movement
  /*
  // drunk, brownian motion
  var dx = mouseX - xPos;
  var dy = mouseY - yPos;
  
  xPos = xPos + random(0, 0.2) * dx + random(-10, 10);
  yPos = yPos + random(0, 0.2) * dy + random(-10, 10);
  */
  
  // scooting around
  xPos = oldX + random(-20, 20);
  yPos = oldY + random(-20, 20);
  
  //store new values for next go:
  oldX = xPos;
  oldY = yPos;
  
  // checking the boundaries
  if(xPos>width) oldX = 0;
  if(xPos<0) oldX = width;
  if(yPos>height) oldY = 0;
  if(yPos<0) oldY = height;
  

  // draw the shape
  strokeWeight(3);
  stroke(color(114, 232, 120));
  fill(colour, random(150, 200)); //random(150, 200)
  for (var i = 0; i < num; i++) {
  push();
     //translate(10, 30);
      ellipse(xPos, yPos, w, w);
      //ellipse(200, 200, 10, 10);
      ellipse(xPos + (w * .5), yPos + (w * .5), w, w);
      ellipse(xPos + (w * .5), yPos - (w * .5), w, w);
  pop();

  }

}


function keyPressed()
{
  background(0);
  xPos = random(width);
  yPos = random(height);
}