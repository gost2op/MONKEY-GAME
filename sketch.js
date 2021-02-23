
var monkey , monkey_running, ground;
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey = createSprite(80,315,20,20)
  monkey.addAnimation("monkeyRun",monkey_running)
  monkey.scale = 0.1
    
  foodGroup = createGroup()
  obstacleGroup = createGroup()
}


function draw() {
  
  background("lightblue")
  
  ground = createSprite(400,350,900,10)
  ground.velocityX = -4
  ground.x = ground.width/2
  console.log(frameCount)

  if(keyDown("space") && monkey.y > 270){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground)

  
  foods()
  enemies()
  
  drawSprites();
  
  score = 0;
  stroke("black")
  fill("white")
  textSize(20)
  score = Math.round(frameCount/frameRate())
  text("Survival Time : " + score,125,50);
}


function foods(){
  if(frameCount % 80 === 0){
    banana = createSprite(300,1,10,10)
    banana.addImage(bananaImage)
    banana.scale = 0.1
    banana.y = random(200,250)
    banana.velocityX = -4
    banana.lifetime = 200
    
    foodGroup.add(banana);
  }
}  
  
  
function enemies(){
  if(frameCount % 300 === 0){
    obstacle = createSprite(300,330,10,10)
    obstacle.addImage(obstacleImage)
    obstacle.scale = 0.1
    obstacle.velocityX = -4
    obstacle.lifetime = 200
    
    obstacleGroup.add(obstacle);
  }
}