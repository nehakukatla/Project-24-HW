const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper, ground1, d1, d2, d3;

function setup(){
	var canvas = createCanvas(1000, 400);
	engine = Engine.create();
	world = engine.world;

    var paper_options = {
      isStatic: false,
  	  restitution: 0.3,
  	  friction: 0.5,
  	  density: 1.2
	}
	
	paper= Bodies.circle(100,300,15,paper_options);
	fill("pink");
	World.add(world,paper);
	ground1 = new Ground(500,390,1000,20);
	d1= new Dustbin(728, 340, 16, 80);
	d2= new Dustbin(872, 340, 16, 80);
	d3= new Dustbin(800, 372, 160, 16);

	
	Engine.run(engine);	
}


function draw() {
  background(0);
  Engine.update(engine);
  ellipseMode(RADIUS);
  ellipse(paper.position.x, paper.position.y, 15, 15);
  ground1.display();
  d1.display();
  d2.display();
  d3.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper,paper.position,{x:40,y:-40});
	}
}