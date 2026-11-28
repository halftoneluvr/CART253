/**
 * Prototyping Arrays Drawing 3
 * Owen Dobson
 * 
 * Building a simple drawing tool
 */

"use strict";

let objects =[];

let hue = 0;
let sat = 0;
let light = 0; 

let object ={
    x: undefined,
    y: undefined, 
    fill:{
        h: hue,
        s: sat,
        l: light
    }
}


function setup() {
    createCanvas(225, 225);
    background(245);

    colorMode(HSL); // adjusts for use 

}


/**
 * executes drawing
*/
function draw() {

    alterValues();

    drawObjects();

    showColour();
}

function alterValues(){
    if(keyIsPressed === true){
        if(key === 'ArrowUp'){
            sat += 1;
        } else if(key === 'ArrowDown'){
            sat -= 1;
        }
        if(key === 'ArrowRight'){
            light += 1; 
        } else if(key === 'ArrowLeft'){
            light -= 1; 
        }
    }
}

function drawObjects(){

}

function showColour(){
    push();
    fill(hue, sat, light);
    noStroke();
    rect(width-35, height-10, 30, 5);
    pop();
}