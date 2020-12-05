var paper;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
  paperImg=loadImage("paper.png");
  dustbinImg=loadImage("dustbingreen.png");
}
function setup() {
	createCanvas(1600, 700);

	  engine = Engine.create();
    world = engine.world;
    ground=new Ground(width/2,680,width,20);

    rect1=createSprite(1350,655,200,30);    
  	rect1.shapeColor="yellow";
  
    rect2=createSprite(1250,570,30,200);    
  	rect2.shapeColor="yellow";
  
    rect3=createSprite(1450,570,30,200);    
	  rect3.shapeColor="yellow";
  
    paper=new Paper(100,655,30);
    paper.addImage(paperImg);

	Engine.run(engine);  
}
function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  drawSprites();
}
function keyPressed(){
  if (keyCode ===UP_ARROW) {

  Matter.Body.applyForce(paper.body,paper.body.position,{x:55,y:-55})

   }
  }