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
    rect(width/2, height/2, 225, 225);
}

function shiftRect(){

}