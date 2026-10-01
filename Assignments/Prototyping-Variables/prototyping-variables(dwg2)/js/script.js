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
    x: 0, //x-position
    xv: 0.1, //x-velocity
    xa: 0.1, //x-acceleration
    y: 0, //y-position
    yv: 0.5, //y-velocity
    ya: 0.005 //y-acceleration
}

// Canvas setup
function setup() {
    createCanvas(225, 225);
    background(255);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    // Draw those purple circles!
    purpleCircle();

}

//Draws the Purple Circle
function purpleCircle(){
    object.x = map(noise(object.t), 0, 1, 0, width);
    object.t += 0.1;
    noStroke();
    fill(68, 31, 255, object.a);
    ellipse(object.x, object.y , 15);
    object.y += object.yv;
    //object.yv += object.ya; // option for acceleration 
    object.a += 0.11;
}