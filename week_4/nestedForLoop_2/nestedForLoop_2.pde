/* //<>// //<>//
From the Processing Handbook by Ben Fry and Casey Reas, 2007
 https://processing.org/handbook/
 
 
 modifications by ladyK
 */

void setup() {
  size(200, 200);
  background(210, 164, 255); // easter purple
}


void draw() {
  stroke(33, 130, 232);
  strokeWeight(1);
  
}

void mousePressed(){
  
  //int rX = int(random(150, width - 50)); //<>// //<>//
  //int rY = int(random(0, height -50)); //<>// //<>//
  pushMatrix();
  translate(mouseX-25, mouseY-40);
  for (int y = 20; y <= 50; y+=10) {
    for (int x= 20; x <= y; x +=5) {
      line(x, y, x-3, y-3);
    }
  }
  popMatrix();
  
}