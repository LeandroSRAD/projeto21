
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1500,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     var ballOptions={
		 isStatic: false,
		 restitution:0.3,
		 friction:0,
		 density:1.2, 
	 }

	 ground = new Ground(width/2,670,width,20);
	 leftSide = new Ground(1100,600,20,120);
	 rightSide = new Ground(1300,600,20,120);
	 

	 ball = Bodies.circle(200,100,20,ballOptions);
	 World.add(world,ball);
	 rectMode(CENTER);
	 ellipseMode(RADIUS);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  ground.display();
  leftSide.display();
  rightSide.display();
  
  
  fill("white");
  ellipse(ball.position.x,ball.position.y,20);
  
  
  
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball,{x:5,y:5},{x:80,y:130});
  }
}



