/**
 * Drawing Exercise
 * Owen Dobson
 * 
 * Sort of vinyl-else drawing... physical media is back, back again!
 */

"use strict";

/**
 *Creates a square canvas
*/
function setup() {
    createCanvas(640,640);
}


/**
 * Draws the record 
*/
function draw() {
    // Grey background
    background(150);

    // Main part of record 
    push();
    fill(0, 255, 0);
    stroke(255);
    ellipse(320, 320, 480);
    pop();

    // Label on record 
    push();
    fill("white");
    noStroke();
    ellipse(320, 320, 160, 160);
    pop();

    // Hole on record 
    push();
    fill("#000000");
    ellipse(320, 320, 20, 20);
    pop();
}