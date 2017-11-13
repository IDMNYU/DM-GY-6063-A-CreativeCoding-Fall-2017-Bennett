// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 15-9: Adjusting image brightness based on pixel location (Flashlight effect)

var img;

var source;
var destination;

function preload() {
  //img = loadImage("data/sunflower.jpg");
  source = loadImage("data/sunflower.jpg");
}

function setup() {
  createCanvas(400, 400);
  destination = createImage(source.width, source.height);

  // Temporary-ish fix for retina machines
  //devicePixelScaling(false);
}

function draw() {
  
  var threshold = 127;
  source.loadPixels();
  destination.loadPixels();

  // We must also call loadPixels() on the PImage since we are going to read its pixels.
  //img.loadPixels();
  for (var y = 0; y < source.height; y++ ) {
    for (var x = 0; x < source.width; x++ ) {
      var loc = (x + y * source.width) * 4;
      // The functions red(), green(), and blue() pull out the three color components from a pixel.
      var r = source.pixels[loc   ]; 
      var g = source.pixels[loc + 1];
      var b = source.pixels[loc + 2];
      
      var result;
      if((r+g+b) / 3 > threshold){
        result = 255; //white
      } else{
        result = 0;  // black
      }
  

      // Calculate an amount to change brightness
      // based on proximity to the mouse
      var distance = dist(x, y, mouseX, mouseY);

      // The closer the pixel is to the mouse, the lower the value of "distance" 
      // We want closer pixels to be brighter, however, so we invert the value using map()
      // Pixels with a distance of 50 (or greater) have a brightness of 0.0 (or negative which is equivalent to 0 here)
      // Pixels with a distance of 0 have a brightness of 1.0.
      var adjustBrightness = map(distance, 0, 50, 8, 0);
      r *= adjustBrightness;
      g *= adjustBrightness;
      b *= adjustBrightness;

      // Constrain RGB to between 0-255
      r = constrain(r, 0, 255);
      g = constrain(g, 0, 255);
      b = constrain(b, 0, 255);
    
      // Set the display pixel to the image pixel
      destination. pixels[loc    ] = result;
      destination.pixels[loc + 1] = result;
      destination.pixels[loc + 2] = result;
      destination.pixels[loc + 3] = 255; // Always have to set alpha
    }
  }

  destination.updatePixels();
  //fill(255, 0, 0, 30); // Red, Green, Blue, (Alpha)
    //ellipse(mouseX, mouseY, 50, 50);
    image(destination, 0, 0);
}
