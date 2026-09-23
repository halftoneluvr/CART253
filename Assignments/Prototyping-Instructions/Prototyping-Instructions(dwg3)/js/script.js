/**
 * Prototyping Assignment Drawing 3 
 * Owen Dobson
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 *Creates canvas for drawing
*/
function setup() {
    createCanvas(225, 225);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    //background set-up
    background(213, 255, 0);


    //Citron yellow elements 
    fill(173, 165, 19);
    noStroke();
    ellipse(100, 100, 2, 80);

    // B1ue violet elements 
    fill(107, 41, 135);
    noStroke();
    ellipse(8,200, 40);

    //Pale Blue elements
    fill(191, 213, 222);
    noStroke();
    ellipse(200,25, 85);
    
    //Pre-fab gradient inversion code (generated using Claude by Anthropic)
    loadPixels();
     for (let y = 0; y < height; y++) {
        let amount = map(y, 0, height, 0, 1);
        for (let x = 0; x < width; x++) {
        let index = (x + y * width) * 4;
        pixels[index]     = lerp(pixels[index], 255 - pixels[index], amount);
        pixels[index + 1] = lerp(pixels[index + 1], 255 - pixels[index + 1], amount);
        pixels[index + 2] = lerp(pixels[index + 2], 255 - pixels[index + 2], amount);
        }
  }
  updatePixels();

  //


}