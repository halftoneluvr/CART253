/**
 * Prototyping Arrays Drawing 1
 * Owen Dobson 
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * sets up canvas 
*/
function setup() {
    createCanvas(225, 225); 
    background(245);

}


/**
 * executes drawing 
*/
function draw() {

    // draws "walls"
    addWalls();
}

function addWalls(){
    push();
    noStroke();
    fill(30);
    //left 
    beginShape();
    vertex(0, 0);
    vertex(0, height);
    vertex(width/3, height/3);
    vertex(width/3, 2*height/3);
    endShape(CLOSE);
    //top
    beginShape();
    vertex(0, 0);
    vertex(width, 0);
    vertex(width/3, height/3);
    vertex(2*width/3, height/3);
    endShape(CLOSE);
    //right
    beginShape();
    vertex(width, 0);
    vertex(width, height);
    vertex(2*width/3, height/3);
    vertex(2*width/3, 2*height/3);
    endShape(CLOSE);
    //bottom
    beginShape();
    vertex(0, height);
    vertex(width, height);
    vertex(width/3, 2*height/3);
    vertex(2*width/3, 2*height/3);
    endShape(CLOSE);

    pop();
}