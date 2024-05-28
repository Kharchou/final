let angle = 0;
let radius = 100;
let textString = "Your Title Here";
let fontSize = 32;

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("spinningTitleCanvas");
  textAlign(CENTER, CENTER);
  textSize(fontSize);
}

function draw() {
  background(220);

  translate(width / 2, height / 2);

  let x = cos(angle) * radius;
  let y = sin(angle) * radius;

  push();
  translate(x, y);
  rotate(angle + HALF_PI); 
  text(textString, 0, 0);
  pop();

  angle += 0.01;
}
