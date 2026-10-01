/**
 * Prototyping Variables 
 * Owen Dobson
 * 
 * Exploring the noise function in p5js.
 * Just messing around w/ colour and undefined forms. 
 */

"use strict";

let object ={
    t: 0,
    a: 0, // alpha value 
    x: undefined, //x-position
    y: undefined //y-position
}

// Canvas setup
function setup() {
    createCanvas(225, 225);
    background(245);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    object.x = map(noise(object.t), 0, 1, 0, width);
    object.t += 0.1;
    noStroke();
    fill(68, 31, 255, object.a);
    ellipse(object.x,0 , 15);
    object.a += 0.11;
}