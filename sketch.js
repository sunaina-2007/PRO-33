const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var snow, snow1,snow2,snow3,snow4;

var engine, world;
var snow =[];
var rand,drops;

var maxDrops=20;

var snowCreatedFrame=0;
var bgImg;


function setup() {
  engine = Engine.create();
    world = engine.world;

    createCanvas(displayWidth,displayHeight);    
    bgImg = loadImage("snow3.jpg");
    //creating drops
    if(frameCount % 75 === 0){

        for(var i=0; i<maxDrops; i++){
            snow.push(new Snowflakes(random(0,displayWidth), random(0,displayWidth)));
        }

    }
    
}



function draw() {
  
  Engine.update(engine);
    
  background(bgImg); 
    for(var i = 0; i<maxDrops; i++){
        snow[i].showDrop();
        snow[i].updateY();
    }

    drawSprites();

}