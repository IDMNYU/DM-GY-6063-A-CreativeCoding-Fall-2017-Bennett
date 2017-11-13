var theFont = new Array(4);
var fsize = 9;
var insideColor = 0;
var fontCount = 0;


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

}

function draw() {
  background(255);
  var thex = 50;
  var they = height / 2;

  textFont(theFont[0], 36);
  text('my', thex, they);
  thex += textWidth('my ');

  textFont(theFont[1], 36);
  text('cat', thex, they);
  thex += textWidth('cat ');

  textFont(theFont[2], 36);
  text('has', thex, they);
  thex += textWidth('has ');

  textFont(theFont[3], 36);
  text('ticks', thex, they);
  thex += textWidth('ticks ');

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