/**
 * Prototyping Functions Drawing 1
 * Owen Dobson 
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
/**
 * sets up canvas 
*/
let textObjects = [];
let lastSpawn = 0;              // when the last object was added 
const spawnInterval = 2500;     // one second between objects 

function setup() {
createCanvas(225, 225);
spawnText();
// creates text objects individually, then stores them 
//textObjects.push(makeTextObject("Witek", width/2, height/2));
}

/**
 * executes drawing 
*/
function draw() {
    background(245);

    // adds a new object if one second has passed 
    if(millis() - lastSpawn >= spawnInterval){
        spawnText();
    }

    for(let t of textObjects){
        updateText(t);
        drawText(t);
    }

    if (textObjects.length > 30) textObjects.shift(); // limits array 
}

function spawnText(){
    textObjects.push(({
        content: "Witek",
        x: random(20, width - 20),
        y: random(20, height - 20), 
        size: 36, 
        fill: color(random(255), random(255), random(255)),
        stroke: {
            r: random(255), 
            g: random(255),
            b: random(255), 
            a: 255
        },
        thickness: 1,
        maxThickness: 250, 
        vel: 0.001,
        acc: 0.0015
    }));

    lastSpawn = millis(); 
}

function updateText(t){
    if(t.thickness < t.maxThickness){
        t.thickness += t.vel; // adds velocity   
        t.vel += t.acc; // adds acceleration 
    }
}

function drawText(t){
    push();
    fill(t.fill);
    stroke(t.stroke.r, t.stroke.g, t.stroke.b, t.stroke.a);
    strokeWeight(t.thickness);
    textSize(t.size);
    textFont("Comic Sans MS");
    textStyle(NORMAL);
    textAlign(CENTER, CENTER);
    text(t.content, t.x, t.y);
    pop(); 
}