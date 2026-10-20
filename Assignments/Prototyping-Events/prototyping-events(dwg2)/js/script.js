/**
 * Prototyping Events Drawing 2
 * Owen Dobson
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let rectangle = {
    size:{
        x: 255,
        y: 255
    },
    fill:{
        r: 0,
        g: 0,
        b: 0, 
        a: 255
    }
}

//setting up canvas and background 
function setup() {
    createCanvas(225, 225);
}

//draws the thang 
function draw() {
    background(245);

    drawRect();

    shiftRect();
}

//Draws the base rectangle which will be maniputated 
function drawRect(){
    noStroke();
    fill(
        rectangle.fill.r, 
        rectangle.fill.g, 
        rectangle.fill.b, 
        rectangle.fill.a
    );
    rectMode(CENTER);
    rect(width/2, height/2, rectangle.size.x, rectangle.size.y);
}

function shiftRect(){
    if(keyIsPressed === true){
        if(key === 'w'){
            rectangle.size.y -= 1;
        } else if (key === 's'){
            rectangle.size.y += 1;
        } else if (key === 'a'){
            rectangle.size.x -= 1;
        } else if (key === 'd'){
            rectangle.size.x += 1;
        }
    }
}