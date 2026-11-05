/**
 * Loops Challenge 
 * Owen Dobson
 * 
 * This is the in-class loops challenge 
 */

"use strict";

let strokeValue = 0;
let x = 0;
let y = undefined;
let xTwo = undefined;
let yTwo = 0;


/**
 * Creates the canvas
 */
function setup() {
    createCanvas(500, 500);
    y = height; 
    xTwo = width; 

    push();
    // Use HSB color with values in the range 0-100.
    colorMode(HSB, 100);

    for (let i = 0; i <= width; i++) {
        let hueValue = map(i, 0, width, 77, 95);
            stroke(hueValue, 100, 100);
            line(i, 0, i, y);
    }
    pop();
}

/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */
function draw() {
    //background("lightgoldenrodyellow");
    
    strokeValue = 0;
    x = 0;

    // verticle 
    while(strokeValue <= 255){
        strokeValue += 25; 
        x += 50;
        
        stroke(strokeValue);
        line(x, 0, x, y);
    }

    // horizontal 
    strokeValue = 0;
    yTwo = 0;

    while(strokeValue <= 255){
        strokeValue += 25;
        yTwo += 50;

        stroke(strokeValue);
        line(0, yTwo, xTwo, yTwo);
    }
}