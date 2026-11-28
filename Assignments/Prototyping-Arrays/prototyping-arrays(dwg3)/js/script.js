/**
 * Prototyping Arrays Drawing 3
 * Owen Dobson
 * 
 * Building a simple drawing tool
 */

"use strict";

let objects = [];

let hue = undefined;
let sat = undefined;
let light = undefined; 

let object={
    x: undefined,
    y: undefined, 
    fill:{
        h: hue,
        s: sat,
        l: light
    }
}


function setup() {
    createCanvas(225, 225);
    background(245);

    colorMode(HSL); // adjusts for use 

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

}