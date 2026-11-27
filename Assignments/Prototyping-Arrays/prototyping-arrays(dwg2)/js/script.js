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

let armLength = 10; 
let spread = 10;
let savedTrees= []; 

function draw() {
    image(img, 0, 0, 225, 225);
    stroke(255, 255, 255, 50);

    // test for proximity to origin 
    const d = dist(mouseX, mouseY, origin.x, origin.y);
    const target = constrain(d / reach, 0, 1);
    distFromOrigin = lerp(distFromOrigin, target, 0.075);

    // distFromOrigin controls size and spread
    armLength = map(distFromOrigin, 0, 1, 10, 40);
    spread = map(distFromOrigin, 0, 1, 10, 25); 

    // creating the four arms 
    for(let t of savedTrees) drawTree(t.armLength, t.spread);

    // draws currewnt tree
    drawTree(armLength, spread);
    
}

function drawTree(len, spr){
   for(let i = 0; i < 8; i++){
       push();
        translate(origin.x, origin.y);
        rotate(i * 45);
        branch(len, maxDepth, spr); 
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
    branch(len*0.3, depth - 1, spread);
    pop();

    // left 
    push();
    rotate(-spread);
    branch(len*1.2, depth - 1, spread);
    pop();
}

function mouseClicked(){
    savedTrees.push({
        armLength: armLength,
        spread: spread
    })

    // limit array
    if(savedTrees.length >3){
        savedTrees.shift();
    }
}

