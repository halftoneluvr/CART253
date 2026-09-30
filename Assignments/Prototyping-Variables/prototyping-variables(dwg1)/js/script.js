/**
 * Prototyping Variables Drawing 1 
 * Owen Dobson
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

//Creating base object
let object = {
    //Position and size 
    x: 113,
    y: 113,
    size: 1,
    angle: 0,
    radius: 0,
    //Colour
    fill: {
        l: 0,
        c: 0,
        h: 0
    }
}

// Canvas Setup
function setup() {
    createCanvas(225, 225);
    background(250);
    angleMode(DEGREES);
}

// Drawing the damn thing!
function draw() {
    // Frame Rate
    frameRate(10);
    
    // The Colour Mode: LCH (lightness, chroma, hue)
    colorMode(LCH);
    noStroke();
    angleMode(DEGREES);

    // Colour variables 
    fill(object.fill.l, object.fill.c, object.fill.h);
    object.fill.l += 1;
    object.fill.c += 1.5;
    object.fill.h += 3.6;

    // Adjusting position & size variables
    ellipse(object.x, object.y, object.size);
    object.x = width/2 + object.radius * cos(object.angle);
    object.y = height/2 + object.radius * sin(object.angle);
    object.size += 1;
    object.angle += 5;
    object.radius += 1; 


}