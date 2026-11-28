/**
 * Prototyping Arrays Drawing 3
 * Owen Dobson
 * 
 * Building a simple drawing tool
 */

"use strict";

let objects =[];

let showInstructions = true; // Boolean for instructions 

let hue = undefined;
let sat = 0;
let light = 0; 

let minRadius = 5; 
let maxRadius = 200;
let density = 3;


function setup() {
    createCanvas(225, 225);
    background(245);
    noFill();
    colorMode(HSL); // adjusts for use 

}


/**
 * executes drawing
*/
function draw() {
    background(255);

    if(showInstructions){
        instructionsText();
    }

    alterValues(); // user controls stroke value 

    drawObjects(); // creates objects 

    showColour(); // shows active colour value 
}

function alterValues(){
    if(keyIsPressed === true){
        if(key === 'ArrowUp'){
            sat = constrain(sat + 1, 0, 100);
        } else if(key === 'ArrowDown'){
            sat = constrain(sat - 1, 0, 100);
        }
        if(key === 'ArrowRight'){
            light = constrain(light + 1, 0, 100);
        } else if(key === 'ArrowLeft'){
            light = constrain(light - 1, 0, 100);
        }
    }
    hue = random([180, 300, 60]);
}

function drawObjects(){
    for(const obj of objects){
        push();
        noFill();
        strokeWeight(0.5);
        stroke(obj.fill.h, obj.fill.s, obj.fill.l);
        for(let i = 0; i < obj.r; i += density){
            ellipse(obj.x, obj.y, i);
        }
        pop(); 
    }
}

function showColour(){
    push();
    fill(hue, sat, light);
    noStroke();
    rect(width-35, height-10, 30, 5);
    pop();
}

function mouseReleased(){
    if (mouseX < 0 || mouseX > width || mouseY < 0 || mouseY > height) return;
    
    objects.push({
        x: mouseX,
        y: mouseY,
        r: random(minRadius, maxRadius),
        fill: {
            h: hue,
            s: sat,
            l: light
        }
    });

    showInstructions = false; 
}

function instructionsText(){
    push();
    fill(0);
    noStroke();
    textSize(12);
    textFont("Times New Roman");
    textStyle(NORMAL);
    textAlign(CENTER, CENTER);
    text("use arrow keys to adjust saturation & lightness", width/2, height/2);
    pop(); 
}