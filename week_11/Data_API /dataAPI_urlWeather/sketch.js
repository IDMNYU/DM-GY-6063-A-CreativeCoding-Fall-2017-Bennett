var weatherData;
var temp;
var font;
var current;

function preload() {
  // try it with test data first before moving on to the API
  //weatherData = loadJSON("data/test.json");

  // this initial query is successful, but the temperature is quite off
  // looking further, the default temperature is in Kelvin
  //var url = 'http://api.openweathermap.org/data/2.5/weather?zip=11201,us&APPID=3e70b996f07e3fab50b02acbcd0576bc';
  
  // below then passes the imperial format to our query so that we get Farenheit temperatures back
  var url = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=11201,us&APPID=aa5fdf4f32680b891d02b22a82a84e3c';
  weatherData = loadJSON(url);
  font = loadFont('data/font.otf');
  
}

function setup() {
  createCanvas(500, 500);
  background(0);
  
  //temp = getTemp(weatherData);
  temp = weatherData.main.temp;

  current = getCurrentConditions(weatherData);
  //current = weatherData.weather[0].description;
  console.log(temp);
}


function draw() {
  noStroke();
  fill(200, 53, 148);
  ellipse(temp, height / 2, 50, 50);
  
  fill(255);
  textFont(font);
  textSize(36);
  text(current, 10, 50);
  
  text(temp, temp, height/2 - 80);
  
}

function getCurrentConditions(data){
  var weather = data.weather;
  var info = weather[0];
  var currently = info.description;
  //console.log(currently);
  return currently;
}




