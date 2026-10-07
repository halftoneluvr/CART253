/**
 * Protoyping Conditionals Drawing 2
 * Owen Dobson
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
createCanvas(225, 225);
background(245);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
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

}

function drawPattern(){
    
}