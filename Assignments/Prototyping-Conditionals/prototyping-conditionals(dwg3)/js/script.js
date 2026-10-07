/**
 * Protoyping Conditionals Drawing 3
 * Owen Dobson
 * 
 * Makes a fun bleeding effect on the canvas with lots of oscillations
 * Been doing tones of purple and chartreuse/yellowish green!  
 */

"use strict";

let trail = [];

let growing = {
    b: true,
    a: true
};

let base = {
    fill:{
        r: 140,
        g: 140,
        b: 0,
        a: 200
    }
}

let user = {
    x: undefined,
    y: undefined,
    size: 25,
    fill: {
        r: 255,
        g: 255, 
        b: 255
    }
}

/**
 * Setting this thang up :) 
*/
function setup() {
    createCanvas(225,225);
    background(255);
}


/**
 * Executes functions that draw lol 
*/
function draw() {
    // assigns user positions from mouse positions 
    user.x = mouseX;
    user.y = mouseY;

    // setting up colour shifting base 
    noStroke();
    fill(base.fill.r, base.fill.g, base.fill.b, base.fill.a);
    rect(0, 0, width, height);
    colourShift(); // creates colour shift in base 

    //creating trail effect
    createTrail();
    
     //filters
    filter(BLUR,12);
    filter(DILATE,100);
    filter(POSTERIZE,30);
}

function colourShift() {
    // shifting the blue values 
    if (growing.b){
        base.fill.b += 0.5;
        if(base.fill.b >= 255){
            growing.b = false;
        }
    } else{
        base.fill.b -= 0.5; 
        if(base.fill.b <= 0){
            growing.b = true;
        }
    }
    //shifting alpha values 
    if (growing.a){
        base.fill.a += 1;
        if(base.fill.a >= 255){
            growing.a = false;
        }
    } else{
        base.fill.a -= 1; 
        if(base.fill.a <= 0){
            growing.a = true;
        }
    }
}

function createTrail(){
    if(mouseIsPressed){
        trail.push({
            x: user.x,
            y: user.y
        });
    } else{
        trail = [];
    } for(let pos of trail){
        noStroke();
        fill(user.fill.r, user.fill.g, user.fill.b);
        ellipse(pos.x, pos.y, user.size); // draws ellipse
    }
}