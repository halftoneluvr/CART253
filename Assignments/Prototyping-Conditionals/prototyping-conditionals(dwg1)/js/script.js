/**
 * Protoyping Conditionals Drawing 1
 * Owen Dobson
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let tears1Trail = [] // stores pos of past tears on 1st eye 
let tears2Trail = [] // stores pos of past tears on 2nd eye 

let tears1= {
    x: 80,
    y: 130,
    a: 8,
    n: 5
}

let tears2= {
    x: 180,
    y: 130
}

//sets up the canvas lol 
function setup() {
createCanvas(225, 225);
background(228, 235, 167); 
}

//calls functions to draw base and execute action! 
function draw() {
    //draws background
    background(228, 235, 167); 

      // draws base eyes
    drawRegEyes();

    //makes tears
    drawTears();
    
    //draws eyes in crying postion
    drawCryingEyes();
}

//Draws Eyes
function drawRegEyes(){
push();
//whites of the eyes or sclera
stroke(56, 43, 43)
strokeWeight(0.25);
fill(250, 250, 250);
ellipse(80, 125, 25);
ellipse(180, 125, 25);

//blacks of the eyes or cornea lol
fill(1);
ellipse(80, 125, 20);
ellipse(180, 125, 20);

//lids
angleMode(DEGREES);
stroke(56, 43, 43)
strokeWeight(0.5);
fill(255, 237, 237);
arc(80, 125, 50, 25, 180, 0);
arc(180, 125, 50, 25, 180, 0);

//mouth
fill(56, 43, 43)
noStroke();
ellipse(165, 190, 5);

pop();
}

//makes crying eyes
function drawCryingEyes(){
    push();
    if (mouseIsPressed) {
        //lids
        angleMode(DEGREES);
        stroke(56, 43, 43)
        strokeWeight(0.5);
        fill(255, 237, 237);
        arc(80, 125, 50, 25/2, 360, 180);
        arc(180, 125, 50, 25/2, 360, 180);
        //mouth
        stroke(56, 43, 43);
        strokeWeight(5);
        line(162, 190, 168, 190);
    }
    pop();
}

//makes tears
function drawTears(){
    push();
    // set up tears 
    angleMode(DEGREES);
    noStroke(); 
    fill(79, 223, 255, tears1.a);
    if (mouseIsPressed) {
        tears1Trail.push({
            x: tears1.x,
            y: tears1.y,
            a: tears1.a
        })
        tears2Trail.push({
            x: tears2.x,
            y: tears2.y,
            a: tears1.a
        })
        // moves tears on x 
        tears1.y += 0.4;
        tears2.y += 0.4; 

    } else {
        // resets all positions when mouse is not pressed 
        tears1Trail = [];
        tears2Trail = [];
        tears1.y = 130;
        tears2.y = 130;
    }
        
    for (let pos of tears1Trail) {
        fill(79, 223, 255, tears1.a);
        // varies alpha value 
        tears1.a = map(noise(tears1.n), 0, 1, 0, 20);
        tears1.n += 0.25; 
        ellipse(pos.x, pos.y, 10); // draws tears 
    }
    for (let pos of tears2Trail) {
        fill(79, 223, 255, tears1.a);
        // varies alpha value 
        tears1.a = map(noise(tears1.n), 0, 1, 0, 20);
        tears1.n += 0.25; 
        ellipse(pos.x, pos.y, 10); // draws tears 
    }
    pop();
}
