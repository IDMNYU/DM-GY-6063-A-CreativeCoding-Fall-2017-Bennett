/* //<>//
From the Processing Handbook by Ben Fry and Casey Reas, 2007
 https://processing.org/handbook/
 
 modified by LadyK for quantity and location upon input
 by using matrix transformations between patterns
 */

void setup() {
  size(200, 200);
  background(210, 164, 255);
}


void draw() {
  stroke(33, 130, 232);
  strokeWeight(1);
  /*
  for(int y = 20; y <= 50; y+=10){
   for(int x= 20; x <= y; x +=5){
   line(x, y, x-3, y-3);
   }
   }
   */
}

// need to use the mouse
// translate + mouse y + x

void mousePressed() {
  pushMatrix();

    translate(mouseX, mouseY);
    for ( int j = 0; j < 5; j++) { // it's not manadorty to apply j within code in other places
      // if we don't do a matrix transformation, nor 
      // apply variables to x + y through each j-loop, the graphic will draw on
      // top of the other.
      rotate(radians(45)); // pass radians a degree, and get a radian in return
    
      for (int y = 20; y <= 50; y+=10) {
        for (int x= 20; x <= y; x +=5) {
          line(x, y, x-3, y-3);
        } // x
      } /// y
      println(j);
    } //j

  popMatrix();
}