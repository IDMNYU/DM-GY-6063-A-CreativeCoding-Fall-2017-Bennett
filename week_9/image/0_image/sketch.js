var img, img2;  // this is going to hold my image
var x, y, rotation;

// asychronously
function preload(){
  // heavy stuff
  img = loadImage("data/Monster_300_204.png");
  img2 = loadImage("data/legoVader.png")
}


function setup() {
  createCanvas(1200, 1200);
   x = 0.0;
   y = width/2.0;
   rotation = 0.0;
}

function draw() {
  background(255);
  image(img, 0, 0);  // blue guy
  
  
  push();
    translate(400, 100);
    scale(0.5);
    rotate(rotation);
    image(img2, x, 0);
  pop();
  
  x += 1.0;
  rotation += 0.01;
  
  if( x > width) x = 0;
  if(rotation > 5) rotation = 0;
  
  image(img2, mouseX, mouseY);
  
  
}