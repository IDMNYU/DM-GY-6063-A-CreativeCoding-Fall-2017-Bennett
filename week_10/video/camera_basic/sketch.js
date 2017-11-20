var cam;

function setup() {
  createCanvas(800, 600);
  cam = createCapture(VIDEO);
  cam.size(40, 40);
  cam.hide();
}

function draw() {
  background(0);
  cam.loadPixels();
  console.log(cam.width + " " + cam.height);

  
  cam.updatePixels();

  image(cam, 0, 0, width, height);
}

function keyPressed()
{

}