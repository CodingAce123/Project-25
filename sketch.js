const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Dustbin,Paper,Ground	
var world;

function setup(){
createCanvas(1400,700);
rectMode(CENTER);

engine = Engine.create();
world = engine.world;
	
Dustbin = new dustbin(1200,650);
Paper = new paper(250,450,70);
Ground = new ground(width/2,670,width,20);
	
Engine.run(engine);
}

function draw(){
rectMode(CENTER);
background(230)
 
Dustbin.display();
Paper.display();
Ground.display();
}

function keyPressed(){
if(keyCode === UP_ARROW){
Matter.Body.applyForce(Paper.body , Paper.body.position,{
x:130,y:-145
})
}
}





