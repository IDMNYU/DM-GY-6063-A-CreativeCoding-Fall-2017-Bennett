/*
This is a sound file player. 
 */


import processing.sound.*;
import processing.serial.*; 

Serial port;  // Create object from Serial class
int val;      // Data received from the serial port 

SoundFile soundfile;
SoundFile soundfile2;

void setup() {
  size(640, 360);
  background(255);

  String portName = Serial.list()[2]; // replace this number with the port you are using
  port = new Serial(this, portName, 9600);

  //Load a soundfile
  soundfile = new SoundFile(this, "vibraphon.aiff");
  
  soundfile2 = new SoundFile(this, "R09_0003.MP3");

  // These methods return useful infos about the file
  println("SFSampleRate= " + soundfile.sampleRate() + " Hz");
  println("SFSamples= " + soundfile.frames() + " samples");
  println("SFDuration= " + soundfile.duration() + " seconds");

  // Play the file in a loop
  //soundfile.loop();
  soundfile2.play();
}      


void draw() {
  // Map mouseX from 0.25 to 4.0 for playback rate. 1 equals original playback 
  // speed 2 is an octave up 0.5 is an octave down.
  soundfile.rate(map(mouseX, 0, width, 0.25, 4.0)); 

  // Map mouseY from 0.2 to 1.0 for amplitude  
  soundfile.amp(map(mouseY, 0, width, 0.2, 1.0)); 

  // Map mouseY from -1.0 to 1.0 for left to right 
  soundfile.pan(map(mouseY, 0, width, -1.0, 1.0));
  
   
   
   if (0 < port.available()) {  // If data is available to read,
    val = port.read();            // read it and store it in val
  } 
  
  println(val);
  float dB = map(val, 52, 127, -3.0, 3.0);
  soundfile2.amp(dB);
}