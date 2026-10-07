/**
 * Protoyping Conditionals Drawing 3
 * Owen Dobson
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let growing = {
    b: true
};

let base = {
    fill:{
        r: 140,
        g: 140,
        b: 0,
        a: 200
    }
}

/**
 * Setting this thang up :) 
*/
function setup() {
    createCanvas(225,225);
}


/**
 * Executes functions that draw lol 
*/
function draw() {
    // setting up colour shifting base 
    noStroke();
    fill(base.fill.r, base.fill.g, base.fill.b);
    rect(0, 0, width, height);
    colourShift(); // creates colour shift in base 

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
}