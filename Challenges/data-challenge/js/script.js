/**
 * Data Challenge 
 * Owen Dobson 
 * 
 * This is the inclass data challenge 
 */

"use strict";



async function setup() {

    createCanvas(500, 500);
    let jsonData = await loadJSON("assets/data/flowers.json");
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background('mediumturquoise');
    //stem
    push();
    noStroke();
    fill(flowerOne.fillStem);
    rect(flowerOne.x, flowerOne.y, flowerOne.width, flowerOne.f2_height);
    pop();
    //petal 
    push();
    strokeWeight(4);
    stroke(flowerOne.strokePetal);
    fill(flowerOne.fillPetal);
    ellipse(flowerOne.x + flowerOne.width/2, flowerOne.y - flowerOne.petal_width.width/2, flowerOne.petal_width);

    //stem
    push();
    noStroke();
    fill(flowerOne.fillStem);
    rect(flowerOne.x, flowerOne.y, flowerOne.width, flowerOne.f2_height);
    pop();
    //petal 
    push();
    strokeWeight(4);
    stroke(flowerOne.strokePetal);
    fill(flowerOne.fillPetal);
    ellipse(flowerOne.x + flowerOne.width/2, flowerOne.y - flowerOne.petal_width.width/2, flowerOne.petal_width);
    pop();

    //stem
    push();
    noStroke();
    fill(flowerOne.fillStem);
    rect(flowerOne.x, flowerOne.y, flowerOne.width, flowerOne.f2_height);
    pop();
    //petal 
    push();
    strokeWeight(4);
    stroke(flowerOne.strokePetal);
    fill(flowerOne.fillPetal);
    ellipse(flowerOne.x + flowerOne.width/2, flowerOne.y - flowerOne.petal_width.width/2, flowerOne.petal_width);
    pop();
}

function drawFlower(flower){
    push();
    noStroke  
}