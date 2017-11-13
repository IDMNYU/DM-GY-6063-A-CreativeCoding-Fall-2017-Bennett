var bird, skull, deadscape, forest;
var count = 0;
var fcount = 0;
var birdz = [];
var cueBirds = true; // controls when the birds will be made

function preload() {
  bird = loadImage("data/bird.png");
  skull = loadImage("data/skull.jpeg");
  deadscape = loadImage("data/Desolate-Winter-Landscape.jpg");
  forest = loadImage('data/dark-forest.jpg');
}


function setup() {
  createCanvas(800, 800);
  //background(0);
  image(bird, width / 2 - bird.width / 2, height / 2 - bird.height / 2);
  //image(bird, 0, 0, 10, 10);
}

function draw() {
  // calling the image again here so I can get a nice
  // back and forth effect with the skull
  background(255);
  image(bird, width / 2 - bird.width / 2, height / 2 - bird.height / 2);


  //when I click on the bird
  // making hot zones
  if ((mouseX > 306) && (mouseX < 496) && (mouseY > 272) && (mouseY < 515)) {
    //and if i click
    if (mouseIsPressed) {
      background(255);
      // another image appears
      image(skull, width / 2 - skull.width / 2, height / 2 - skull.height / 2);
      count++; // I only increase if the mouse is pressed, as well as in the zone
      //console.log(count);
    }
  }
  if (count >= 50) {
    background(deadscape, 0, 0);
      fcount++; // going to increase without user input
  }
  console.log(fcount);
  if (fcount > 200) {
    background(forest, 0, 0);

    if (cueBirds === true) {
      console.log('cue birds');
      birds(); //function
      cueBirds = false; // I turn it off, because I only want to cue the bird creation once
    }
  }
  // If I've made the birds, lets call their methods
  // this is the action I'd want to repeat
  if (cueBirds === false) {
    for (var i = 0; i < birdz.length; i++) {
      birdz[i].run();
      if (birdz[i].isDead()) { // check to see if we are dead
      // if we are, take us out of the array
      birdz.splice(i, 1); // at this indice point, remove one indice
      }
    }

    //birds(); // used here for testing. I don't want to
    //continually make new birds which would happen if I put
    // the function call in the draw loop. Instead, I just want to call the methods
  }

}

function birds() {
  //background(120);
  for (var i = 0; i < 15; i++) {
    var b = new Particle(createVector(0, random(0, height)));
    birdz.push(b);
  }
  /*
  for (var i = 0; i < birdz.length; i++) {
    birdz[i].run();
  }
  */
  console.log("we've made some birds");
}


function mousePressed() {
  //console.log("X is: " + mouseX);
  //console.log("Y is: " + mouseY);
}