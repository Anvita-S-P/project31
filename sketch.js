
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var particle=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;




function setup() {
  createCanvas(480,800);
  engine = Engine.create();
   world = engine.world;

   ground = new Ground(240,788,480,10);
    

  

  for(var k=0;k<=width;k=k+80) {
    divisions.push(new divisions(k,height-divisionHeight/2,10,divisionHeight));
  }

 for(var j=40;j<=width;j=j+50){
   plinkos.push(new Plinko(j,75));
 }
 for (var j=15;j<=width-10;j=j+50){
   plinkos.push(new Plinko(j,175));
 }

 if(frameCount%60===0){
  particle.push(new Particle(random(width/2-10,width/2+10),10,10));
}


}

function draw() {
  background(0);  
  drawSprites();
  ground.display();
   
  for(var j=0;j<particles.length;j++){
    particles[j].display();
  }

  for(var k=0;k<particles.length;k++){
    divisions[k].display();
  }
  
}