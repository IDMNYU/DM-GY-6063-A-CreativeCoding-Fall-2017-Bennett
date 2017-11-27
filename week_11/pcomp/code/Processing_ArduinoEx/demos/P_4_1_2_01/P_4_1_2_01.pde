// P_4_1_2_01.pde
// 
// Generative Gestaltung, ISBN: 978-3-87439-759-9
// First Edition, Hermann Schmidt, Mainz, 2009
// Hartmut Bohnacker, Benedikt Gross, Julia Laub, Claudius Lazzeroni
// Copyright 2009 Hartmut Bohnacker, Benedikt Gross, Julia Laub, Claudius Lazzeroni
//
// http://www.generative-gestaltung.de
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * image feedback process.
 * 
 * KEYS
 * del, backspace      : clear screen
 * s                   : save png
 */
import processing.serial.*; 
import java.util.Calendar;

Serial port;  // Create object from Serial class
int val;      // Data received from the serial port 


PImage img;

void setup() {
  size(1024, 780);
  background(255);
  img = loadImage("pic.png");
  image(img, 0, 100);

  String portName = Serial.list()[2]; // replace this number with the port you are using
  port = new Serial(this, portName, 9600);
}

void draw() {
  if (0 < port.available()) {  // If data is available to read,
    val = port.read();            // read it and store it in val
  } 

  println(val);
  int x1 = (int) random(0, width);
  int y1 = 0;

  int x2 = round(x1 + random(-7, 7));
  int y2 = round(random(-5, 5));

  int w = (int) random(35, 50);
  int h = height;

  if (val < 80) {
    copy(x1, y1, w, h, x2, y2, w, h);
  }
}

void keyReleased() {
  if (keyCode == DELETE || keyCode == BACKSPACE) {
    background(255);
    image(img, 0, 100);
  }
  if (key=='s' || key=='S') saveFrame(timestamp()+"_##.png");
}

// timestamp
String timestamp() {
  Calendar now = Calendar.getInstance();
  return String.format("%1$ty%1$tm%1$td_%1$tH%1$tM%1$tS", now);
}