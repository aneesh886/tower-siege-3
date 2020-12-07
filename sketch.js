const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var  block8, block9;
var block10,block11,block12, block13, block14;
var player;
var ground1, ground2, ground3;

var block15, block16;
var sling;


var polygon;
var img;

var score=0;

function preload(){
  img = loadImage("polygon.png");
}

function setup() {
  createCanvas(1500,600);
  engine = Engine.create();
    world = engine.world;

  block8 = new Block(615,220,30,40);
  block9 = new Block(645,220,30,40);



  block10 = new Block(600,170,30,40);
  block11 = new Block(570,180,30,40);
  block12 = new Block(630,180,30,40);


  block13 = new Block(600,140,30,40);

  ground1 = new Ground(600,285,200,10);
  ground2 = new Ground(900,195,200,10);
  ground3 = new Ground(750, 600, 1500, 10)


  block14 = new Block(900,170,30,40);
  block15 = new Block(930,170,30,40);
  block16 = new Block(870,170,30,40);
  

  polygon = Bodies.circle(50,200,20);
  World.add(world,ball);

  sling = new Chain(this.ball,{x:150, y:160});
}


function draw() {
  
  Engine.update(engine);

  text("SCORE :" + score, 650, 40);

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();


  block6.display();
  block7.display();
  block8.display();
  block9.display();

  block10.display();
  block11.display();
  block12.display();
  

  block13.display();

 
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();


  block19.display();
  block20.display();
  block21.display();
  

  block22.display();

  ground1.display();
  ground2.display();
  ground3.display();

  imageMode(CENTER);
  image(img,ball.position.x,ball.position.y,40,40);

  sling.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}
