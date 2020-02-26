//variables
let positionX; 
let positionY;
let speedX;
let speedY;
let positionX2;
let cat;
let toggle;
//
function preload () {
	cat = loadImage ('./pippin.png')
}
// everything here is loaded once only
function setup() {
  // put setup code here
//canvas
  createCanvas(1500,700);
  background (255);
// "canvas"
  noStroke ();
  fill (243, 28, 111);
  rect (0, 0, 600, 600);
 //
  noCursor();
  slider = createSlider(0, 700, 300, 0);
  slider.position(300, 300);
  slider.style('width', '100px');
// define variables here
  positionX = 50;
  positionY = 100;
  positionX2 = 30;
  speedX = 2;
  speedY = 5;
  toggle = true;
}

function draw() {
  // put drawing code here
 //pippin 
 	let val = slider.value();
  image (cat, 0,0, 100, val);
 //box 
  strokeWeight (5);
  strokeJoin(ROUND);
  stroke (128, 23, 38);
  fill (12, 230, 62);
  rect (20, 20, 300, 300);

//slidey boi
  fill (63, 138, 251);
  noStroke ();
  rect ( positionX2, 40, 100, 50);
  if (focused) {
  if (positionX2<=499) {positionX2 = positionX2 + 1;
  }
}
// bouncy boi
  fill (159, 33, 4);
  circle (positionX, positionY, 50);
//bounce parameters
  positionX = positionX + speedX
  positionY = positionY + speedY

  if (positionX >= 295 || positionX <= 45) {
  	speedX = speedX * -1;
  }
  if (positionY >= 295 || positionY <= 45) {
  	speedY = speedY * -1
  }

//flicky boi
 if ( toggle=== true) { fill ( 154, 211, 14)}
 	else { fill (211, 33, 112)}
  textSize (50);
 text ( 'hello world', 300,300);

fill (224, 255, 0)
quad (30, 30, 40, 50, 100, 30, 300, 100)
let x1 = map(mouseX, 0, width, 60, 300);
let y1 = map(mouseY, 0, width, 75, 600);
fill (191, 53, 228);
ellipse(x1, y1, 80, 50);

if (focused) {
	
 	fill (random(255),random(255),random(255))
 	ellipse(mouseX, mouseY, 200, 10)}

}


function keyPressed () {
	toggle = !toggle;
}

function mousePressed() { 
	
	for (let i = 50; i < 550; i+= 30) {
		for (let j = 50; j < 550; j+=20) {
			if (toggle === true) {
				fill (random(255),random(255),random(255))}
				else {fill(500)}
			
		let r = random(60);
		circle (i, j, r);
		}
		
}
  
}