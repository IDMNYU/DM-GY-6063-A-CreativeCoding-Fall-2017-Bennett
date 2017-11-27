/**
 * Loading JSON Data
 * by Daniel Shiffman.  
 * 
 * to retrieve JSON data via URL
 */

var json;

// The URL for the JSON data
var apiKey = "fb2f82dab405489bbacac39a5898b929";
var url = "http://api.nytimes.com/svc/search/v2/articlesearch.json";
var query = "?q=pumpkins&sort=newest";

function preload() {
  json = loadJSON(url+query+"&api-key="+apiKey);
}

function setup() {
  createCanvas(200, 200);

  // Load the JSON document
  var headline = json.response.docs[0].headline.main;
  background(255);
  fill(0);
  text(headline, 10, 10, 180, 190);
}
