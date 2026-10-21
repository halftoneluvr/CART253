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
        h: 255,
        s: 255,
        b: 255, 
    }, 
    regrowing:{
        x: false,
        y: false
    },
    velocity:{
        x: 1,
        y: 1
    }
}

// declaring constants 
const acc = 0.15;
const maxSpeed = 5;
const friction = 0.88;
const minSizeX = -225;
const minSizeY = -225;
const regrowSpeed = 3; 

//setting up canvas and background 
function setup() {
    createCanvas(225, 225);
}

//draws the thang 
function draw() {
    background(255);

    drawRect(); // creates rectangle 

    shiftRect(); // shifts size based on keys 

    shiftColour(); // shifts colour 

    //lays out instructions until mouse is pressed
    if (showInstructions){
        addInstructions();
    }

    // does a little reset to keep user in gradient zone 
    cuteReset();

    filter(POSTERIZE, 13);
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
    let pushX = 0;
    let pushY = 0;
    //creates changes in size based on key presses
        if(keyIsDown('w')) pushY -= 2;
        if (keyIsDown('s')) pushY += 2;
        if (keyIsDown('a')) pushX -= 2;
        if (keyIsDown('d')) pushX += 2;
    
    // adds acceleration 
    rectangle.velocity.x += pushX * acc;
    rectangle.velocity.y += pushY * acc;

    // adds friction 
    if (pushX === 0){
        rectangle.velocity.x *= friction;
    }
    if (pushY === 0){
        rectangle.velocity.y *= friction;
    }

    // velcoity changes size 
    rectangle.size.x += rectangle.velocity.x;
    rectangle.size.y += rectangle.velocity.y; 

    // caps speed
    rectangle.velocity.x = constrain(rectangle.velocity.x, -maxSpeed, maxSpeed);
    rectangle.velocity.y = constrain(rectangle.velocity.y, -maxSpeed, maxSpeed);
    if (rectangle.size.x <= -225 || rectangle.size.x >= 225) rectangle.velocity.x = 0;
    if (rectangle.size.y <= -225 || rectangle.size.y >= 225) rectangle.velocity.y = 0;

     //constrains size of rectangle
    rectangle.size.x = constrain(rectangle.size.x, -225, 225);
    rectangle.size.y = constrain(rectangle.size.y, -225, 225);
}

// // work out which direction each axis is being pushed this frame
//     let pushX = 0;
//     let pushY = 0;
//     if (keyIsDown(87)) pushY -= 1; // W
//     if (keyIsDown(83)) pushY += 1; // S
//     if (keyIsDown(65)) pushX -= 1; // A
//     if (keyIsDown(68)) pushX += 1; // D

//     // acceleration changes velocity
//     rectangle.vel.x += pushX * ACCEL;
//     rectangle.vel.y += pushY * ACCEL;

//     // with no key held on an axis, friction slows it down
//     if (pushX === 0) rectangle.vel.x *= FRICTION;
//     if (pushY === 0) rectangle.vel.y *= FRICTION;

//     // cap the speed
//     rectangle.vel.x = constrain(rectangle.vel.x, -MAX_SPEED, MAX_SPEED);
//     rectangle.vel.y = constrain(rectangle.vel.y, -MAX_SPEED, MAX_SPEED);

//     // velocity changes size
//     rectangle.size.x += rectangle.vel.x;
//     rectangle.size.y += rectangle.vel.y;

//     // limits, and kill the speed when you hit one so it doesn't "stick" to the wall
//     if (rectangle.size.x <= -225 || rectangle.size.x >= 225) rectangle.vel.x = 0;
//     if (rectangle.size.y <= -225 || rectangle.size.y >= 225) rectangle.vel.y = 0;
//     rectangle.size.x = constrain(rectangle.size.x, -225, 225);
//     rectangle.size.y = constrain(rectangle.size.y, -225, 225);


//shifts colour on rectangle 
function shiftColour(){
    push();
    noStroke();
    colorMode(HSB, 360, 100, 100, 100); // adjusts colourMode
   
    // finding important points on rectangle to map gradient appropriately 
    let left = (rectangle.pos.x - rectangle.size.x/2);
    let top = (rectangle.pos.y - rectangle.size.y/2);
    let w = (rectangle.size.x);
    let h = (rectangle.size.y);

    // runs a for loop to initiate a new colour value across the rectangle 
    for (let i = 0; i < w; i++) {
        let hueValueX = map(i, 0, w, 45, 85);
        fill(hueValueX, 100, 100, 75);
        rect(left + i, top, 1, h);
    }

    // runs a for loop to initiate a new colour value down the rectangle 
    for (let k = 0; k < h; k++) {
        let hueValueY = map(k, 0, h, 280, 320);
        fill(hueValueY, 100, 100, 75);
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

function cuteReset(){
    // checks width 
    if(rectangle.size.x <= minSizeX){
        rectangle.regrowing.x = true;
    }    
    // resets width 
    if (rectangle.regrowing.x === true){
            rectangle.size.x += regrowSpeed;
            if (rectangle.size.x >= 225) {
                rectangle.regrowing.x = false;
            }
        }
    // checks height 
    if(rectangle.size.y <= minSizeY){
        rectangle.regrowing.y = true;
    }  
    // reset height   
    if (rectangle.regrowing.y === true){
            rectangle.size.y += regrowSpeed;
            if (rectangle.size.y >= 225) {
                rectangle.regrowing.y = false;
            }
        }
}