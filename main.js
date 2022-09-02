img="";
statuses='';
function preload(){
    img=loadImage('dog_cat.jpg');
}
function setup(){
    canvas=createCanvas(640,420,0,0);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML="Status: Detecting objects";
}
function draw(){
    image(img,0,0,640,420);
    fill("red");
    textSize(18);
    text("Dog",60,65);
    noFill();
    stroke("red");
    rect(50,50,400,360);
    fill("red");
    textSize(18);
    text("Cat",350,100);
    noFill();
    stroke('red');
    rect(300,75,300,325);
}
function modelLoaded(){
    console.log('Model has Loaded');
    statuses=true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results){
    if (error){
        console.error(error);
    }    
    else{
        console.log(results);
    }
}