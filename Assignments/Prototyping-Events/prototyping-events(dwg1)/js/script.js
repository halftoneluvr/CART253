/**
 * Prototyping Events Drawing 1 
 * Owen Dobson
 * 
 * Add tattoos to my face. 
 */

"use strict";

let img;

async function setup() {
    createCanvas(400, 300); // Canvas created w/ same aspect ratio as photo 
    img = await loadImage('assets/images/DSCN1520.JPG');
    image(img, 0, 0, width, height);

}

function draw() {

}