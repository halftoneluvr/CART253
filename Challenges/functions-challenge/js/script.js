/**
 * Functions Challenge 
 * Owen Dobson
 * 
 * The starting point for a ball-bouncing experience of
 * epic proportions!
 */

"use strict";

// Our ball
const ball = {
    x: 300,
    y: 20,
    width: 10,
    height: 10,
    velocity: {
        x: 0,
        y: 3
    },
    acceleration: 0.15
};

// second ball 
const ball2 = {
    x: 300,
    y: 20,
    width: 10,
    height: 10,
    velocity: {
        x: 0,
        y: 1.5
    },
    acceleration: 0.45
};

// Our paddle
const paddle = {
    x: 300,
    y: 280,
    width: 80,
    height: 10
};

/**
 * Create the canvas
*/
function setup() {
    createCanvas(600, 300);
}


/**
 * Move and display the ball and paddle
*/
function draw() {
    background("#f3f582");

    movePaddle(paddle);
    moveBall(ball);
    moveBall(ball2);

    handleBounce(ball, paddle);
    handleBounce(ball2, paddle);

    drawPaddle(paddle);
    drawBall(ball);
    drawBall(ball2);

    checkOverlap(paddle, ball);
    checkOverlap(paddle, ball2);
}

/**
 * Moves the paddle
 */
function movePaddle(paddle) {
    if(keyIsDown('a')){
        paddle.x -=3;
    }
    if(keyIsDown('d')){
        paddle.x +=3;
    }
}

/**
 * Moves the ball passed in as a parameter
 */
function moveBall(ball) {
    ball.y += ball.velocity.y;
    ball.velocity.y += ball.acceleration;
    if(ball.y >= height){
        ball.y = 20;
        ball.velocity.y = 3;
    }
}

/**
 * Bounces the provided ball off the provided paddle
 */
function handleBounce(ball, paddle) {
    if(checkOverlap(paddle, ball)){
        ball.velocity.y *= -1;
    }
     if(checkOverlap(paddle, ball2)){
        ball2.velocity.y *= -1;
    }
}

/**
 * Draws the specified paddle on the canvas
 */
function drawPaddle(paddle) {
    push();
    rectMode(CENTER);
    noStroke();
    fill("pink");
    rect(paddle.x, paddle.y, paddle.width, paddle.height);
    pop();
}

/**
 * Draws the specified ball on the canvas
 */
function drawBall(ball) {
    push();
    rectMode(CENTER);
    noStroke();
    fill("lightskyblue");
    rect(ball.x, ball.y, ball.width, ball.height);
    pop();
}

/**
 * Returns true if rectA and rectB overlap, and false otherwise
 * Assumes rectA and rectB have properties x, y, width and height to describe
 * their rectangles, and that rectA and rectB are displayed CENTERED on their
 * x,y coordinates.
 */
function checkOverlap(rectA, rectB) {
  return (rectA.x + rectA.width/2 > rectB.x - rectB.width/2 &&
          rectA.x - rectA.width/2 < rectB.x + rectB.width/2 &&
          rectA.y + rectA.height/2 > rectB.y - rectB.height/2 &&
          rectA.y - rectA.height/2 < rectB.y + rectB.height/2);
}