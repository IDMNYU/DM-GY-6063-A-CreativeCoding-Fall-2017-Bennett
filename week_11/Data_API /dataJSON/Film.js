function Film(f) {
  this.title = f.title;
  this.director = f.director;
  this.year = f.year;
  this.rating = f.rating;
  
  this.display = function(x, y) {
    var ratingGray = map(this.rating, 6.5, 9.1, 102, 255);
    push();
    translate(x, y);
    rotate(-QUARTER_PI);
    fill(ratingGray);
    text(this.title, 0, 0);
    pop();
  };
}
