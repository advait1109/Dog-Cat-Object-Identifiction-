img="";
function preload(){
    img=loadImage('dog_cat.jpg');
}
function setup(){
    canvas=createCanvas(640,420,0,0);
    canvas.center();
}
function draw(){
    image(img,0,0,640,420);
    fill("red");
    textSize(18);
    text("Dog",60,65);
    noFill();
    stroke("red");
    rect(50,50,400,360);
}