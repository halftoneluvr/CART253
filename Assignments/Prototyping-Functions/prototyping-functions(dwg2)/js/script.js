/**
 * Prototyping Functions Drawing 2
 * Owen Dobson
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let objects = []; 

// sets up canvas and background 
function setup() {
createCanvas(225, 225); 
background(245);
}

// draws lol
function draw(){
    if(mouseIsPressed){
            spawnObject();
        }
    
    createGrowths();

    for(let t of objects){
            drawObject(t);
    }

    // creating limits for the program (also preventing lagging & 
    // making program a lot smaller lol)
    frameRate(20);
    if (objects.length > 25) objects.shift();
    
    // filters 
    filter(POSTERIZE, 50);
    filter(ERODE);
}

function spawnObject() {
    objects.push({  
        x: mouseX,
        y: mouseY,
        size: 2.5,
        rectRadius: 1,
        fill: {
            r: random(255), 
            g: random(255),
            b: random(255), 
            a: 255
        }
    })
}

function drawObject(t){
    push();
    rectMode(RADIUS);
    noStroke();
    fill(t.fill.r, t.fill.g, t.fill.b, t.fill.a);
    rect(t.x, t.y, t.size, t.size);
    pop();
}

function createGrowths(){
    let stepDistance = 5; 

    for (let t of objects){
        let stepIndex = floor(random(0,8));
        let angle = stepIndex * QUARTER_PI;

        t.x += cos(angle) * stepDistance; 
        t.y += sin(angle) * stepDistance; 
    }
}