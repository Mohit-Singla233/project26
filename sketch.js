
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

	//Create the Bodies Here.
	roof = new Roof(400,50,500,20);
	bob1 = new Bob(200,350,40);
	bob2 = new Bob(280,350,40);
	bob3 = new Bob(360,350,40);
	bob4 = new Bob(440,350,40);
	bob5 = new Bob(520,350,40);

	rope1 = new Rope(bob1.body, roof.body, -160,0)
	rope2 = new Rope(bob2.body, roof.body, -80,0)
	rope3 = new Rope(bob3.body, roof.body, 0,0)
	rope4 = new Rope(bob4.body, roof.body, 80,0)
	rope5 = new Rope(bob5.body, roof.body, 160,0)

	Engine.run(engine);
  var render = Matter.Render.create({ element: document.body, engine : engine, options : { width : 800, height : 700, showAngleIndicator : true, wireframes : true } }) 
  Matter.Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background(0,255,0);
  
  drawSprites();
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-500, y:-500});
	}
}




