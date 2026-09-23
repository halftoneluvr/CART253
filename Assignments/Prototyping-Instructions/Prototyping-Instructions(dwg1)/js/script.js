/**
 * Prototyping Assignment 1
 * Owen Dobson
 * 
 * Attempting to create a sort of weaving effect or tartan. 
 * Using transparency and layering. 
 * Leverage the strengths of the software.
 */

"use strict";

/**
 * Creates canvas to draw upon
*/
function setup() {
    createCanvas(225, 225);
}

/**
 * Drawing the elements for the  weaving effect.
 * Uses the brights and playing w/ transparency.
*/
function draw() {
    background('white');

    //Draws the Green elements 
    drawGreen();
    
    //Draws the Vermillion elements 
    drawVermillion();

    //Draws the Blue elements
    drawBlue();

    //Draws the Pink elements
    drawPink();

    //draws the Chartreuse elements
    drawChartreuse();
}

// Includes all of the Pink drawn elements 
function drawPink(){
    push();
    fill(255, 0, 110, 150);
    noStroke();
    rect(175, 0, 15, 225);
    rect(155, 0, 15, 225);
    rect(0, 175, 225, 15);
    rect(0, 155, 225, 15);

    rect(0, 9, 225, 15);
    rect(0, 0, 225, 4);
    pop();
}

// Includes all of the Blue drawn elements 
function drawBlue(){
    push();
    fill(156, 219, 255, 150);
    noStroke();
     rect(190, 0, 5, 225);
    rect(150, 0, 5, 225);
    rect(0, 190, 225, 5);
    rect(0, 150, 225, 5);

    rect(0, 24, 225, 5);
    pop();
}

// Includes all of the Green drawn elements 
function drawGreen(){
    // Initial section
    push();
    fill(71, 92, 31, 150);
    noStroke();
    rect(195, 0, 20, 225);
    rect(130, 0, 20, 225);
    rect(0, 195, 225, 20);
    rect(0, 130, 225, 20);

    // Built upon and filled in blank space 
    rect(0, 0, 20, 225);

    rect(117, 0, 3, 225);
    rect(29, 0, 3, 225);

    rect(0, 29, 225, 20);
    pop();
}

// Draws Vermillion elements 
function drawVermillion(){
    push();
    fill(255, 38, 5, 150);
    noStroke();
    rect(0, 82, 225, 20);
    rect(57, 0, 35, 225);
    pop();
}

// Draws all of the chartreuse elements 
function drawChartreuse(){
    push();
    fill(213, 255, 5, 150);
    noStroke();
    rect(209, 0, 3, 225);
    rect(133, 0, 3, 225);
    rect(0, 198, 225, 3);
    rect(0, 133, 225, 3);

    rect(14, 0, 3, 225);

    rect(0, 32, 225, 3);

    fill(213, 255, 5, 50);
    noStroke();
    rect(0, 52, 225, 30);
    rect(92, 0, 25, 225);
    rect(32, 0, 25, 225)

    rect(0, 218, 225, 25);
    rect(0, 102, 225, 25);
    pop();
}
