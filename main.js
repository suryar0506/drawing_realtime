var noseX = 0;
var noseY = 0;

var leftWristX = 0;
var rightWristX = 0;
var difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',getPoses);
}

function draw(){
    background('#969A97');
    fill('#FF69B4');
    stroke('#FF69b4');
    square(noseX, noseY, difference);
}

function modelLoaded(){
    console.log("The model is ready to roll!");
}

function getPoses(results){
    if(results.length > 0){
console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
console.log("Nose X = " + noseX + " Nose Y = " + noseY);

leftWristX = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.rightWrist.x;
difference = floor(leftWristX - rightWristX);
console.log("Left Wrist X = " + leftWristX + " Right Wrist X = " + rightWristX + "Difference between the 2 = " + difference);
document.getElementById("width_display").innerHTML = difference;
    }
}