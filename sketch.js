var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
  
	ball=new Ball();
	bin1=new Bin(710,650,10,70);
	bin2=new Bin(660,680,95,10);
	bin3=new Bin(620,650,10,70);
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  bin1.display();
  bin2.display();
  bin3.display();

  keyPressed();

  drawSprites();
 
}

function keyPressed(){

	if(keyDown==UP_ARROW){
		
		Matter.Body.applyForce(ball.body,ball.body.position,{x:2,y:-2})

	}

}

