
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var leftside, rightside;



function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:100,
		density:1.2
	}

	fill ("yellow");
	ball = Bodies.circle(250,150,30,ball_options);
	World.add(world,ball);

	ground = new Ground(width/2,650,width,20);
	leftside = new Ground(1100,600,10,120);
	rightside = new Ground(1300,600,10,120);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.show();
  leftside.show();
  rightside.show();

  ellipse(ball.position.x, ball.position.y,30);

  keyPressed();
  Engine.update(engine);


  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:12.1,y:-12.1});
	}
}

