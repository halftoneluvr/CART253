/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let mouseTriggerBall ={
    x:200,
    y:200,
    size:50,
    speed:0,
    fill:{
        r: 100,
        g: 100, 
        b: 100
    }
}

function setup() {
    createCanvas(500,500);
    background(0);

}

function draw() {
    background(0);
    fill(mouseTriggerBall.fill.r, mouseTriggerBall.fill.g, mouseTriggerBall.fill.b);
    ellipse(mouseTriggerBall.x, mouseTriggerBall.y, mouseTriggerBall.size);
}

function moveBall(){
    mouseTriggerBall.x += mouseTriggerBall.speed;
}

function mousePressed(){
    mouseTriggerBall.speed = 2;
}

function mouseReleased(){
    mouseTriggerBall.speed = 0;
}

function mouseWheel(event){
    mouseTriggerBall.size = constrain(mouseTriggerBall.size, 5, 200);
    mouseTriggerBall.size -= event.deltaY;
}