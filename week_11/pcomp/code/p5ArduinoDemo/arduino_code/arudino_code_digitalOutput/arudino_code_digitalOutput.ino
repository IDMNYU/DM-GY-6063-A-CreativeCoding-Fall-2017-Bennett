int ledPin = 3;

void setup() {
  Serial.begin(9600);           // initialize serial communications
  pinMode(ledPin, OUTPUT);
}

void loop() {
  if (Serial.available() > 0) { // if there's serial data available
    int inByte = Serial.read();   // read it
    Serial.write(inByte);         // send it back out as raw binary data
    if (inByte == 1) {
      digitalWrite(ledPin, HIGH);
    } else {
      digitalWrite(ledPin, LOW);
    }
  }
}
