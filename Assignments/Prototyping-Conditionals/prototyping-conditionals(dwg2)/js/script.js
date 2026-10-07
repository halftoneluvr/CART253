/**
 * Protoyping Conditionals Drawing 2
 * Owen Dobson
 * 
 * Made a little symmetrical drawing tool/mandala tool? 
 * V cute pastel sorta colours :) 
 * Variation in thickness tocover area or add detail! 
 * Customize yours today ;) 
 */

"use strict";

let trail = [];

let growing = {
    size: true,
    h: true,
    s: true,
    b: true
}

//setting up user variables 
let user = {
    x: undefined,
    y: undefined,
    size: 2,
    fill: {
        h: 0,
        s: 30,
        b: 65
    }
}

/**
 * sets up canvas and background 
*/
function setup() {
createCanvas(225, 225);
background(245);
}


/**
 * Draws the pattern based on user activity
*/
function draw() {
    // assigns user position based on mouse 
    user.x = mouseX;
    user.y = mouseY;

    // Top-Left
    push();
    drawPattern();
    pop();

    // Top-Right
    push();
    translate(width, 0);
    scale(-1, 1);
    drawPattern();
    pop();

    // Bottom-Left
    push();
    translate(0, height);
    scale(1, -1);
    drawPattern();
    pop();

    // Bottom-Right
    push();
    translate(width, height);
    scale(-1, -1);
    drawPattern();
    pop();

}

function drawPattern(){
    push();
    if(mouseIsPressed){
        trail.push({
            x: user.x,
            y: user.y
        });
    }
    else{
        trail = [];
    }
    for(let pos of trail){
        colorMode(HSB);
        noStroke();
        fill(user.fill.h, user.fill.s, user.fill.b);
        ellipse(pos.x, pos.y, user.size);
    }
    pop(); 
}

function mouseDragged(){
    //creates variation in size based on mouse drag 
    if(growing.size){
        user.size += 0.005;
            if(user.size >= 6.5){
                growing.size = false;
            }
    } else{
        user.size -= 0.008;
        if(user.size <= 2) {
            growing.size = true;
        }
    }
    // changes values of hue 
    if(growing.h){
        user.fill.h += 3;
            if(user.fill.h >= 360){
                growing.h = false;
            }
    } else{
        user.fill.h -= 3;
        if(user.fill.h <= 0) {
            growing.h = true;
        }
    }
    // changes values of saturation
    if(growing.s){
        user.fill.s += 1;
            if(user.fill.s >= 0){
                growing.s = false;
            }
    } else{
        user.fill.s -= 1;
        if(user.fill.s <= 20) {
            growing.s = true;
        }
    }
    // changes values of brightness/value
    if(growing.b){
        user.fill.b += 1;
            if(user.fill.b >= 85){
                growing.b = false;
            }
    } else{
        user.fill.b -= 1;
        if(user.fill.b <= 55) {
            growing.b = true;
        }
    }
}