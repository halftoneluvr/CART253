/**
 * Prototyping Functions Drawing 3
 * Owen Dobson 
 * 
 * My ABCs of CART 253 
 * Used all the first words that came to mind 
 */

"use strict";

let textObjects = [];

// defines alphabet 
const words = {
    a: "apathy",
    b: "bewilder",
    c: "crave",
    d: "disdain", 
    e: "emphatic", 
    f: "foresight",
    g: "goblin",
    h: "heliotrope",
    i: "iterate",
    j: "julienne", 
    k: "koch", 
    l: "lament", 
    m: "mouthy", 
    n: "negate", 
    o: "orthographic", 
    p: "pneuma", 
    q: "quanta",
    r: "required", 
    s: "suppose", 
    t: "tonic",
    u: "utero", 
    v: "vestigial",
    w: "wanton", 
    x: "xavier", 
    y: "yelp", 
    z: "zenith"
}

/**
 * sets up canavas and background 
*/
function setup() {
createCanvas(225, 225); 
}


/**
 * Executes drawing 
*/
function draw() {
    background(255);
    instructionsText();

    for(let t of textObjects){
        drawText(t);
    }

    if (textObjects.length > 26) textObjects.shift();   
}

function spawnText(word){
    textObjects.push({  
        content: word,
        x: random(width),
        y: random([10, 35, 60, 85, 110, 135, 160, 185, 210]), 
        size: 24, 
        fill: {
            r: random(255), 
            g: random(255),
            b: random(255), 
            a: 255
        },
        strokeWeight: 0,
        stroke: {
            r: random(255), 
            g: random(255),
            b: random(255), 
            a: 255
        },
    });
}
function drawText(t){
    push();
    fill(t.fill.r, t.fill.g, t.fill.b, t.fill.a);
    stroke(t.stroke.r, t.stroke.g, t.stroke.b, t.stroke.a);
    strokeWeight(t.strokeWeight);
    textSize(t.size);
    textFont("Times New Roman");
    textStyle(NORMAL);
    textAlign(CENTER, CENTER);
    text(t.content, t.x, t.y);
    pop(); 
}

function keyPressed(){
    let word = words[key.toLowerCase()]; // accounts for caplocks 

    if (word){
        spawnText(word);
    }
    if (key === 'Enter'){
        textObjects.length = 0;
    }

}

function instructionsText(){
    push();
    fill(0);
    noStroke();
    textSize(24);
    textFont("Times New Roman");
    textStyle(NORMAL);
    textAlign(CENTER, CENTER);
    text("test", width/2, height/2);
    pop(); 
}