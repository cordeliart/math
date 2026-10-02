const body = document.querySelector("body");

var n = 3, arms = n*2;
var maxSteps = 5;
var armLength = 200*1.5**n;
var widths = [], heights = [];
var colorsR2 = [146,100,238,255,212,255], colorsR = [255,0,100,142,133,174],
    colorsG2 = [145,157,255,85,84,229], colorsG = [255,80,141,30,0,129],
    colorsB2 = [154,255,20,39,220,71], colorsB = [255,255,0,0,141,0];

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(RGB, 255);
    strokeWeight(2);
    calculate();
    recur(1, windowWidth/2, windowHeight/2, null);
}

function keyPressed() {
    if (key == 'ArrowUp') {
        var oldn = n;
        n = min(6,n+1);
        if (oldn != n) {
            background(13,13,17);
            calculate();
            recur(1, windowWidth/2, windowHeight/2, null);
        }
    } else if (key == 'ArrowDown') {
        var oldn = n;
        n = max(2,n-1);
        if (oldn != n) {
            background(13,13,17);
            calculate();
            recur(1, windowWidth/2, windowHeight/2, null);
        }
    }
}

function calculate() {
    arms = n*2;
    armLength = min(windowHeight,windowWidth)/4*1.5**n;
    widths = [];
    heights = [];
    for (let i = 0; i < arms; i++) {
        var angle = 2*PI*i/arms;
        widths.push(cos(angle));
        heights.push(sin(angle));
    }
}

function recur(step, centerX, centerY, included) {
    var scale = armLength*step;

    for (let i=0; i < arms; i ++) {
        if (included != i) {
            strokeWeight(maxSteps-step+1);
            if (i - n < 0) { stroke(colorsR[i],colorsG[i],colorsB[i]); }
            else { stroke(colorsR2[i%n],colorsG2[i%n],colorsB2[i%n]); }

            line(centerX, centerY, centerX + armLength*widths[i]/(n**step), centerY + armLength*heights[i]/(n**step));

            if (step < maxSteps) { recur(step+1, centerX + armLength*widths[i]/(n**step), centerY + armLength*heights[i]/(n**step), (i+n)%arms); }
        }
    }
}