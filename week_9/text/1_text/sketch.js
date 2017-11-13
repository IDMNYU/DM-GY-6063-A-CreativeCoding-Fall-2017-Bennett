var rust;
var script;
var font1;

var fsize = 3;
var myString, string2;
var framecount = 0;
var x = 0;
var insideColor = 0;

function preload() {
  rust = loadFont('data/NexaRustHandmade.otf');
  script = loadFont('data/NexaRustScriptL.otf');
  font1 = loadFont('data/font1.otf');
}


function setup() {
  frameRate(60);
  createCanvas(1000, 1000);

  myString = "Messages from a far away place, coming to you....";
  string2 = "Tonight: Donald Trump lies once more.........People still in awe";
}

function draw() {
  background(255);
  if (framecount < 30) {
    fill(0);
    textFont(rust, 48);
  } else {
    fill(40, 189, 175);
    //noStroke();
    textFont(script, 14);
  }
  //textFont(script, 14); // the font I want to use, and the size I want it to be
  text(myString, 200, 200, 310, 310); // the actual text, x, y coordinates

  noStroke();
  stroke(200, 20, 100);
  textFont(font1, 82);
  text("My dog ate my homework, huh huh.", 20, 600);

  fill(0);
  textFont(font1, 25);
  text(string2, x, 800);

  x = x - 5;
  if (x < -string2.length) x = width;
  println(x);
  
  fill(insideColor, 0, 0);
  textFont(font1, fsize);
  text("Lets get Big", mouseX, mouseY);
  fsize++;
  if(fsize > 150) fsize = 9;
  
  if(frameCount %20 === 0){
    insideColor = 255-insideColor;
    
  }


  framecount = (framecount + 1) % 60;
}