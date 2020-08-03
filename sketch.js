const Engine=Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var particles =[];
var plinkos = [];
var divs =[];
var divisionHeight=350;
var score=0;


function setup() {
  createCanvas(480,800);
  engine=Engine.create();
  world =engine.world;

  ground1= new Ground(width/2,height,width,20);

    for(var d=0;d<=width;d=d+80){
      divs.push(new Divisions(d,height-divisionHeight/2,10,divisionHeight));
    }

    for (var j = 55; j <=width; j=j+45) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 30; j <=width-10; j=j+40) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 55; j <=width; j=j+40) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 30; j <=width-10; j=j+40) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
  
}

function draw() {
  background(10);  
  Engine.update(engine);
  fill("white");
  text( +score,240,20);
  //ground
  ground1.display();
  for (var d = 0; d < divs.length; d++) {
      divs[d].display();
  }
//plinkos
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }

  if(frameCount%60===0){
    particles.push(new Particles(random(width/2-30, width/2+30), 10,10));
    score++;
  }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }

}