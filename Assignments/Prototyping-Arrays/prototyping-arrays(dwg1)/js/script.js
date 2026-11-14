/**
 * Prototyping Arrays Drawing 1
 * Owen Dobson 
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let img1;
let img2; 
let img3; 
let img4; 
let img5; 

/**
 * sets up canvas 
*/
async function setup() {
    createCanvas(225, 225, WEBGL); 
    background(255);

    //loading images 
    img1 = await
    loadImage('assets/images/RIMG0718.JPG')
    img2 = await
    loadImage('assets/images/RIMG0715.JPG')
    img3 = await
    loadImage('assets/images/RIMG0714.JPG')
    img4 = await
    loadImage('assets/images/RIMG0713.JPG')
    img5 = await
    loadImage('assets/images/RIMG0711.JPG')
   
    // places the images
    translate(-width/2, -height/2); // accounts for WEBGL origin
    // draws "walls"
    addWalls();
}

/**
 * executes drawing 
*/
function draw() {
    
}

function addWalls(){
    push();
    noStroke();
    //left 
    texture(img5);
    textureMode(NORMAL);
    beginShape();
    vertex(0, 0, 0, 0);  
    vertex(width/3, height/3, 1, 0);
    vertex(width/3, 2*height/3, 1, 1);
    vertex(0, height, 0, 1);
    endShape(CLOSE);
    //top
    texture(img3);
    textureMode(NORMAL);
    beginShape();
    vertex(0, 0, 0, 0);
    vertex(width, 0, 1, 0);
    vertex(2*width/3, height/3, 1, 1);
    vertex(width/3, height/3, 0, 1);
    endShape(CLOSE);
    //right
    texture(img4);
    textureMode(NORMAL);
    beginShape();
    vertex(width, 0, 1, 1);
    vertex(width, height, 1, 0);
    vertex(2*width/3, 2*height/3, 0, 0);
    vertex(2*width/3, height/3, 0, 1 );
    endShape(CLOSE);
    //bottom
    texture(img2);
    textureMode(NORMAL);
    beginShape();
    vertex(0, height, 0, 0);
    vertex(width, height, 1, 0);
     vertex(2*width/3, 2*height/3, 1, 1);
    vertex(width/3, 2*height/3, 0, 1);
    endShape(CLOSE);
    pop();
}