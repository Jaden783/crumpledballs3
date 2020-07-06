var paperSprite,paperImg;
var paper,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){

paperImg = loadImage("paper.png")

}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	paperSprite=createSprite(width/2, 600, 60,60);
	paperImg = image(paperImg)
	paperSprite.scale=0.2

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	createDustbin();


	paper = Bodies.circle(width/2 , 600 , 5 , {restitution:0.2, isStatic:false ,friction:0.5, density:1.2});
	World.add(world, paper);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperSprite.x= paper.position.x 
  paperSprite.y= paper.position.y 
  drawSprites();
 
}


  function keyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paperBody,paperBody.position,{x:85,y:-85});

	}


  }

  function createDustbin(){



	boxRightSprite = createSprite(550,600,20,100)
	boxRightBody = Bodies.rectangle(570,600,20,100,{isStatic : true});
	
	boxLeftSprite = createSprite(350,600,20,100)
	boxLeftBody = Bodies.rectangle(370,600,20,100,{isStatic : true});

	boxBaseSprite = createSprite(450,650,200,20)
	boxBaseBody = Bodies.rectangle(450,630,200,20,{isStatic : true});
	
	boxRightSprite = loadImage("dustbingreen.png")
	boxLeftSprite = loadImage("dustbingreen.png")
	boxBaseSprite = loadImage("dustbingreen.png")


  }
