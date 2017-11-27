import processing.serial.*; 

Serial port;  // Create object from Serial class
int val;      // Data received from the serial port 

void setup() { 
  size(200, 200); 
  noStroke(); 
  frameRate(10);  // Run 10 frames per second
  // Open the port that the board is connected to and use the same speed (9600 bps) 
  String portName = Serial.list()[2]; // replace this number with the port you are using
  port = new Serial(this, portName, 9600);
} 

void draw() { 
  if (0 < port.available()) {  // If data is available to read,
    val = port.read();            // read it and store it in val
  } 
  background(204);                // Clear background
  fill(val);                      // Set fill color with the value read
  rect(50, 50, 100, 100);         // Draw square
} 