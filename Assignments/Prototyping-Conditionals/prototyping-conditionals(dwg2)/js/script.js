/**
 * Protoyping Conditionals Drawing 2
 * Owen Dobson
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let trail = [];

//setting up user variables 
let user = {
    x: undefined,
    y: undefined,
    size: 5,
    fill: {
        h: 0,
        s: 0,
        b: 0
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