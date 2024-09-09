let x1 = 100;     // x position of the ball
let y1 = 0;       // y position of the ball
let x1Speed = 5;  // speed in X direction
let y1Speed = 7; // speed in Y direction
let d1 = 40;      // diameter of the ball
let color1;       // color of the first ball

let x2 = 100;     // x position of the ball
let y2 = 0;       // y position of the ball
let x2Speed = 3;  // speed in X direction
let y2Speed = 7; // speed in Y direction
let d2 = 30;      // diameter of the ball
let color2;       // color of the second ball

let bgcolor;      // Background color

function setup() {
  createCanvas(400, 400);

  // Set random colors for both ellipses
  color1 = color(random(225), random(225), random(225));
  color2 = color(random(225), random(225), random(225));

  // Set inital color to black
  background(0,0,0)
 }

 function draw() {
  // Set inital color to black
  background(0,0,0)
  
 
 
  // if x hits the right side or the left side of the canvas,
  // switch directions and change color...
  if (x1 > width || x1 < 0) {
    x1Speed = x1Speed * -1;  
    d1 += 3;      // Increase diameter by 3
    color1 = color(random(225), random(225), random(225));      // change color
  }
  x1 = x1 + x1Speed; // adding a negative xSpeed *decreases* x, right?
  
  // same as above, but for the top and bottom of the canvas
  if (y1 > width || y1 < 0) {
    y1Speed = y1Speed * -1; 
    d1 -= 5;      // Decrease diameter by 5
    color1 = color(random(225), random(225), random(225));      // change color 
  }
  y1 = y1 + y1Speed;

  // set color to blue
  fill(color1)
  ellipse(x1, y1, d1);



  // second shape
  // if x hits the right side or the left side of the canvas,
  // switch directions...
  if (x2 > width || x2 < 0) {
    x2Speed = x2Speed * -1; 
    d2 -= 3;      // Decrease diameter by 3 
    color2 = color(random(225), random(225), random(225));
  }
  x2 = x2 + x2Speed; // adding a negative xSpeed *decreases* x, right?
  
  // same as above, but for the top and bottom of the canvas
  if (y2 > width || y2 < 0) {
    y2Speed = y2Speed * -1; 
    d2 += 5;      // Increase diamter by 5 
    color2 = color(random(225), random(225), random(225));
  }
  y2 = y2 + y2Speed;

  // set color to pink 
  fill(color2)
  ellipse(x1,x2,d2);
}

function keyPressed() {
  if (key === '0') {
    //Increase the speed of both ellipses
    x1Speed *= 1.2;
    x2Speed *= 1.2;
    y1Speed *= 1.2;
    y2Speed *= 1.2;
  } else if (key === '9') {
    // Decrease the speed of both ellipses
    x1Speed *= 0.8; //decrease speed by 20%
    x2Speed *= 0.8; //decrease speed by 20%
    y1Speed *= 0.8; //decrease speed by 20%
    y2Speed *= 0.8; //decrease speed by 20%
  }
}
