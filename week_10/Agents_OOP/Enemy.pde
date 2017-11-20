class Enemy {
  PVector location;
  PVector velocity;
  PVector acceleration;
  PVector v, turn;
  PVector agentLoc, dir;
  int bigC, littleC; // ellipse widths
  float max;  //max speed
  float angle, radSec, distAgent, pastDist, attract;
  float xX, yY;

  Enemy(int x, int y, float attract) {
    location = new PVector(x, y);
    velocity = new PVector(0, 0);
    bigC = 40;
    littleC = 30;
    max = 10;
    attract = attraction;
  }

  void update(Agent a) {
    
    //PVector dir = PVector.sub(location, a.location);
    //dir.normalize();
    //angle = a.velocity.heading();
    //angle = a.velocity.heading2D();
    //angle = atan2(a.location.y, a.location.x) * -1;
    /*
    agentLoc = new PVector(a.location.x, a.location.y);
    dir = PVector.sub(agentLoc, location);
    distAgent = dir.mag();
    pastDist = distAgent;
    turn = PVector.mult(dir, attract/distAgent);
    turn.add(random(0.1), random(0.1), 0);
    velocity.add(turn);
    velocity.normalize();
    */
    float dx = a.location.x - location.x;
    float dy = a.location.y - location.y;
    
    angle = atan2(dy, dx);
    angle += radians(90);
    
   
    //location.x = mouseX - (cos(angle));
    //location.y = mouseY - (sin(angle));
    
    //rotate2D(a.velocity);
    
  }
  
  void rotate2D(PVector v){

    float m = v.mag(); 
    float a = v.heading2D();
    //a += theta;
    
    v.x = m * cos(a);
    v.y = m * sin(a);
    
  
    /*
    float xTemp = v.x;
    v.x = v.x*cos(theta) - v.y*sin(theta);
    v.y = xTemp*sin(theta) + v.y*cos(theta);
    */
    
  }
  
  
  
  void render(PVector v, float scayl, Agent a) {
    noStroke();
    noFill();
    pushMatrix();
    translate(location.x, location.y);
    //rotate(a.velocity.heading2D());
    //angle = a.velocity.heading2D() + PI/2;
    //float len = v.mag()*scayl;
    rotate(angle);
    ellipse(0, 0, bigC, bigC); //variable ellipse(location.x, location.y, bigC, bigC); //variable 
    fill(209, 209, 173);
    ellipse(0, 0, littleC, littleC); //variable ellipse(location.x, location.y, bigC, bigC); //variable 
    fill(137, 55, 232, 200);
    noStroke();
   
    triangle( -9, 0, 0, -40, 9, 0);
    stroke(209, 47, 48);
    line(0, -20, 0, -50);
    popMatrix();
  }
}