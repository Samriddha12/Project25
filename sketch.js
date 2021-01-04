
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,600,width,20);
	dustbin = new Dustbin(900,400,50,50);
	//dustbin1= new Dustbin(1030,510,15,130);
	//dustbin2= new Dustbin(1140,570,200,10);
	//dustbin3= new Dustbin(1240,510,15,130);
	paper= new Paper(200,450,40,40);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
 //dustbin1.display();
// dustbin2.display();
// dustbin3.display();
  paper.display();
  ground.display();
  dustbin.display();
}

function keyPressed(){
	if(keyCode===UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:82,y:-82});
	}
}

