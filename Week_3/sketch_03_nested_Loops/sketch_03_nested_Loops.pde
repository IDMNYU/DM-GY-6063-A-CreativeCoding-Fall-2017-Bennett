
int option = 1; // this global. draw has access, as well as other functions

void setup() {

  size(400, 300);
  smooth(); // anti-aliasing
  noFill();
}

void draw() {
  background(255);

  //x starts at 50, as long as it's smaller than or equal to the width,
  // do what's inside the for-loop
  ///*
  if (option == 1) {
    for (int x = 50; x <= width-50; x +=20) {
      for (int y = 50; y <= width-50; y+=20) {
        line(x-5, y-5, x + 5, y + 5); 
        line(x+5, y-5, x-5, y+5);
        // incrementy
        y+= 20;
        // if(y > width -50) y = 0;
      }// y for-loop  ; once y > width-50 , then we will exit
      // and resume the next item in our x or-loop
    }
  }
  // */

  // /*
  if (option == 2) {
    for (int x = 50; x <= width-50; x+=20) {
      for ( int y = 50; y <height-50; y+=20) {
        line(x, y, width/2, height/2);
      }
    }
  }
  //*/
  if (option == 3) {
    int count = 120;
    for (int x = 50; x <width-50; x +=20) {
      for (int y = 50; y<height-50; y+=20) {
        float s = map(count, 120, 0, 0, TWO_PI*2);
        arc(x, y, 14, 14, s, s +PI);
        count--;
      }
    }
  }
}


void mousePressed() {
  option++;
  if (option > 3) {
    option = 1;
  }
}
