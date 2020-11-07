const Engine=Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ball,ground;

function setup(){
    createCanvas(400,400);

    engine=Engine.create();
    world=engine.world;

    var options={
       isStatic:true
    }

    var options1={
        restitution:1.0
    }

    ground=Bodies.rectangle(200,370,400,30,options);
    World.add(world,ground);

    ball=Bodies.circle(200,50,40,options1);
    World.add(world,ball);
 
}

function draw(){

    background("black");

    Engine.update(engine);

    rectMode(CENTER);
    ellipseMode(CENTER);
    fill("Green");
    rect(ground.position.x,ground.position.y,400,30);
    fill("Pink");
    ellipse(ball.position.x,ball.position.y,40);

    drawSprites();
    
}