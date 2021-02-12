


var ballon,balloonImg
var backgroundImg,backgr
var canvas


function preload(){
  balloonImg=loadImage("Hot Air Ballon-02.png")
  backgroundImg=loadImage("Hot Air Ballon-01.png")
}




function setup() {
  canvas=createCanvas(1000,600);


  ballon=createSprite(400, 200, 10, 10);
  ballon.addImage(balloonImg)
  ballon.scale=0.5

  
 
  
}

function draw() {
  background(backgroundImg); 
  if(keyDown(LEFT_ARROW)){
    ballon.x=ballon.x-1
  }
  else if(keyDown(RIGHT_ARROW)){
   ballon.x=ballon.x+1
  }
  else if(keyDown(UP_ARROW)){
     ballon.y=ballon.y-1
  }
  else if(keyDown(DOWN_ARROW)){
    ballon.y=ballon.y+1
  }
  drawSprites();
}