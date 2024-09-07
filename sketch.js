let x1 = 100;     // x position of the ball
let y1 = 0;       // y position of the ball
let x1Speed = 5;  // speed in X direction
let y1Speed = 7; // speed in Y direction
let d1 = 40;      // diameter of the ball

let x2 = 100;     // x position of the ball
let y2 = 0;       // y position of the ball
let x2Speed = 3;  // speed in X direction
let y2Speed = 7; // speed in Y direction
let d2 = 30;      // diameter of the ball

function setup() {
  createCanvas(400, 400);
}

function draw() {

  //purple background
  background(128,0,128); 

 
  // if x hits the right side or the left side of the canvas,
  // switch directions...
  if (x1 > width || x1 < 0) {
    x1Speed = x1Speed * -1;  
  }
  x1 = x1 + x1Speed; // adding a negative xSpeed *decreases* x, right?
  
  // same as above, but for the top and bottom of the canvas
  if (y1 > width || y1 < 0) {
    y1Speed = y1Speed * -1;  
  }
  y1 = y1 + y1Speed;

  // set color to blue
  fill("blue")
  ellipse(x1, y1, d1);



  // second shape
  // if x hits the right side or the left side of the canvas,
  // switch directions...
  if (x2 > width || x2 < 0) {
    x2Speed = x2Speed * -1;  
  }
  x2 = x2 + x2Speed; // adding a negative xSpeed *decreases* x, right?
  
  // same as above, but for the top and bottom of the canvas
  if (y2 > width || y2 < 0) {
    y2Speed = y2Speed * -1;  
  }
  y2 = y2 + y2Speed;

  // set color to pink 
  fill("pink")
  ellipse(x1,x2,d2);
}