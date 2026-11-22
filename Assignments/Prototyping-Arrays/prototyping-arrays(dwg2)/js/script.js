/**
 * Prototyping Arrays Drawing 2
 * Owen Dobson 
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let img;
/**
 * sets it up
*/
async function setup() {
    img = await
    loadImage('assets/images/maybeCar.png');
    
    createCanvas(225, 225);
    background(245);

   
    image(img, 0, 0, 225, 225);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    push();
    stroke('red');
    point(180, 48);
    pop();
}