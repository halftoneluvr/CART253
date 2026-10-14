/**
 * Prototyping Events Drawing 1 
 * Owen Dobson
 * 
 * Add tattoos to my face. 
 */

"use strict";

let img;

let textToStart = "Adorn my face";

// sets up canvas when photo is ready to load 
async function setup() {
    createCanvas(400, 300); // Canvas created w/ same aspect ratio as photo 
    img = await loadImage('assets/images/DSCN1520.JPG');
    image(img, 0, 0, width, height);
}

function draw() {

    // creates explainer text
    explainText();

    //draws first design 
    design1();

    //Signals success 
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
function design1(){

}

// Signals that all options have been exhausted 
function allOptionsExhausted(){

}

function mouseClicked(){
    textToStart = "";
    image(img, 0, 0, width, height);
}