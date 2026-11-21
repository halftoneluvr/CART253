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

let box ={
    x: undefined,
    y:undefined,
    sizeX: undefined,
    sizeY: undefined,
    fill: {
        r: 255,
        g: 255,
        b: 255,
        a: 100
    }
};

let isDrawing = false; 
let boxes=[];

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
}

/**
 * executes drawing 
*/
function draw() {
    background(255);
    push();
    translate(-width/2, -height/2); // accounts for WEBGL origin
    // draws "walls"
    addWalls();
    pop();

    // Draw saved boxes
    for(const b of boxes){
        drawBox(b);
    }

    // draws when mouse is held down 
    if (isDrawing){
        drawBox(box);
    }
}

function drawBox(b){
    if (b.x === undefined || b.y === undefined) return; 
    push();
    fill(b.fill.r, b.fill.g, b.fill.b, b.fill.a);
    noStroke();
    rect(b.x, b.y, b.sizeX, b. sizeY);
    pop();
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

function mousePressed(){
    box.x = mouseX - width/2;
    box.y = mouseY - height/2; 
    box.sizeX = 0; 
    box.sizeY = 0;
    isDrawing = true; 
}

function mouseDragged(){
    if (!isDrawing)return;
    const currentX = mouseX - width/2;
    const currentY = mouseY - height/2; 
    box.sizeX = currentX - box.x;
    box.sizeY = currentY - box.y; 
}

function mouseReleased(){
    if (!isDrawing) return;
    isDrawing = false; 

    if (Math.abs(box.sizeX) > 1 && Math.abs(box.sizeY) > 1){
        boxes.push({
            x: box.x,
            y: box.y,
            sizeX: box.sizeX,
            sizeY: box.sizeY,
            fill: box.fill
        });
    }
}