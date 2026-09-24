/**
 * Variables Challenge
 * Owen Dobson
 * 
 * Variables Challenge done w/ Mark. Mr. Furious is so angry! 
 */

"use strict";


// Our friend Mr. Furious
let mrFurious = {
  // Position and size
  x: 200,
  y: 200,
  size: 100,
  // Colour
  fill: {
    r: 255,
    g: 225,
    b: 225
  }
};

let sky = {
    fill: {
        r: 160,
        g: 180,
        b: 400
    }
}

let bird = {
    x: 0,
    y: 200,
    size: 30
}

let posX = {
    min: 195,
    max: 205
}

let posY = {
    min: 195,
    max: 205
}

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {
  background(sky.fill.r -= 1, sky.fill.g -= 1, sky.fill.b -= 1);
  
  // Draw Mr. Furious as a coloured circle
  push();
  noStroke();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
  ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
    mrFurious.fill.g -= 1;
    mrFurious.fill.b -= 1; 
    mrFurious.x = random(posX.min-=1, posX.max+=1);
    mrFurious.y = random(posY.min-=1, posY.max+=1);
    mrFurious.x = constrain(mrFurious.x,0,width);
    mrFurious.y = constrain(mrFurious.y,0,height);
  pop();

  push();
  noStroke();
  fill(0, 0, 255);
  rect(bird.x += 1, bird.y, bird.size);
  bird.x = constrain(bird.x,0,width-50);
  pop();


}