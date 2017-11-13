
// a font:
var thefont; 

// a phrase i want to typeset.  i've escaped the quotes:
var phrase = 'Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, \'and what is the use of a book,\' thought Alice \'without pictures or conversations?\'';

var phrasearray = phrase.split(' ');

// fonts are like images... they need to be loaded
// asychronously in the preload() function:
function preload()
{

  thefont = loadFont('./data/font.otf');

}


function setup() {
  createCanvas(800, 600);
  background(255);
  noStroke();
  fill(0, 0, 0);
  
  textFont(thefont, 36);
}

function draw() {
  background(255);
  var margin = 20;
  var thex = margin; // start at the left
  var they = 90; // start one line down

  for(i in phrasearray) // (for i = 0;i<phrasearray.length;i++)
  {
    if(phrasearray[i]=='Alice')
    {
      textSize(90);
    }
    else
    {
      textSize(36);
    }
    //fill(random(255), random(255), random(255));
    fill(0);
    var tw = textWidth(phrasearray[i]+' ');
    
    if(thex+tw>width-margin) // if we are close to the edge
    {
      thex=margin;
      they+=36;
    }
    text(phrasearray[i], thex, they);
    thex+=tw;
  }
  
}