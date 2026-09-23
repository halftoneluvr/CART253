/**
 * Prototyping Assignment 1
 * Owen Dobson
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * Creates canvas to draw upon
*/
function setup() {
    createCanvas(225, 225);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(191, 213, 222);

    drawPlate();
}

function drawPlate(){
    fill(150);
    noStroke();
    ellipse(15, 113, 20);
    ellipse(210, 113, 20);
    ellipse(113, 175, 20);
    ellipse(113, 50, 20);
    
    ellipse(123, 175, 12);
    ellipse(103, 50, 12);
    ellipse(123, 50, 12);
    ellipse(103, 175, 12);
    
    ellipse(113, 113, 200, 120);
    fill(170);
    ellipse(113, 113, 190, 110);
}