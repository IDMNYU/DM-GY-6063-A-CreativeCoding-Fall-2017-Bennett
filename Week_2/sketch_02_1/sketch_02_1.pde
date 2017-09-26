int x = 0;
int y = 0;
int r = 0; 
int g = 0;
int b = 0;

void setup() {
  size(800, 600);
  background(255);   //white
  //strokeWeight(5);
  //frameRate(10);
  
}

void draw(){
  background(255);
  strokeWeight(mouseX/20);
  
  for( int i = 0; i < 20; i= i+1){  // i++
    fill(29, 255, 86, 100);
    ellipse(mouseX + random(40), mouseY + random(40), 5, 5);
  } // for-loop
  
  
}