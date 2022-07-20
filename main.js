xx=0;
yy=0;

function preload(){
i1=loadImage("2.jpeg");
}
function setup(){
canvas=createCanvas(600,425);
canvas.center();
canvas.position(187,130);
video=createCapture(VIDEO);
video.size(600,425);
video.hide();
pn=ml5.poseNet(video, ml);
pn.on('pose', n);

}
function draw(){
image(video, 0, 0, 600, 425);
image(i1, xx, yy-80, 200, 200);
function ts(){
    save(mustache.png);
}
function ml(){
    console.log("posenet initialized");
}
function n(results){
    if(results.length>0){
        console.log(results);
        xx=results[0].pose.nose.x;
        yy=results[0].pose.nose.y;
        console.log("nose-x="+xx);
        console.log("nose-y="+yy);
    }
}