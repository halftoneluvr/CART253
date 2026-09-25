/**
 * Prototyping Assignment Drawing 3 
 * Owen Dobson
 * 
 * Mostly playing around w/ the filters to create an abstract drawing. 
 */

"use strict";

/**
 *Creates canvas for drawing
*/
function setup() {
    createCanvas(225, 225);
}


/**
 * Drawing, then manipulating w/ filters. 
*/
function draw() {
    //background set-up
    background(180, 205, 0);
    
    //background image
    push();
    //black ellipse
    fill('black');
    ellipse(225, height/2, 25, 300);

    //Transparent black elements - various alpha values
    fill(0, 0, 0, 150);
    noStroke();
    rect(30, 0, 7, 225);
    rect(13, 0, 2, 225);
    rect(130, 0, 14, 225);
    rect(198, 0, 2, 225);
    rect(203, 0, 2, 225);
     rect(85, 0, 7, 225);

    fill(0, 0, 0, 100);
    rect(30, 0, 7, 225);
    rect(40, 0, 21, 225);
    rect(100, 0, 21, 225);
    rect(186, 0, 2, 225);
    rect(122, 0, 2, 225);

    fill(0, 0, 0, 120);
    rect(40, 0, 2, 225);
    rect(146, 0, 2, 225);
    rect(180, 0, 7, 225);
    rect(2, 0, 7, 225);
     rect(65, 0, 2, 225);

    
    //white ellipses
    fill('white');
    strokeWeight(7);
    stroke('black');
    ellipse(width/2, 2*height/3, 300, 75);
    strokeWeight(6);
    ellipse(40, 2*height/3, 300, 50);
    
    //Chartreuse circles**
    fill(180, 205, 0);
    noStroke();
    ellipse(15, 2*height/3, 25);
    ellipse(35, 2*height/3, 20);
    ellipse(50, 2*height/3, 15);

    //effects
    filter(INVERT);
    filter(BLUR);
    filter(POSTERIZE,5);
    filter(BLUR,1);

    pop();
    
}