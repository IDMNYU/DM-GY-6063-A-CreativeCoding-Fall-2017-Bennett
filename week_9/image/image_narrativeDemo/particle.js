// borrowed heavily from:

// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com


var Particle = function(position) {
  this.velocity = createVector(random(1, 2), random(0, 1));
  this.position = position.copy();
  this.lifespan = 255.0;

  this.run = function() {
    this.update();
    this.display();
  }

  this.update = function() {
    var r = random(1);
    // we have a 40% chance of moving to the right
    if (r < 0.4) {
      this.velocity.x = (this.velocity.x + 1);
    }
    else if (r < 0.6) this.velocity.x--;
    else if (r < 0.8) this.velocity.y++;
    else this.velocity.y--;

    this.position.add(this.velocity);
    this.lifespan -= 2;
  }

  this.display = function() {
    stroke(200, this.lifespan);
    strokeWeight(2);
    fill(200, this.lifespan);
    ellipse(this.position.x, this.position.y, 12, 12);
  }

  this.isDead = function() {
    if (this.lifespan < 0.0) {
      return true;
    } else {
      return false;
    }
  }

}