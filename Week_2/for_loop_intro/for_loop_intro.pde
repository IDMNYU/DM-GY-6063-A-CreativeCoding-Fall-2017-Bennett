float rando;

void setup() {

  size(400, 400);
  background(100, 200, 225);
}

void draw() {
  background(100, 200, 225);
  fill(175, 255, 203);
  noStroke();
  ///*
  //println(mouseX);
  for (int i = 1; i < 10; i++) {
    float r = random(1);
    ellipse((40 * i) * r, 50, 10, 10);
   
  }
  //*/
/*
  ellipse(40 * 1, 50, 10, 10);
  ellipse(40 * 2, 50, 10, 10);
  ellipse(40 * 3, 50, 10, 10);
  ellipse(40 * 4, 50, 10, 10);
  ellipse(40 * 5, 50, 10, 10);
  ellipse(40 * 6, 50, 10, 10);
  ellipse(40 * 7, 50, 10, 10);
  ellipse(40 * 8, 50, 10, 10);
  ellipse(40 * 9, 50, 10, 10);
*/
 
  //*/
  /*
  rando = random(0, 3);
   if(rando < 1){
   fill(0);
   rect(width/2, height/2, 50, 50);
   }
   //println();
   else if(rando < 2.5){
   println("hellloooooooo");
   }
   else if(rando < 2.7){
   println("yiiieeeeeee");
   }
   else{
   println("nooooooo");
   }
   */
}