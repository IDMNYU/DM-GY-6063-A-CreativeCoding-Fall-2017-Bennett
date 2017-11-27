// borrowed heavily from:

// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com


class Particle {
  PVector velocity, position;
  float lifespan;

  Particle(PVector p) {
    velocity = new PVector(ceil(random(1, 2)), ceil(random(0, 1)));
    position = p.copy();
    lifespan = 255.0;
  }
  void run() {
    update();
    display();
  }

  void update() {
    float r = random(1);
    print("R is: ");
    println(r);
    // we have a 40% chance of moving to the right
    if (r < 0.4) {
      velocity.x = (velocity.x + 1);
    } else if (r < 0.6) {
      velocity.x--;
    }
    else if (r < 0.8) {
      velocity.y++;
    }
    else {
      velocity.y--;
    }
    print("vel.x is: ");
    println(velocity.x);

    position.add(velocity);
    print("position is: ");
    println(position);
    lifespan -= 2;
  }

  void display() {
    stroke(200, lifespan);
    strokeWeight(2);
    fill(200, lifespan);
    ellipse(position.x, position.y, 12, 12);
  }

  boolean isDead() {
    if (lifespan < 0.0) {
      return true;
    } else {
      return false;
    }
  }
}