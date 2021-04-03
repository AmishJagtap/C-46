var boy,laser,hallway,boyImage,laserImage,hallwayImage

function preload(){

boyImage = loadImage("sprites/boy.png.png");
laserImage = loadImage("sprites/laser.png.png");
hallwayImage = loadImage("sprites/Hallway.png.png");

}

function setup() {
createCanvas(1500,800);

bg = createSprite(700,350,1500,800);
bg.addImage(hallwayImage);
bg.scale = 5.5;

boy = createSprite(200,100,20,20);
//boy.debug = true
boy.addImage(boyImage);
boy.setCollider("rectangle",0,0,200,200);

laserGroup = new Group();

ground = createSprite(750,750,1500,20);

  } 
  
function draw() {
  background(0);
bg.velocityX = -10
 if(bg.x < 0){
 bg.x = 900;
 }

 if(keyDown("up")){
boy.velocityY = -15;
 }
 boy.velocityY = boy.velocityY + 2; 
 
 boy.collide(ground);

spawnLaser();
  drawSprites();
}

function spawnLaser(){

if(frameCount % 120===0){

laser = createSprite(1500,Math.round(random(60,180)),10,10);
laser.velocityX = -15;
laser.addImage(laserImage);
laser.scale = 0.5;
laser.lifetime = 100;

laser.depth = boy.depth;
boy.depth = boy.depth+1;

laserGroup.add(laser);

}
}
