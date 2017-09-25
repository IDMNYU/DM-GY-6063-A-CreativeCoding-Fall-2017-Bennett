/*
From the Processing Handbook by Ben Fry and Casey Reas, 2007
https://processing.org/handbook/
*/

void setup() {
  size(600, 300);
  background(39, 199, 232); // sky blue
}


void draw() {
  noFill();
  stroke(3, 255, 108); // lime green
  for (int d = 150; d > 0; d -=10) {
    ellipse(100, 100, d, d);
  }

  strokeWeight(2);
  stroke(229, 207, 18); // mustard
  for (int x = 80; x > 20; x /= 1.2) {
    line(420, x+100, 480, x+100);
  }

  strokeWeight(2);
  stroke(16, 45, 255); // deep blue
  for (int x = 120; x <= 180; x+= 5) {
    if ((x % 10) == 0) {
      line(220, x+50, 250, x+50);
    } else {
      line(250, x+50, 280, x+50);
    }
  }
  
  stroke(132, 232, 52); // grass green
  for(int x = 20; x < 80; x *= 1.2){
    line(x+200, 20, x+200, 80);
  }
}