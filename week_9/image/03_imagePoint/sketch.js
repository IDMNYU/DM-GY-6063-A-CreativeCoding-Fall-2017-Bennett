var bird;
var pointillize = 16;

function preload(){
  bird = loadImage('data/bird.png');
}


function setup() {
  createCanvas(256, 256);
  background(0);
}

function draw() {
  var x = floor(random(bird.width));
  var y = floor(random(bird.height));
  
  var loc = (x + (y * bird.width)) * 4;
  
  bird.loadPixels(); // this is going to return an array called pixels
                    // loads all the pixel data for the image into an array called pixels
  
  var r = bird.pixels[loc   ];
  var g = bird.pixels[loc + 1];
  var b = bird.pixels[loc + 2];
  
  noStroke();
  fill(r, g, b, 100);
  ellipse(x, y, pointillize, pointillize);
  
  
  
}