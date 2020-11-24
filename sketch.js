
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var score;
var ground;
var bananaGroup;
var obstacleGroup;


function preload(){
  
  
  monkey_running =  loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400, 400)
  
  monkey = createSprite(50,350,10,50);
  
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1; 
  
  ground = createSprite(200,380, 800,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;

  bananaGroup = new Group();
  obstacleGroup = new Group();
  score = 0;
}


function draw() {
background(255);
  
 if(keyDown("space") && monkey.y  >= 344.3){
    
    monkey.velocityY = -15
    
  }
 
  monkey.velocityY = monkey.velocityY + 0.8
  obstacles();
  spwanBanana();
  if(obstacleGroup.isTouching(monkey)){
  
    monkey.velocityY = 0;
    bananaGroup.setLifetimeEach(-1);
    obstacleGroup.setLifetimeEach(-1);
    ground.velocityX = 0;
    bananaGroup.setVelocityXEach(0);
    obstacleGroup.setVelocityXEach(0);
    score = 0;
    
  }
  
 
  textSize(20);
  text("SURVIVAL TIME:" + score , 100, 30);
  score = score + Math.round(getFrameRate()/60);
  if(ground.x<0){
    
    ground.x = ground.width/2;
    
  }
 
  monkey.collide(ground);  
  console.log(monkey.y);
  
  drawSprites();
}
 function obstacles(){
   if(frameCount % 200===0){
     
     obstacle = createSprite(400,348,10,50);
     obstacle.addImage(obstacleImage);
     obstacle.scale = 0.15;
     obstacle.velocityX = -10;
     obstacle.lifetime = 150;
     obstacleGroup.add(obstacle);
   }
   
   
 }
function spwanBanana(){
  
  
  if (frameCount % 60 ===0){
    
    banana = createSprite(600,120,10,10);
    banana.addImage(bananaImage);
    banana.y = Math.round(random(70,240));
    banana.velocityX = -5;
    banana.scale = 0.07
    bananaGroup.add(banana);
    
  }
   
  
  
}




