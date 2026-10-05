/**
 * Protoyping Conditionals Drawing 1
 * Owen Dobson
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let tears1= {
    x: 80,
    y: 130
}

let tears2= {
    x: 180,
    y: 130
}

//sets up the canvas lol 
function setup() {
createCanvas(225, 225);
background(228, 235, 167); 
}

//calls functions to draw base and execute action! 
function draw() {
    //draws background 
    background(228, 235, 167); 
    // draws base eyes
    drawRegEyes();
    
    //makes tears
    drawTears();

    //draws eyes in crying postion
    drawCryingEyes();

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
push();
    if (mouseIsPressed) {
        angleMode(DEGREES);
        noStroke(); 
        fill(255);
        ellipse(tears1.x, tears1.y, 10);
        ellipse(tears2.x, tears2.y, 10); 
    }
pop();
}
