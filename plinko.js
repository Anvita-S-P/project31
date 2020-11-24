class Plinko{
    constructor(x,y,w,h){

    
    var  options={
         isStatic:true,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }

    this.body=Matter.Bodies.circle(x,y,10,options);
    World.add(world,this.body);

}

 display(){
     var pos=this.body.position;
     push ();
     ellipseMode(RADIUS);
     fill("white");
     ellipse(pos.x,pos.y,10);
     pop ();
 }

