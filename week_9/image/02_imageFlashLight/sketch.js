var bird;
//var pointillize = 16;

function preload() {
  bird = loadImage('data/bird.png');
}

function setup() {
  createCanvas(256, 256);
  background(0);
}

function draw() {
  loadPixels(); // load the pixels of canvas
  bird.loadPixels();

  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      // get our pixel location
      var pix = (x + (y * width)) * 4;
    // extracting color information
      var r = bird.pixels[pix ];
      var g = bird.pixels[pix  + 1];
      var b = bird.pixels[pix  + 2];
      //where is the mouse in relation to the pixel that we are at?
      var distance = dist(x, y, mouseX, mouseY);
      //invert that relationship:
      // the closer pixels will be brighter
      // the further pixels will be darker
      var adjustBright = map(distance, 0, 50, 8, 0);
      // manipulate the color value based on the distance
      r *= adjustBright;
      g *= adjustBright;
      b *= adjustBright;
      // put those values back in the array
      pixels[pix   ] = r;
      pixels[pix  + 1] = g;
      pixels[pix  + 2] = b;
      pixels[pix  + 3] = 255; // we always have to set our alpha
    }
  }
  // we've manipulated the pixels, now update them with the new info
  updatePixels();  // this is of our sketch. 
  //fill(255, 0, 0, 30);
  //fill(255, 30);
  //ellipse(mouseX, mouseY, 50, 50);
}