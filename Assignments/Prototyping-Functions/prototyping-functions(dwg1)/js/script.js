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
function setup() {
createCanvas(225, 225);

// creates text objects individually, then stores them 
textObjects.push(makeTextObject("Witek", width/2, height/2));
}

/**
 * executes drawing 
*/
function draw() {
    background(245);

    for(let t of textObjects){
        updateText(t);
        drawText(t);
    }
}

function makeTextObject(content, x, y, size = 36){
    return{
        content: content,
        x: x,
        y: y, 
        size: size, 
        fill: 0,
        stroke: {
            r: 0, 
            g: 0,
            b: 0, 
            a: 255
        },
        thickness: 1,
        maxThickness: 250, 
        vel: 0.001,
        acc: 0.0015
    };
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







// function createText(textObject){
//     push();
//     //defines text parameters 
//     fill(0);
//     textSize(36);    
//     stroke(textObject.fill.r, textObject.fill.g, textObject.fill.b, textObject.fill.a);   
//     strokeWeight(textObject.thickness);          
//     textFont("Comic Sans MS");          
//     textStyle(NORMAL);             
//     textAlign(CENTER, CENTER);
//     text("Witek", width/2, height/2); 
//     // makes it grow 
//     if(textObject.thickness < 250){
//         textObject.thickness +=  textObject.vel;
//         textObject.vel +=  textObject.acc; 
//     }
//     // adjusts fill 
//     // if(textObject.fill.r < 255){
//     //     textObject.fill.r += 0.1; 
//     //     textObject.fill.g += 0.1; 
//     //     textObject.fill.b += 0.1; 
        
//     // }
//     pop();  
// }

// function makeTextObject(textObject){
//     let textObject = {
//         thickness: 1,
//         fill: {
//             r: 0, 
//             g: 0,
//             b: 0,
//             a: 250
//         },
//         vel: 0.001,
//         acc: 0.0015
//     };
// }