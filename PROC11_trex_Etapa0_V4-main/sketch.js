
var trex ,trex_running;
var edges;
function preload(){
 trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");

}

function setup(){
  createCanvas(600,200)
  //crear sprite de Trex
 trex=createSprite(50,160,20,50)
 trex.addAnimation("running",trex_running);
 edges=createEdgeSprites();
}

function draw(){
  background("white")
  if(keyDown("space") && trex.y >= 100){
  trex.velocityY=-10
  }
  trex.velocityY=trex.velocityY+0.8  
  
drawSprites();
}
