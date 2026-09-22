/**
 * Prototyping Assignemnt Drawing 2
 * Owen Dobson 
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * Creates canvas for drawing
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
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

}