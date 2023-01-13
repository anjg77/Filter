noseX=0;
noseY=0;

function preload(){
   clown_nose=loadImage('https://i.postimg.cc/dQGYfbMk/m.jpg');
}

function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(500,500);
    video.hide();

    posenet=ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotPoses);
}

function modelloaded(){
    console.log('posenet is initialized');
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x-10;
        noseY=results[0].pose.nose.y+15;
        console.log("nose x = "+results[0].pose.nose.x);
        console.log("nose y = "+results[0].pose.nose.y);
    }
}

function draw(){
    image(video,0,0,500,500);
    image(clown_nose,noseX,noseY,30,30);
}

function take_snapshot(){
    save('picture.png');
}