const Engine = Matter.Engine;

const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var blower,ball,blowerMouth
var btn



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  ball=new Ball(50,50)
  blower=new Blower(150,250,20,50)
  blowerMouth=new Blowermouth(100,200,50,50)
btn.createButton('click to blow')
btn.position(width/2,height-100)
btn.class('blowButton')
btn.mousePressed(blow)


}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  ground.show();
  drawSprites();
  ball.show()
  blower.show()
  blowerMouth.show()
}




function blow(){
  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.05})
}