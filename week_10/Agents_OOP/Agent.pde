class Agent {

  PVector location;
  PVector velocity;
  PVector acceleration;
  PVector v;

  public float maxSpeed = 5.0; // Maximum speed
  public float maxForce = 3.0; // Maximum steering force

  public float maxPursue = 20.0; // Maximum steering force
  public float maxEvade = 10.0; // Maximum steering force
  float wandertheta;
  PVector noiseoff;


  int bigC, littleC;
  float max, radSec;

  Agent(int x, int y) {
    acceleration = new PVector(0, 0);
    location = new PVector(0, 0);
    velocity = new PVector(0, 0);
    bigC = 40;
    littleC = 30;
    max = 10;

    maxSpeed = 6;
    maxForce = 0.5;

    noiseoff = new PVector(random(1000), random(1000));
    wandertheta = 0;
  }

  void update() {
    /*
    PVector mouse = new PVector(mouseX, mouseY);
     PVector dir = PVector.sub(mouse, location);
     dir.normalize();
     dir.mult(4);
     acceleration = dir;
     */
    velocity.add(acceleration);
    velocity.limit(maxSpeed);

    location.add(velocity);
    acceleration.mult(0);  // reset acceleration each cycle
  }

  void applyForce(PVector force) {
    //add mass here if desired ... A = F/M
    acceleration.add(force);
  }

  //Steering !!   Steering = desired - velocity //
  void seek(PVector target) {
    // figure out the vector to our target from our current location
    PVector desired = PVector.sub(target, location);

    /*
    desired.normalize();
     desired.mult(maxSpeed);
     */

    //scale to max speed. not teleporting
    desired.setMag(maxSpeed);
    // once we have that desired velocity, 
    //subtract from it our current velocity vector:
    PVector steering = PVector.sub(desired, velocity);
    steering.limit(maxForce);  //limiting
    applyForce(steering);
  }

  void walk() {
    velocity.x = map(noise(noiseoff.x), 0, 1, -1, 1);
    velocity.y = map(noise(noiseoff.y), 0, 1, -1, 1);
    velocity.mult(5);
    noiseoff.add(0.01, 0.01, 0);
    //constrain
  }


  void flee(PVector target) {
   // /*
    PVector steering;
     float radius = 1;
     //PVector desired = PVector.sub(location, target);
     PVector desired = PVector.sub(target, location);
     float distance = desired.mag();
     // If the distance is greater than 0, calc steering (otherwise return zero vector)
     if( distance > 0 && distance < (radius*100)*(radius*100)){
     desired.setMag(maxForce); 
     //steering = PVector.sub(velocity, desired);
     steering = PVector.sub(velocity, desired);
     }
     else {
     steering = new PVector(0, 0);
     
     }
     //*/
    /*
    desired.normalize();
     desired.mult(maxSpeed);
     */
    /*
    PVector desired = PVector.sub(location, target);
     //scale to max speed. not teleporting
     desired.setMag(maxSpeed);
     PVector steering = PVector.sub(desired, velocity);
     steering.limit(maxForce);  //limiting
     
     */
    /*
    PVector desired = PVector.sub(location, target);
    desired.setMag(maxSpeed);
    PVector steering = PVector.sub(desired, velocity);
    steering.limit(maxForce);  //limiting
     */
    applyForce(steering);
  }

  void pursue(Agent a) {
    PVector steer = new PVector();
    steer = PVector.sub(a.location, location);
    /*
    
     get the velocity
     normalize it
     multiple to scale = new/predicted location
     predicted loc - current loc = velocity
     velocity set mag
     desired from velocity
     limit by max force
     apply it
     
     */
    steer.mult(maxPursue);
    applyForce(steer);
  }


  void evade(Agent a) {
    //PVector steer = new PVector();
    float distance = dist(location.x, a.location.x, location.y, a.location.y);
    if ( distance < 100) {
      this.flee(a.location);
     // steer.mult(maxEvade);
      //applyForce(steer);
    }
    else{
      this.walk();
    }
  }


  void render(int r, int g, int b) {

    // Draw a triangle rotated in the direction of velocity
    float theta = velocity.heading2D() + PI/2;
    color skin = color(r, g, b);
    stroke(95, 164, 255);
    strokeWeight(2);
    noFill();
    pushMatrix();
    translate(location.x, location.y);
    ellipse(0, 0, bigC, bigC); //variable ellipse(location.x, location.y, bigC, bigC); //variable 
    //fill(95, 164, 255);
    fill(skin);
    ellipse(0, 0, littleC, littleC); //variable ellipse(location.x, location.y, bigC, bigC); //variable 
    noFill();
    fill(255, 197, 127, 230);
    noStroke(); 

    radSec = 0;

    //rotate(radians(radSec));  // use this to rotate for time
    rotate(theta);
    triangle( -9, 0, 0, -40, 9, 0);
    stroke(144, 232, 146);
    line(0, -20, 0, -50);
    popMatrix();
  }

  void checkSides() {

    if (location.x > width) {
      //location.x *= -1;
      //location.x += -location.x;
      location.x = 0;
    }

    if (location.x < 0) {
      //location.x *= -1;
      //location.x += +location.x;
      location.x = width;
    }

    if (location.y > height) {
      //location.y *= -1;
      location.y = 0;
    }
    if (location.y < 0) {
      //location.y *= -1;
      location.y = height;
    }
  }
}