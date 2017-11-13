var theFont = new Array(4);
var fsize = 9;
var insideColor = 0;
var fontCount = 0;

var fphases = new Array(4);
var testPhase = 0;
var speed = 0.01;


function preload() {
  for (var i = 0; i < theFont.length; i++) {
    theFont[i] = loadFont('data/font' + i + '.otf');
  }

}

function setup() {
  createCanvas(800, 600);
  background(255);
  fill(0);
  stroke(0);
  textFont(theFont[0], fsize);

  for (var i = 0; i < fphases.length; i++) {
    fphases[i] = random(0.0, TWO_PI);
  }

}

function draw() {
  background(255);
  var thex = 50;
  var they = height / 2;

  speed = mouseX/width * 0.5;
  testPhase = (testPhase + speed) % TWO_PI;
  var h = map(sin(testPhase), -1.0, 1.0, height, 0);
  ellipse(width/2, h, 20, 20);

  var s;
  s = map(sin(fphases[0]), -1.0, 1.0, 9, 64);
  textFont(theFont[0], s);
  text('my', thex, they);
  thex += textWidth('my ');
  fphases[0] = (fphases[0] + speed) % TWO_PI;

  s = map(sin(fphases[1]), -1.0, 1.0, 9, 64);
  textFont(theFont[1], 36);
  text('cat', thex, they);
  thex += textWidth('cat ');
  fphases[1] = (fphases[1] + speed) % TWO_PI;

  s = map(sin(fphases[2]), -1.0, 1.0, 9, 64);
  textFont(theFont[2], 36);
  text('has', thex, they);
  thex += textWidth('has ');
  fphases[2] = (fphases[2] + speed) % TWO_PI;

  s = map(sin(fphases[3]), -1.0, 1.0, 9, 64);
  textFont(theFont[3], 36);
  text('ticks', thex, they);
  thex += textWidth('ticks ');
  fphases[3] = (fphases[3] + speed) % TWO_PI;

  /*
  fill(insideColor, 0, 0);
  text('my cat has ticks', mouseX, mouseY);
  fsize++;
  textSize(fsize);
  if (fsize > 56) fsize = 9;
   
  if(frameCount % 20 === 0){
    insideColor = 255 - insideColor;
    fontCount = (fontCount + 1) % theFont.length;
    println(fontCount);
    
    textFont(theFont[fontCount]);
  }
   
  */
}