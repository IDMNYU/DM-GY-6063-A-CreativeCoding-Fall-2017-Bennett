var h = 0;
var r = 0;
var d = 1;
var img;
var cam;

function preload() {
  img = loadImage('cat.jpg');
}

function setup() {
  createCanvas(800, 600, WEBGL);
  cam = createCapture(VIDEO);
}

function draw() {
  background(0);
  var dirX = d*cos(r);
  var dirY = d*sin(r);
 
  directionalLight(255, 0, 0, dirX, dirY, 0.5);
  translate(dirX*width/2, -dirY*height/2, 0.5);
  
  texture(cam);
  sphere(30);
  resetMatrix();
  //normalMaterial();
  ambientMaterial(255, 255, 255); // kinda like fill
  rotateX(radians(h));
  rotateY(radians(mouseX/width*360));
  rotateZ(radians(mouseY/height*360));
  
  texture(cam);
  box(200, 200, 200);
  
  //h = (h+1) % 360.;
  r = (r+0.01) % TWO_PI;
}