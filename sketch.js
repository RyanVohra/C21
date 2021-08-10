const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball
var button1, button2

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

 
  button1=createImg("right.png")
  button1.position(200,200)
  button1.size(50,50)
  button1.mouseClicked(Hforce) 

  button2=createImg("up.png")
  button2.position(200,300)
  button2.size(50,50)
  button2.mouseClicked(Vforce) 

  rectMode(CENTER);
  ellipseMode(RADIUS);
  var ballops={
    restitution:0.8
  }
  ball=Bodies.circle(200,200,10,ballops)
  World.add(world,ball)
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ellipse(ball.position.x,ball.position.y,10)
  Engine.update(engine);
}

function Hforce(){

Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})

}

function Vforce(){

  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
  
  }

