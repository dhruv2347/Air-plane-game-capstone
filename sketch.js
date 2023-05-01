var PLAY=1;
var END=0
var gameState=PLAY;
var plane,planeImg
var cloud,cloudImg
var droneImg
var birdImg
var trImg
var liImg
var boomImg
var obstacleGroup


function preload(){
 planeImg=loadImage("A1.png")
cloudImg=loadImage("cloud.jpg")
droneImg=loadImage("drone.png")
birdImg=loadImage("bird.png")
trImg=loadImage("tornadow.png")
liImg=loadImage("lightning.png")
boomImg=loadImage("boom.png")
}

function setup(){
 createCanvas(2000,1000)

 cloud=createSprite(1000,500,2000,1000)
 cloud.addImage(cloudImg)
 cloud.scale=4.5

 plane=createSprite(100,500,10,10)
 plane.addImage(planeImg)
 plane.addAnimation(boomImg)
 plane.changeImage(planeImg)
 plane.scale=0.5

 ground=createSprite(1000,989,2000,20)
 ground.shapeColor="green"

 obstacleGroup=createGroup()
}

function draw(){
  background("black")
  if(gameState===PLAY)
  {
    if(keyDown("up_arrow")&& plane.y>=250){
      plane.velocityY=-10
    }
    plane.velocityY=plane.velocityY+0.5

 
    if(obstacleGroup.isTouching(plane)){
      gameState=END
    }
    spawnObstacles()
  }
  else if(gameState===END)
  {
plane.velocityY=0
obstacleGroup.setVelocityXEach(0)
  }
  
  
  plane.collide(ground)

 
drawSprites()
}

function spawnObstacles(){
  if(frameCount%150===0){
  var obstacle=createSprite(1000,random(300,700),20,20)
  obstacle.velocityX=-5
  obstacle.scale=0.3
  var rand=Math.round(random(1,4))
  switch(rand){
    case 1:obstacle.addImage(birdImg)
    break;
    case 2:obstacle.addImage(droneImg)
    break;
    case 3:obstacle.addImage(trImg)
    break;
    case 4:obstacle.addImage(liImg)
    break;
    default:break
  }
  obstacleGroup.add(obstacle)
}
}
