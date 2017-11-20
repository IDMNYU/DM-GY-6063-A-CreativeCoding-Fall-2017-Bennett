function Bar (){

	// these variables will get assigned to each block

	this.top = random(height/2);
	this.bottom = random(height/2);
	this.x = width;
	this.w = 20;
	this.speed = 2;

	// boolean
	this.highlight = false;


	this.show = function(){
		fill(255);

		if(this.highlight){  //if this is true, 
			// our rect will be red instead of white
			fill(255, 0, 0);
		}

		rect(this.x, 0, this.w, this.top);
		rect(this.x, height-this.bottom, this.w, this.bottom);

	} // end show

	this.update = function(){
		this.x -= this.speed;
	}


	this.offscreen = function(){
		if(this.x < -this.w) {
			return true;  
		}
		else {
			return false;
		}
	}

	this.hits = function(bird) {
	//did we hit the bird?
	if(bird.y < this.top || bird.y > height - this.bottom){
	// if bird's y is less than the top OR if bird.y is greater than the height - bottom
		if(bird.x > this.x && bird.x < this.x + this.w){
		// if bird's x is greater than our x AND if bird's x is less than our x + width
			this.highlight = true;
			return true;
			} // bird.x
		} // bird.y
	this.highlight = false;
	return false;
	} // hits

}