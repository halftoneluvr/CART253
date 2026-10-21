/**
 * Prototyping Events Drawing 2
 * Owen Dobson
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

//delcares boolean for instructions 
let showInstructions = true;

// declares varibales for rectangle 
let rectangle = {
    pos:{
        x: undefined,
        y: undefined
    },
    size:{
        x: 225,
        y: 225
    },
    fill:{
        h: 0,
        s: 0,
        b: 0, 
    }
}

//setting up canvas and background 
function setup() {
    createCanvas(225, 225);
}

//draws the thang 
function draw() {
    background(245);

    drawRect(); // creates rectangle 

    shiftRect(); // shifts size based on keys 

    shiftColour(); // shifts colour 

    //lays out instructions until mouse is pressed
    if (showInstructions){
        addInstructions();
    }
}

//Draws the base rectangle which will be maniputated 
function drawRect(){
    push();
    noStroke();
    fill(
        rectangle.fill.h, 
        rectangle.fill.s, 
        rectangle.fill.b
    );
    rectMode(CENTER);
    rect(rectangle.pos.x = width/2, 
        rectangle.pos.y = height/2, 
        rectangle.size.x, 
        rectangle.size.y);
    pop();
}

//shifts size of rectangle
function shiftRect(){
    //creates changes in size based on key presses
    if(keyIsPressed === true){
        if(key === 'w'){
            rectangle.size.y -= 1;
        } else if (key === 's'){
            rectangle.size.y += 1;
        } else if (key === 'a'){
            rectangle.size.x -= 1;
        } else if (key === 'd'){
            rectangle.size.x += 1;
        }
    }
    //constrains size of rectangle
    rectangle.size.x = constrain(rectangle.size.x, -225, 225);
    rectangle.size.y = constrain(rectangle.size.y, -225, 225);
}

//shifts colour on rectangle 
function shiftColour(){
    push();
    noStroke();
    colorMode(HSB, 100); // adjusts colourMode
   
    // finding important points on rectangle to map gradient appropriately 
    let left = (rectangle.pos.x - rectangle.size.x/2);
    let top = (rectangle.pos.y - rectangle.size.y/2);
    let w = (rectangle.size.x);
    let h = (rectangle.size.y);

    // runs a for loop to initiate a new colour value across the rectangle 
    for (let i = 0; i < w; i++) {
        let hueValueX = map(i, 0, w, 40, 60);
        fill(hueValueX, 100, 100);
        rect(left + i, top, 1, h);
    }

    // runs a for loop to initiate a new colour value down the rectangle 
    for (let k = 0; k < h; k++) {
        let hueValueY = map(k, 0, h, 290, 310);
        fill(hueValueY, 100, 100);
        rect(left, top + k, w, 1);
    }
    pop();
}

// add text directions 
function addInstructions(){
    push();
    fill(255);
    textSize(14);                 
    textFont("Arial");          
    textStyle(NORMAL);             
    textAlign(CENTER, CENTER);
    text("use w, a, s & d keys to shift :)", width/2, height/2); 
    pop();  
}

// creating functions so that instructions disapear 
function mousePressed(){
    showInstructions = false;
}

function keyPressed(){
    showInstructions = false;
}