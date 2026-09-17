/**
 * Instructions Challenge
 * Owen Dobson
 * 
 * Flower Development... it grows! 
 */

"use strict";

function setup() {
    createCanvas(1080, 200);
}

function draw() {
    background(177, 245, 252);
    
    // Base of neon Grass
    fill(194, 240, 5);
    noStroke();
    rect(0, 180, 1080, 566);

    // Sequence of Flowers
    firstFlow();
    secondFlow();
    thridFlow();
    fourthFlow();
    fifthFlow();

}

function firstFlow(){
    fill(179, 200, 99);
    triangle(180, 180, 173, 175, 178, 170);
    fill(156, 196, 90);
    triangle(180, 180, 183, 178, 184, 170);
}

function secondFlow(){
    fill(181, 205, 96);
    triangle(360, 180, 357, 160, 350, 166);
    fill(157, 186, 92);
    triangle(360, 180, 366, 170, 370, 171);
}

function thridFlow(){
    fill(190, 214, 92);
    triangle(540, 180, 532, 145, 528, 160);
    fill(160, 189, 90);
    triangle(540, 180, 555, 156, 561, 169);
    fill(170, 200, 87);
    triangle(540, 180, 538, 160, 541, 164);
    fill(237, 116, 200);
    ellipse(538, 160, 3)
}

function fourthFlow(){
    fill(190, 214, 92);
    triangle(720, 180, 713, 135, 708, 148);
    fill(160, 189, 90);
    triangle(720, 180, 733, 140, 741, 151);
    fill(170, 200, 87);
    triangle(720, 180, 718, 150, 722, 144);
    fill(237, 116, 200);
    ellipse(722, 144, 8)
}

function fifthFlow(){
    fill(190, 214, 92);
    triangle(900, 180, 887, 120, 880, 138);
    fill(200, 234, 110);
    triangle(870, 164, 887, 120, 885, 144);
    fill(160, 189, 90);
    triangle(900, 180, 910, 118, 918, 136);
    fill(160, 189, 90);
    triangle(900, 180, 910, 118, 918, 136);
    fill(178, 220, 98);
    triangle(933, 164, 910, 118, 913, 138);
    fill(170, 200, 70);
    triangle(900, 180, 904, 118, 898, 100);
    fill(219, 81, 170);
    ellipse(894, 104, 7)
    fill(235, 101, 187);
    ellipse(903, 105, 7)
    fill(237, 116, 200);
    ellipse(898, 100, 10)
}