int pmouseNum;
// Move the mouse quickly to see the difference 
// between the current and previous position 

void setup(){
  size(400, 400);
  
}

void draw() { 
  background(204);
  ///*
  if (mouseX < width/2) { 
    pmouseX = pmouseX -10;
  } else if (mouseX > width/2) {
    pmouseX = pmouseX + 10;
  }
  //*/
  line(mouseX, 220, pmouseX - 10, 280); 
  println(mouseX + " : " + pmouseX);
} 