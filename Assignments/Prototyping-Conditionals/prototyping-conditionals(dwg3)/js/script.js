/**
 * Protoyping Conditionals Drawing 3
 * Owen Dobson
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

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

    mouseClicked()
     //filters
    filter(BLUR,10);
    filter(DILATE,1000);
}

function colourShift() {
    // shifting the blue values 
    if (growing.b){
        base.fill.b += 1;
        if(base.fill.b >= 255){
            growing.b = false;
        }
    } else{
        base.fill.b -= 1; 
        if(base.fill.b <= 0){
            growing.b = true;
        }
    }
    //shifting alpha values 
    if (growing.a){
        base.fill.a += 9.3;
        if(base.fill.a >= 255){
            growing.a = false;
        }
    } else{
        base.fill.a -= 9.3; 
        if(base.fill.a <= 200){
            growing.a = true;
        }
    }
}

function mouseClicked(){
    push();
    noStroke();
    fill(user.fill.r, user.fill.g, user.fill.b);
    ellipse(user.x, user.y, user.size);
    pop();
}