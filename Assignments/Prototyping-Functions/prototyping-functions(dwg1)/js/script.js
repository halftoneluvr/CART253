/**
 * Prototyping Functions Drawing 1
 * Owen Dobson 
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
let textObject = {
    thickness: 1,
    fill: {
        r: 0, 
        g: 0,
        b: 0,
        a: 250
    },
    vel: 0.001,
    acc: 0.0015
};
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
    stroke(textObject.fill.r, textObject.fill.g, textObject.fill.b, textObject.fill.a);   
    strokeWeight(textObject.thickness);          
    textFont("Comic Sans MS");          
    textStyle(NORMAL);             
    textAlign(CENTER, CENTER);
    text("Witek", width/2, height/2); 
    // makes it grow 
    if(textObject.thickness < 250){
        textObject.thickness +=  textObject.vel;
        textObject.vel +=  textObject.acc; 
    }
    // adjusts fill 
    // if(textObject.fill.r < 255){
    //     textObject.fill.r += 0.1; 
    //     textObject.fill.g += 0.1; 
    //     textObject.fill.b += 0.1; 
        
    // }
    pop();  
}