/**
 * Prototyping Variables 
 * Owen Dobson
 * 
 * Exploring the noise function in p5js.
 * Just messing around w/ colour and noisy paths. 
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

let chart ={
    t: 0,
    a: 0, // alpha value 
    x: 0, //x-position
    xv: 0.5, //x-velocity
    xa: 0.1, //x-acceleration
    y: 0, //y-position
    yv: 0.1, //y-velocity
    ya: 0.005 //y-acceleration
}

// Canvas setup
function setup() {
    createCanvas(225, 225);
    background(255);
}

/**
 * Draws my functions :) 
*/
function draw() {
    // Draw those purple circles!
    purpleCircle();

    // Draw those chartreuse circles!
    chartreuseCircle();

}

//Draws the Purple Circle
function purpleCircle(){
    push();
    object.x = map(noise(object.t), 0, 1, 0, width);
    object.t += 0.1;
    noStroke();
    fill(68, 31, 255, object.a);
    ellipse(object.x, object.y , 15);
    object.y += object.yv;
    //object.yv += object.ya; // option for acceleration 
    object.a += 0.11;
    pop();
}

//Draws the Chartreuse Circle
function chartreuseCircle(){
    push();
    chart.y = map(noise(chart.t), 0, 1, 0, height);
    chart.t += 0.1;
    noStroke();
    fill(192, 235, 0, chart.a);
    ellipse(chart.x, chart.y , 15);
    chart.x += chart.xv;
    chart.a += 0.11;
    pop();
}