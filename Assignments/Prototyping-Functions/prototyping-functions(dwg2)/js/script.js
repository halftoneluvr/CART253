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
makeText();
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

function makeText(){
    push();
    fill(0);
    stroke(0);
    strokeWeight(0);
    textSize(36);
    textFont("Comic Sans MS");
    textStyle(NORMAL);
    textAlign(CENTER, CENTER);
    text("Touch me", width/2, height/2);
    pop(); 
}