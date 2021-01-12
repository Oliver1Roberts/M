class Asteriod{ 
constructor(x,y,r){
    this.body=Bodies.circle(x,y,r, {isStatic:true});
    World.add(world,this.body);
    this.radius=r;
    this.image=loadImage("Asteriod.png");
}
    display(){
        push();
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius);
        pop();
    }
}
