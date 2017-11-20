function Bird(){

	this.y = height/2;
	this.x = 64;

	// add forces for gravity, lift (user input), velocity
	// use scalar values (ie a variable with one value in it)
	this.gravity = 0.6;  // not so strong
  	this.lift = -15; // negative added so goes down
  	this.velocity = 0;
  


	this.show = function(){
		fill(255);
		ellipse(this.x, this.y, 32, 32);
	}


	this.up = function (){
		// add the user input lift to increase velocity (fighting against gravity)
		this.velocity += this.lift;
		
	}


	this.update = function(){
		// add gravity to velocity to push bird down
		this.velocity += this.gravity;
		this.velocity *= 0.9;
		// multiply gravity by a value to tweak it, then add it to velocity's current value;
		this.y += this.velocity;
		//this.velocity += this.gravity * 10;
  
  
		// add velocity to y 
 		//this.y += this.velocity;  // pushing bird down

		// are we at the bottom?
		if(this.y > height){
			// stay on screen
      		this.y = height;
      		this.velocity = 0;
    	}
    
    	// also for the top
    	if(this.y < 0){
    		// stay on screen
     	 	this.y = 0;
     	 	this.velocity = 0;
    	}
	}

}

