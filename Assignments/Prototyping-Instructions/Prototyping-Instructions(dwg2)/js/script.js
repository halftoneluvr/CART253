/**
 * Prototyping Assignemnt Drawing 2
 * Owen Dobson 
 * 
 * Effectively a pagan-esque Polish inspired design 
 * over a very saturated gradient of blue to green w/ 
 * a cheeky cyan center.
 */

"use strict";

/**
 * Creates canvas for drawing w/ gradient from blue to green 
*/
function setup() {
  createCanvas(223, 223);

  // Use HSB color with values in the range 0-100.
  colorMode(HSB, 100);

  for (let x = 0; x < 223; x += 1) {
    for (let y = 0; y < 223; y += 1) {
      let hueValue = map(x, 0, 223, 67, 33);
      stroke(hueValue, 100, 100);
      point(x, y);
    }
  }
}

/**
 * Drawing on Pagan-esque design in white 
*/
function draw() {

    // Top-Left
    push();
    drawPattern();
    pop();

    // Top-Right
    push();
    translate(width, 0);
    scale(-1, 1);
    drawPattern();
    pop();

    // Bottom-Left
    push();
    translate(0, height);
    scale(1, -1);
    drawPattern();
    pop();

    // Bottom-Right
    push();
    translate(width, height);
    scale(-1, -1);
    drawPattern();
    pop();

    noLoop();
}

// defining functions
function drawPattern() {
    
    //Line Convention
    stroke('white');
    strokeWeight(4);
    strokeCap(PROJECT);

    line(10, 10, 10, 35);
    line(10, 10, 35, 10);
    line(35, 10, 35, 25);
    line(35, 25, 22, 25);
    line(22, 25, 22, 18);
}