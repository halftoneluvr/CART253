/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * Creates Canvas 
*/

//let ellipseSize = 150;
//let rectSize = 10;

let sun = {
    sunX: 20,
    sunY: 50,
    sunSize: 50,
    r: 255,
    g: 255,
    b: 0,
}

let bird = {
    X: 200,
    Y: 50,
    Size: 20,
    r: 0,
    g: 0,
    b: 255,
}
function setup() {
    createCanvas(400, 400);
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0,0,0);

    fill(sun.r, sun.g, sun.b);
    ellipse(sun.sunX, sun.sunY, sun.sunSize);
    fill(bird.r, bird.g, bird.b);
    ellipse(bird.X, bird.Y, bird.Size);

    bird.X += 1;
    bird.x = constrain(bird.X, 0, width-100);
    console.log(bird.x);
    
    //fill(0, 0, 255);
    //rect(25, 25, rectSize);
    //ellipseSize = ellipseSize - 1; 
    //rectSize += 1;
}