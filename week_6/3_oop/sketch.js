var medBlu;

var b1;
var b2;
var liteB, melon, pink, orange, mustard, ring;
var clrs = [];


function setup() {
  medBlu = color(70, 123, 206);

  liteBlu = color(87, 199, 232);
  melon = color(232, 141, 103, random(10, 50));
  pink = color(220, 82, 245);
  mustard = color(209, 191, 91);
  ring = color(114, 232, 120);
  
  //createCanvas(displayWidth, displayHeight);
  createCanvas(800, 800);

  background(medBlu);
   clrs[0] = mustard;
   clrs[1] = melon;
   clrs[2] = pink;
   clrs[3] = orange;
   clrs[4] = ring;

  b1 = new Blob(0, 0, 3, 30);
  b2 = new Blob(50, 100, 3, 30)

}

function draw() {
  background(medBlu); // medBlue
  //update the opacity
  var r = random(10, 50)
 
  clrs[2] = color(220, 82, 245, r);

 
  //now calling method and applying them to various objects
   b1.randMove();
   b2.drunkAttract();
  //b1.reflect(); // comment out b1.randMove() above
  
  // once we've called those methods that update
  // variables associated with location, we can now
  // re-draw the object with the updated values
  b1.display(clrs[0]);
  
  b2.display(clrs[2]);
 

}


function keyReleased() {
  b1.initialize();
}


function keyPressed() {
  background(0);
  b1.xPos = random(width);
  b1.yPos = random(height);
}

class Blob {
  constructor(x_, y_, n, w_){
  this.num = n; //3;
  this.xPos = x_; //0;
  this.yPos = y_; //0;
  this.w = w_; //40;

  
  this.v = 0;
  this.oldX = 0;
  this.oldY = 0;

  this.thex, this.they;
  this.a; //angle

  this.velocity = random(5, 10);
  this.a = random(0, TWO_PI);

  }

  //this.reflect = function() {
  reflect(){
    // polar to cartesian transformation:
    this.xPos = this.xPos + this.v * cos(this.a);
    this.yPos = this.yPos + this.v * sin(this.a);

    if (this.xPos > width) a = PI - this.a;
    if (this.xPos < 0) this.a = PI - this.a;
    if (this.yPos > height) this.a = TWO_PI - this.a;
    if (this.yPos < 0) this.a = TWO_PI - this.a;

  }

  drunkAttract(){
  //this.drunkAttract = function() {

    // drunk, brownian motion
    var dx = mouseX - this.xPos;
    var dy = mouseY - this.yPos;

    this.xPos = this.xPos + random(0, 0.2) * dx + random(-10, 10);
    this.yPos = this.yPos + random(0, 0.2) * dy + random(-10, 10);


  }

  //this.randMove = function() {
  randMove(){
    // scooting around
    this.xPos = this.oldX + random(-20, 20);
    this.yPos = this.oldY + random(-20, 20);

    //store new values for next go:
    this.oldX = this.xPos;
    this.oldY = this.yPos;

    // checking the boundaries
    this.checkB_randMove();
  }

  checkB_randMove(){
  //this.checkB_randMove = function() {
    // checking the boundaries
    if (this.xPos > width) this.oldX = 0;
    if (this.xPos < 0) this.oldX = width;
    if (this.yPos > height) this.oldY = 0;
    if (this.yPos < 0) this.oldY = height;
  }

  display(clr_2){
  //this.display = function(clr_2) { //display(x_, y_, clr1, clr2){  //clr_1, clr_2
    //xPos = x_;
    //yPos = y_;
    // draw the shape
    strokeWeight(3);
    stroke(0);  //clr_2
    fill(clr_2); //clr_1
    for (var i = 0; i < this.num; i++) {

      ellipse(this.xPos, this.yPos, this.w, this.w);
      ellipse(this.xPos + (this.w * .5), this.yPos + (this.w * .5), this.w, this.w);
      ellipse(this.xPos + (this.w * .5), this.yPos - (this.w * .5), this.w, this.w);

    }
  }

  initialize(){
  //this.initialize = function() {
    this.xLoc = random(0, width);
    this.yLoc = random(0, height);
    this.v = random(5, 20); // random velocity
    this.a = random(0, TWO_PI); // random angle
  }
}