/**
 * Prototyping Assignment 1
 * Owen Dobson
 * 
 * Attempting a representational piece, drawing some branzino. 
 * Going to think about colour and little details found in the 
 * shapes available in the p5.js library. 
 */

"use strict";

/**
 * Creates canvas to draw upon
*/
function setup() {
    createCanvas(225, 225);
}

/**
 * I'm drawing some branzino (yes, the fish!) on a plate w/ its accoutrement
*/
function draw() {
    background(191, 213, 222);

    drawPlate();

    drawFish();
}

function drawFish(){
   
    // base of the body - shape
    fill(150);
    noStroke();
    ellipse(113, 110, 75, 40);
    triangle(113, 90, 37, 110, 75, 110);  
    triangle(37, 110, 50, 100, 90, 113);
    triangle(113, 110, 50, 100, 90, 95);
    triangle(37, 110, 50, 100, 90, 113);
    triangle(113, 90, 50, 100, 75, 93);
    triangle(113, 92, 153, 100, 150, 93);

    //bottom front
    triangle(39, 114, 45, 108, 100, 128);
    triangle(45, 114, 45, 108, 100, 120);

    //tail
    fill(150);
    noStroke();
    triangle(190, 103, 170, 111, 175, 102);
    rect(113, 105, 65, 8);
    triangle(175, 105, 118, 90, 130, 110);
    triangle(170, 110, 145, 110, 175, 102);
    triangle(192, 113, 170, 114, 175, 102);
    triangle(118, 130, 178, 112, 113, 113);

    push();
    fill(207, 207, 198);
    noStroke();
    ellipse(52, 105, 3);
    fill(242, 242, 233);
    noStroke();
    ellipse(52, 105, 2);
    pop();

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