int digitalSwitchPin = 3;
int buttonState = 0;

void setup() {
 // initialize the pushbutton pin as an input:
  pinMode(digitalSwitchPin, INPUT);
  Serial.begin(9600); // initialize serial communications
}

void loop() {
 // read the state of the pushbutton value:
  buttonState = digitalRead(digitalSwitchPin);
  if (buttonState == HIGH) {
    Serial.write(1);
  } else {
    Serial.write(0);
  }

}
