/**
 * The Pink Sink
 * Owen Dobson
 * 
 * Sitting about in a power pink bathroom, the viewer is faced with the blankless of the sink (?). 
 * They sit and stare its pinkness, and wonder why the AI in VS Code keeps trying to end my sentences for me!!!
 * I have a mind, and it is pink too... the code written to "complete" me has a pseudo-mind, but it is not pink. 
 * I prefer my inefficient pink mind. 
 * 
 * The program is non-interactive so as to force the viewer to do some real work. ARg! Stop it VS Code!!! 
 */

"use strict";

/**
 * Creates canvas for the piece. 
 */
function setup() {
    // Create the canvas at a standard resolution
    createCanvas(640, 480);
}

/**
 * Draws my beautiful sink in the sea of pink. 
 */
function draw() {
    // the pink 
    background(255, 240, 255);
    // the sink
    ellipse(200, 280, 240, 320);
}