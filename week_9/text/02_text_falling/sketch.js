var allTheText;
var currentLine = '';
var textPositions = [];
var charSizes = [];
var theFont;
var x = 0;

function preload(){
  allTheText = loadStrings('data/aliceinwonderland.txt');
  //theFont = loadFont('data/NexaRustHandmade.otf');
  theFont = loadFont('data/font2.otf');
}

function setup() {
  createCanvas(800, 600);
  textFont(theFont);
  letsGo();
  
}

function draw() {
  background(255);
  var positionx = 0;
  
  for(var i = 0; i < currentLine.length; i++){
    textSize(charSizes[i]);
    text(currentLine.charAt(i), positionx, textPositions[i]);
    positionx += textWidth(currentLine.charAt(i));
    textPositions[i] += random(1, 5);
  }
  
}

function keyReleased(){
  letsGo();
}

function letsGo(){
  // get line
  var whichline = floor(random(0, allTheText.length));
  console.log(whichline);
  currentLine = allTheText[whichline];
  // figure the positions
  textPositions = new Array(currentLine.length);
  charSizes = new Array(currentLine.length);
  for(var i = 0; i < currentLine.length; i++){
    textPositions[i] = 0;
    charSizes[i] = random(12, 45);
  }
}