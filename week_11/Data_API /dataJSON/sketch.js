/**** USE FIREFOX to see these in the browser ****/

var films = [];
var filmData; //

function preload() {
  //film = loadJSON('film.json');  // this is a callback function

  filmData = loadJSON("films.json");
  console.log("ok");
}

function setup() {
  //film = loadJSON('film.json', getInfo());  // this is a callback function
  //getInfo();

  createCanvas(480, 120);
  for (var i = 0; i < filmData.f.length; i++) {
    var o = filmData.f[i];
    films[i] = new Film(o);
  }
  noStroke();
}


function draw() {
  console.log(films.length);
  //noLoop();
  ///*
  background(0);
  for (var i = 0; i < films.length; i++) {
    var x = i * 32 + 32;
    films[i].display(x, 105);
  }
  //*/
}

/*
function getInfo() {
  var title = film.title;
  var dir = film.director;
  var year = film.year;
  var rating = film.rating;
  console.log(title + " by " + dir + ", " + year + ". Rating: " + rating);


}
*/
