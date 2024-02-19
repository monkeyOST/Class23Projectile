
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world
var ball
var ground
var rightWall
var leftWall
function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	options = {
		isStatic:true
	
	}
	ball_options = {
		restitution:1
	}
	ground = Bodies.rectangle(750,700,1500,50,options)
	World.add(world,ground)
	ball = Bodies.circle(200,10,30,ball_options)
	World.add(world,ball)
	leftRect= Bodies.rectangle(1100,600,35,160,options)
	rightRect= Bodies.rectangle(850,600,35,160,options)
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background(0);
  fill ("yellow")
  rect(ground.position.x,ground.position.y,1500,50)
	ellipse(ball.position.x,ball.position.y,30,30)
	rect(leftRect.position.x,leftRect.position.y,35,160)
	rect(rightRect.position.x,rightRect.position.y,35,160)
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:0.1,y:-0.1})

	}


}

