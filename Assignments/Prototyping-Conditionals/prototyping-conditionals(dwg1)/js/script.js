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

function draw() {
    //draws background 
    background(228, 235, 167); 
    // draws base eyes
    drawRegEyes();
    
    //draws eyes in crying postion
    drawCryingEyes();

    //makes tears
    drawTears();

}

//Draws Eyes
function drawRegEyes(){
push();
//whites of the eyes or sclera
stroke(56, 43, 43)
strokeWeight(0.25);
fill(250, 250, 250);
ellipse(80, 125, 25);
ellipse(180, 125, 25);

//blacks of the eyes or cornea lol
fill(1);
ellipse(80, 125, 20);
ellipse(180, 125, 20);

//lids
angleMode(DEGREES);
stroke(56, 43, 43)
strokeWeight(0.5);
fill(255, 237, 237);
arc(80, 125, 50, 25, 180, 0);
arc(180, 125, 50, 25, 180, 0);

//mouth
fill(56, 43, 43)
noStroke();
ellipse(165, 190, 5);

pop();
}

//makes crying eyes
function drawCryingEyes(){
    push();
    if (mouseIsPressed) {
        angleMode(DEGREES);
        stroke(56, 43, 43)
        strokeWeight(0.5);
        fill(255, 237, 237);
        arc(80, 125, 50, 25/2, 360, 180);
        arc(180, 125, 50, 25/2, 360, 180);
    }
    pop();
}

//makes tears
function drawTears(){

}
