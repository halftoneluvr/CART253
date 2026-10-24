/**
 * Prototyping Events Drawing 3
 * Owen Dobson
 * 
 * "do it sweetly, cherry"
 */

"use strict";

// declaring variables for images 
let img1;
let img2;
let img3;
let img4;
let img5;

// declaring counter 
let counter = 0; 

/**
 * does the setup for canvas 
*/
async function setup() {
createCanvas(225, 225);
background(245);

//preloads images 
img1 = await loadImage('assets/images/cherry1.png');
img2 = await loadImage('assets/images/cherry2.png');
img3 = await loadImage('assets/images/cherry3.png');
img4 = await loadImage('assets/images/cherry4.png');
img5 = await loadImage('assets/images/cherry5.png');
}

/**
 * draws that thang 
*/
function draw() {
    // // draws images 
    // drawImg(img1);
    // drawImg(img2);
    // drawImg(img3);
    // drawImg(img4);
    // drawImg(img5);

    // cyles images 
    cycleImages();

    // adds text
    addText1();
    addText2();

    moreText();
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

function mouseClicked(){
    counter += 1; 
    console.log (counter)
}

function cycleImages(){
    if(counter === 0){
        drawImg(img1);
    } else if(counter === 1){
        drawImg(img2);
    } else if(counter === 2){
        drawImg(img3);
    } else if(counter === 3){
        drawImg(img4);
    } else if(counter === 4){
        drawImg(img5);
    } else {
        counter = 0;
    }
}

function moreText(){
    push();
    let a = 150; // variable for alpha value 
    fill(255, 255, 255, a);
    textSize(12);                 
    textFont("Arial");          
    textStyle(NORMAL);     
    textWrap(CHAR);        
    textAlign(CENTER, TOP);
    text("It feels good to know that I can still taste beyond my past. The tart assault of cherry against the sustenance of wheat and butter. A testament to resourceful people. To balanced people…in fact, at times, tart people; refreshingly so, that is." , 0, 0, 225); 
    pop();  
}