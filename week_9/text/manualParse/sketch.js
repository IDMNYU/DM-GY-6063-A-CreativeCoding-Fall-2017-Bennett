
var name = "Mary";
var runningtime;
var poster;
var lines;

function preload(){
  lines = loadStrings('data/poppins.html');
}

function setup() {
  createCanvas(300, 350);
  loadData();
  
}

function draw() {
  background(255);
  image(poster, 10, 10, 164, 250);
  fill(0);
  text(name, 10, 300);
  text(runningtime, 10, 320);
  
}

function loadData() {
  
  var html = join(lines, " "); // hmmm
  var start = "<time itemprop=\"duration\" datetime=\"PT139M\">";
  var end = "</time>";
  runningtime = giveMeTextBetween(html, start, end).trim();

  start = "<link rel='image_src' href=\"";
  end = "\">";
  var imgUrl = giveMeTextBetween(html, start, end);
  poster = loadImage(imgUrl);
}


function giveMeTextBetween(s, before, after){
  var found = "";
  var start = s.indexOf(before);
  if(start == -1){
    return ""; // if start isn't in there, return an empty space
  }
  start += before.length;  //move to the end of the beginning tag
  var end = s.indexOf(after, start); //find the first instance of "after" after the start instance
  
  if(end == -1){
    return "";
  }
  return s.substring(start, end);
}








