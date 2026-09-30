/**
 * Prototyping Variables Drawing 1 
 * Owen Dobson
 * 
 * A pink apparition
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
        a: 0,
        b: 0
    }
}

// Canvas Setup
function setup() {
    createCanvas(225, 225);
    background(255);
    angleMode(DEGREES);
}

// Drawing the damn thing!
function draw() {
    // Frame Rate
    frameRate(10);
    
    // The Colour Mode
    colorMode(LAB);
    noStroke();
    angleMode(DEGREES);

    // Colour variables 
    fill(object.fill.l, object.fill.a, object.fill.b);
    object.fill.l += 3;
    object.fill.a += 1;
    object.fill.b -= 1;

    // Adjusting position & size variables
    ellipse(object.x, object.y, object.size);
    object.x = width/2 + object.radius * cos(object.angle);
    object.y = height/2 + object.radius * sin(object.angle);
    object.size += 0.75;
    object.angle += 5;
    object.radius += 1.25; 

    //filter(POSTERIZE, 150);
    filter(BLUR, 5);

}