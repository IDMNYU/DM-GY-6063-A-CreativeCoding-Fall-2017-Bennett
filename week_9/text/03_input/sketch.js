var input = "";

var saved = "";

function setup() {
  createCanvas(480, 470);
  textFont("Arial", 18);
}

function draw() {
  background(255);
  var indent = 25;
  
  fill(0);
  text("Click here and type something. \nHit Enter to save", indent, 50);
  text("Input: " + input, indent, 200);
  text("Saved text: " + saved, indent, 250);
}

function keyPressed(){
  // if I hit the return key, save the string and clear
  if(keyCode == 13){ // ASCII  key code for the return key
    saved = input;
    input = "";
  } else {
    input = input + key;
  }
}





