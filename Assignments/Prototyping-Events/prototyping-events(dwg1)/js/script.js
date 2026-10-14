/**
 * Prototyping Events Drawing 1 
 * Owen Dobson
 * 
 * Add tattoos to my face. 
 */

"use strict";

let img;

let textToStart = "Adorn my face";

let marks = [];

let fillColour = {
    r: 255,
    g: 255, 
    b: 255,
    a: 180
}

// sets up canvas when photo is ready to load 
async function setup() {
    createCanvas(400, 300); // Canvas created w/ same aspect ratio as photo 
    img = await loadImage('assets/images/DSCN1520.JPG');
    image(img, 0, 0, width, height);
}

function draw() {

    // creates explainer text
    explainText();

    // draws all points that have been previously marked 
    for(let pos of marks){
        design1(pos.x, pos.y);
    }

    //Signals success and ends program
    allOptionsExhausted();

}

// Creates the explainer text to intro the game to viewer 
function explainText(){
    push();
    // defines font 
    fill(255);
    textSize(24);                 
    textFont("Arial");          
    textStyle(NORMAL);             
    textAlign(CENTER, CENTER);
    text(textToStart, width/2, height/2);
    pop();
}

// Draws fist design
function design1(x, y){
    push();
    stroke(fillColour.r, fillColour.g, fillColour.b, fillColour.a);
    strokeWeight(3);
    strokeCap(SQUARE);
    line(x - 10, y, x + 10, y);
    line(x, y - 10, x, y + 16);
    pop();
}

// Signals that all options have been exhausted 
function allOptionsExhausted(){

}

function mousePressed(){
    textToStart = "";
    image(img, 0, 0, width, height);
    marks.push({ x: mouseX, y: mouseY });
} 