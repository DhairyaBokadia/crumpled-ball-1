class Ball{
     constructor(){
        var options={
      restitution:0.3,
          friction:0.5,
          density:1.2
        }
        this.body=Bodies.circle(140,650,20,options);
        this.radius=20

        World.add(world,this.body)
     }
     display(){
         rectMode(CENTER)
         var pos=this.body.position
         circle(140,650,20);
         fill("green");
     }
}