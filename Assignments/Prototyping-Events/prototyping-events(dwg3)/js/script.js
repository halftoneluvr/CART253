/**
 * Prototyping Events Drawing 3
 * Owen Dobson
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

// declaring variables for images 
let img1;
let img2;
let img3;
let img4;
let img5;


/**
 * does the setup for canvas 
*/
function setup() {
createCanvas(225, 225);
background(245);
}

/**
 * draws that thang 
*/
function draw() {
    // adds text
    addText1();
    addText2();

    // draws images 
    drawImg(img1);
    drawImg(img2);
    drawImg(img3);
    drawImg(img4);
    drawImg(img5);
}

function addText1(){
    push();
    fill(255);
    textSize(36);                 
    textFont("Arial");          
    textStyle(NORMAL);             
    textAlign(CENTER, CENTER);
    text("zrób to słodko,", width/2, height/2); 
    pop();  
}

function addText2(){
    push();
    fill(255);
    textSize(88);                 
    textFont("Arial");          
    textStyle(NORMAL);             
    textAlign(CENTER, CENTER);
    text("wiśnia", width/2, 3*height/4); 
    pop();  
}

function drawImg(img){
    image(img, 0, 0, width, height);
}