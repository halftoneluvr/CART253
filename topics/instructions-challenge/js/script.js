/**
 * Instructions Challenge
 * Owen Dobson
 * 
 * Objective: Draw a Landscape 
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(1080, 566);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(177, 245, 252);
    
    // Grey elements
    arrayTriangles();
    
    // People
    createPeople();
}

function arrayTriangles(){
     fill("grey");
    noStroke();
    rect(0, 540, 1080, 566);
    rect(0, 0, 1080, 26);
    triangle(1080, 566, 1080, 0, 650, 566);
    fill(212, 212, 212);
    noStroke();
    triangle(1080, 566, 1080, 0, 700, 566);
    fill(192);
    noStroke();
    triangle(1080, 566, 1080, 0, 750, 566);
    fill(170);
    noStroke();
    triangle(1080, 566, 1080, 0, 800, 566);
    fill(222);
    noStroke();
    triangle(1080, 566, 1080, 0, 850, 566);
    fill(160);
    noStroke();
    triangle(1080, 566, 1080, 0, 900, 566);
    fill(288);
    noStroke();
    triangle(1080, 566, 1080, 0, 950, 566);
    fill(108);
    noStroke();
    triangle(1080, 566, 1080, 0, 1000, 566);
    fill(255);
    noStroke();
    triangle(1080, 566, 1080, 0, 1050, 566);
}

function createPeople(){
    fill(79, 44, 2);
    ellipse(10, 520, 10);
    triangle(10, 520, 5, 540, 15, 540);
    fill(117, 68, 4);
    ellipse(100, 510, 20, 23);
    triangle(100, 510, 95, 540, 105, 540);
    fill(163, 98, 7);
    ellipse(200, 500, 28, 25);
    triangle(200, 500, 190, 540, 210, 540);
    
}