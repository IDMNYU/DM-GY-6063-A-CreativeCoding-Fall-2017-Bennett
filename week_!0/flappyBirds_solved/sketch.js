/*
Dan Shiffman did this as a coding challenge: https://www.youtube.com/watch?v=cXgA1d_E-jY

In this sketch, we'll build a flappy bird game.

A bird will be controlled by the spacebar to fly.
The scenary will keep moving and the bird has to
avoid it.

The focus here will be OOP and forces.  We will only be 
using a force in one direction, to start with. The next 
step would then re-structure the code to utilize vectors
to have the forces operation in 2 dimensions.

*/


var bird;

var bars = [];


function setup(){
	createCanvas(400, 600);

	// make a new bird object:
	bird = new Bird();

	// push a new bar object onto the end of the block array
	bars.push(new Bar());

}


function draw(){
	background(0);

	//cycle through the array of bars:
	//for(var i = 0; i < bars.length; i++){
	for(var i = bars.length - 1; i >= 0; i--){

		// run each object's method's
		bars[i].show();
		bars[i].update();

		// did we hit a bird?
		if(bars[i].hits(bird)){
			console.log("we hit a bird!");
		}
		// is this particular bar off screen?
		if(bars[i].offscreen()){
		//cut this indice out of the array. need the ref point and how many
		// to cut out:
			bars.splice(i, 1);

		}
	}

	//run the birds method:
	bird.update();
	bird.show();

	// every so often:
	if(frameCount % 100 == 0){
		//push a new bar object onto the array
		bars.push(new Bar());
	}

}

// external listener function. always listening:
function keyTyped(){
	if( key == ' '){
		console.log("space");
		//run the bird's method to go up to execute:
		bird.up();
	}
}