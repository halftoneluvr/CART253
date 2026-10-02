/**
 * Prototyping Variables Drawings 3
 * Owen Dobson
 * 
 * Vaguely floral-esque abstract piece :) 
 * Navy and a lil hint of pink
 * Playing w/ rotation
 */

"use strict";

let waveOne ={
    x: 0,
    y: 0,
    v: 0,
    a: 0,
    t: 0.1,
    alpha: 0,
    angle: 0,
    fill: {
        r: 17,
        g: 17,
        b: 39
    }
}

let waveTwo ={
    x: 0,
    y: 0,
    v: 0,
    a: 0,
    t: 0.1,
    alpha: 0,
    angle: 0,
    fill: {
        r: 255,
        g: 0,
        b: 238
    }
}

// Setting up canvas and background
function setup() {
    createCanvas(225,225);
    background(255);
}

// Doing da drawings
function draw() {

    // Draws first wave
    drawWaveOne();

    //Draws second wave
    drawWaveTwo();
}

function drawWaveOne(){
    push();
    angleMode(DEGREES);
    rotate(waveOne.angle);
    waveOne.angle += 5
    waveOne.x += 0.25;
    waveOne.y = map(noise(waveOne.t), 0, 1, 0, height);
    waveOne.t += 1 
    noStroke();
    fill(waveOne.fill.r, waveOne.fill.g, waveOne.fill.b, waveOne.alpha);
    waveOne.alpha = map(noise(waveOne.t), 0, 1, 0, 50);
    rect(waveOne.x, waveOne.y, 10, height - waveOne.y);
    pop();
}

function drawWaveTwo(){
    push();
    angleMode(DEGREES);
    rotate(waveTwo.angle);
    waveTwo.angle += 1
    waveTwo.x += 0.25;
    waveTwo.y = map(noise(waveTwo.t), 0, 1, 0, height);
    waveTwo.t += 1 
    noStroke();
    fill(waveTwo.fill.r, waveTwo.fill.g, waveTwo.fill.b, waveTwo.alpha);
    waveTwo.alpha = 3
    rect(waveTwo.x, waveTwo.y, 10, height - waveTwo.y);
    pop();
}
