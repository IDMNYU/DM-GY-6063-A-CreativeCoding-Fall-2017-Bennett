
int wh = 80; // now if I want to change w + h, I only have to change it in one place

void setup() {
  size(600, 600);
  background(70, 209, 141);
}



void draw() {

  noStroke();
  fill(206, 103, 126);  // mauve
  rect(0, 0, wh, wh);

  pushMatrix(); // for every push, you need a pop
    translate(100, 0);  // we are translating the matrix. ie moving our paper
    fill(232, 141, 103); // orange
    //rect(0, 0, wh, wh);
    /*
    // and we can nest these turkies
    pushMatrix(); // saving previous setting for the matrix
      translate(0, 100);
      fill(127);  //grey
      //rect(0, 0, wh, wh);
    popMatrix();  // restore put everything back
  */
  popMatrix();
  ///*
  pushMatrix(); // saving previous setting for the matrix
      translate(0, 100);
      fill(91, 187, 209);  //blue
      //rect(0, 0, wh, wh);
  popMatrix();  // restore put everything back
 //*/
  
  //translate(-100, 0);  // have to undo matrix transformations, otherwise, permenant
  fill(232, 198, 141);  //beige
  //rect(width/2 - wh/2, height/2 - wh/2, wh, wh);  // rect mode, or subtract 1/2 w + 1/2 h
//*/
 
}