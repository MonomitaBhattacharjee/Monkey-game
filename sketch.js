var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score , survivalTime;

function preload(){
  
    monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

    bananaImage = loadImage("banana.png");
    obstaceImage = loadImage("obstacle.png");

}



function setup() {
     createCanvas(600 , 450);

    //creating the monkey
    monkey = createSprite(80 , 315 , 20 , 20);
    monkey.addAnimation("moving" , monkey_running);
    monkey.scale = 0.1;

    //creating the ground
    ground = createSprite(400 , 350 , 900 , 10)
    ground.velocityX = -4;
    ground.x = ground.width/2;
    console.log(ground.x);

    //creating the groups
    bananaGroup = createGroup();
    obstacleGroup = createGroup();

    score = 0;
    survivalTime = 0;

}


function draw() {
    background(225);

   //reseting the ground
    if(ground.x > 0){
      ground.x = ground.width / 2;
    }

   // making the monkey jump
    if(keyDown("space") && monkey.y >= 100 ){
      monkey.velocityY = -12;
    }

    //giving gravity
    monkey.velocityY = monkey.velocityY + 0.8;

    //making the monkey collided with the ground
    monkey.collide(ground);


    //displaying score
    stroke("white");
    textSize(20);
    fill("white");
    text("Score : " + score , 500 , 50);

    //displaying the survival time
    stroke("black");
    textSize(20);
    fill("black");
    survivalTime = Math.ceil(frameCount / frameRate());
    text("Survival Time : " + survivalTime , 100 , 50);

    drawSprites();


    Banana();
    Obstacle();


 }
function Banana(){
     if(frameCount % 80===0){
      banana= createSprite(600,300,20,20);
      banana.y=Math.round(random(120,200));
      banana.addImage("banana" , bananaImage);
      banana.scale=0.1;
      banana.velocityX=-4;
      banana.lifetime= 300;
      bananaGroup.add(banana);
     }

}

function Obstacle(){
    if(frameCount % 300===0){
      obstacle= createSprite(400 , 310 , 20 , 20);
      obstacle.addImage("obstacle" , obstaceImage);
      obstacle.scale=0.2;
      obstacle.velocityX=-5;
      obstacle.lifetime=300;
      obstacleGroup.add(obstacle);
     }

  
}