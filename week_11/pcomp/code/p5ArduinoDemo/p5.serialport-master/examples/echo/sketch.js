var serial; // variable to hold an instance of the serialport library
var portName = '/dev/cu.usbmodem14131'; // fill in your serial port name here
var inData; // for incoming serial data

function setup() {
  createCanvas(400, 300);
  serial = new p5.SerialPort(); // make a new instance of the serialport library
  serial.on('data', serialEvent); // callback for when new data arrives
  serial.on('error', serialError); // callback for errors

  serial.open(portName); // open a serial port
  serial.clear();
}

function draw() {
  // black background, white text:
  background(0);
  fill(255);
  // display the incoming serial data as a string:
  text("incoming value: " + inData, 30, 30);
}

function keyTyped() {
    var outByte = key;
    console.log("Sending " + outByte);
    //serial.write(Number(outByte)); // Send as byte value
    serial.write(outByte); // Send as a string/char/ascii value
}

function serialEvent() {
  // read a byte from the serial port:
  var inByte = serial.read();
  println("inByte: " + inByte);
  inData = inByte;
}

function serialError(err) {
  println('Something went wrong with the serial port. ' + err);
}