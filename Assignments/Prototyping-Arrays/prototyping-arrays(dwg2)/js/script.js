/**
 * Prototyping Arrays Drawing 2
 * Owen Dobson 
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let img;

let origin;
let distFromOrigin = 0;
const reach = 225;
const maxDepth = 8;
/**
 * sets it up
*/
async function setup() {
    createCanvas(225, 225);
    background(245);
    
    // setting up image 
    img = await
    loadImage('assets/images/maybeCar.png');
    angleMode(DEGREES);
    
    // defining orugin for tree 
    origin = { 
        x: 180,
        y: 48
    }
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    image(img, 0, 0, 225, 225);
    stroke(255, 255, 255, 50);

    // test for proximity to origin 
    const d = dist(mouseX, mouseY, origin.x, origin.y);
    const target = 1 - constrain(d / reach, 0, 1);
    distFromOrigin = lerp(distFromOrigin, target, 0.05);

    // distFromOrigin controls size and spread
    const armLength = map(distFromOrigin, 0, 1, 10, 80);
    const spread = map(distFromOrigin, 0, 1, 10, 70); 

    // creating the four arms 
    for(let i = 0; i < 8; i++){
       push();
        translate(origin.x, origin.y);
        rotate(i * 45);
        branch(armLength, maxDepth, spread); 
        pop(); 
    }
}

function branch(len, depth, spread){
    if(depth === 0) return;

    line(0, 0, 0, -len);
    translate(0, -len);

    // right 
    push();
    rotate(spread);
    branch(len*0.6, depth - 1, spread);
    pop();

    // left 
    push();
    rotate(-spread);
    branch(len*0.9, depth - 1, spread);
    pop();
}

