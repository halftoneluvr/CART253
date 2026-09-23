/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * Creates Canvas 
*/

let ellipseSize = 150;
let rectSize = 10;
function setup() {
    createCanvas(400, 400);
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0,0,0);

    fill(255, 0, 0);
    ellipse(250, 250, ellipseSize);
    fill(0, 0, 255);
    rect(25, 25, rectSize);
    ellipseSize = ellipseSize - 1; 
    rectSize += 1;
}