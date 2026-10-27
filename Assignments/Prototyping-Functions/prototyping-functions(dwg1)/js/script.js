/**
 * Prototyping Functions Drawing 1
 * Owen Dobson 
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
let thickness = 1;
/**
 * sets up canvas 
*/
function setup() {
createCanvas(225, 225);
background(245);
}

/**
 * executes drawing 
*/
function draw() {
    // creates text 
    createText();
}

function createText(){
    push();
    //defines text parameters 
    fill(0);
    textSize(36);    
    stroke(0);   
    strokeWeight(thickness);          
    textFont("Comic Sans MS");          
    textStyle(NORMAL);             
    textAlign(CENTER, CENTER);
    text("Witek", width/2, height/2); 
    // makes it grow 
    if(thickness < 250){
        thickness += 0.25; 
    }
    pop();  
}