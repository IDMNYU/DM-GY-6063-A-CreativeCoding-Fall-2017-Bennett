Agent vehicle;
Enemy villian;
Agent bug;
Agent eve;

float attraction = 1.0;

void setup() {
  size(600, 600);
  attraction = random(0, 1);
  vehicle = new Agent(width/2, height/2);
  villian = new Enemy(width/2, height/2, attraction);
  bug = new Agent(width/2, height/2);
  
  eve = new Agent(width/3, height/3);
}



void draw() {
  background(0);
  vehicle.checkSides();
  bug.checkSides();
  
  eve.checkSides();

  PVector mouse = new PVector(mouseX, mouseY);
  vehicle.seek(mouse);
  
  bug.walk();
  bug.flee(mouse);
  //eve.pursue(bug);
  eve.evade(vehicle);

  eve.update();
  vehicle.update();
  villian.update(vehicle);
  bug.update();
  
  villian.render(vehicle.velocity, 1.0, vehicle);
  vehicle.render(105, 184, 255);
  bug.render(255, 255, 255);
  eve.render(62, 74, 141);
}