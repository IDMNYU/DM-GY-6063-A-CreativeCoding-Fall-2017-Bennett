/*
Cross hairs sketch tool
 
click mouse to get x,y location
*/

void setup() {

  size(400, 400);
}

void draw() {
  background(0);
  stroke(255);  // white colored line
  strokeWeight(1); // thickness

  line(0, mouseY, width, mouseY);
  line(mouseX, 0, mouseX, height);

  print("Mouse X is:  "); 
  print(mouseX);
  print(" Mouse Y is: ");
  println(mouseY);
}