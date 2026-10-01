/**
 * Conditionals Challenge
 * Owen Dobson
 * 
 * In-class conditionals challenge.
 * 
 * Base code attributed to Pippin!
 */

"use strict";

const puck = {
  x: 200,
  y: 200,
  size: 100,
  fill: "#e40de4"
};

const user = {
  x: undefined, // will be mouseX
  y: undefined, // will be mouseY
  size: 75,
  fill: "#cbff76"
};

const target = {
    x: 25,
    y: 25,
    size: 100,
    fill: "#e01533"
}

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Move the user circle, check for overlap, draw the two circles
 */
function draw() {
  background("#f1e8e8");
    
    //constrain puck to boundaries
    puck.x = constrain(puck.x, 0 + puck.size/2, 400 - puck.size/2);
    puck.y = constrain(puck.y, 0 + puck.size/2, 400 - puck.size/2);
    
    //Draws target
    drawTarget();

    // Move user circle
    moveUser();

    // Draw the user and puck
    drawUser();
    drawPuck();

    movePuck();

    checkTarget();

    }

/**
 * Sets the user position to the mouse position
 */
function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
}

/**
 * Displays the user circle
 */
function drawUser() {
  push();
  noStroke();
  fill(user.fill);
  ellipse(user.x, user.y, user.size);
  pop();
}

/**
 * Displays the puck circle
 */
function drawPuck() {
  push();
  noStroke();
  fill(puck.fill);
  ellipse(puck.x, puck.y, puck.size);
  pop();
}

function movePuck(){
    //Calculates distance between puck and user & overlap
    const d = dist(user.x, user.y, puck.x, puck.y);
    const overlap = (d < user.size/2 + puck.size/2);
    console.log(d);

    if(overlap){
        if(user.x > puck.x){
        puck.x -= 2;
        }
    else{
        puck.x += 2;
        }
    if(user.y > puck.y){
        puck.y -= 2;
        }
    else{
        puck.y += 2;
        }
    }
   
}

function drawTarget(){
    push();
    noStroke();
    fill(target.fill);
    ellipse(target.x, target.y, target.size);
    pop();
}

function checkTarget(){
    const d = dist(puck.x, puck.y, target.x, target.y);
    const overlap = (d < puck.size/2 + target.size/2);

    if(overlap){
        target.fill = "#6e0a19";
    }
    else{
        target.fill = "#e01533";
    }
}
