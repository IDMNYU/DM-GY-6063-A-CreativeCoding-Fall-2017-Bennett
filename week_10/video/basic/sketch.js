var vid;
var d;

function preload() {
  
}

function setup() {
  createCanvas(800, 600);
  vid = createVideo('eight_jpeg.mov');
  vid.loop();
  vid.hide();
}

function draw() {
  background(255);
  d = vid.duration();
  vid.speed(mouseX/width*4);
  image(vid, 0, 0, width, height);
}

function keyPressed()
{

}