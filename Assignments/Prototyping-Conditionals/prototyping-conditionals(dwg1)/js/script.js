/**
 * Protoyping Conditionals Drawing 1
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
background(228, 235, 167); 
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    drawEyes();
}

//Draws Eyes
function drawEyes(){
push();
noStroke();
//whites of the eyes or sclera
fill(255);
ellipse(80, 125, 25);
ellipse(180, 125, 25);

//lids
angleMode(DEGREES);
stroke(3)
arc(80, 125, 50, 25, 180, 0);
arc(180, 125, 50, 25, 180, 0);
pop();
}