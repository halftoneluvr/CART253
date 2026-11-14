/**
 * Prototyping Arrays Drawing 1
 * Owen Dobson 
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let img1;

/**
 * sets up canvas 
*/
async function setup() {
    createCanvas(225, 225, WEBGL); 
    background(245);

    //loading images 
    img1 = await
    loadImage('assets/images/RIMG0711.JPG')
   

}


/**
 * executes drawing 
*/
function draw() {
    translate(-width/2, -height/2); // accounts for WEBGL origin
    // draws "walls"
    addWalls();
}

function addWalls(){
    push();
    noStroke();
    //left 
    texture(img1);
    textureMode(NORMAL);
    beginShape();
    vertex(0, 0, 0, 0);  
    vertex(width/3, height/3, 1, 0);
    vertex(width/3, 2*height/3, 1, 1);
    vertex(0, height, 0, 1);
    endShape(CLOSE);
    //top
    beginShape();
    fill(80);
    vertex(0, 0);
    vertex(width, 0);
    vertex(2*width/3, height/3);
    vertex(width/3, height/3);

    endShape(CLOSE);
    //right
    beginShape();
    fill(130);
    vertex(width, 0);
    vertex(width, height);
    vertex(2*width/3, 2*height/3);
    vertex(2*width/3, height/3);
    endShape(CLOSE);
    //bottom
    beginShape();
    fill(38);
    vertex(0, height);
    vertex(width, height);
     vertex(2*width/3, 2*height/3);
    vertex(width/3, 2*height/3);
    endShape(CLOSE);

    pop();
}