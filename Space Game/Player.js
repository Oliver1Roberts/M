class Player{
    constructor(x, y, width, height){
        this.lives=3;
        this.index=null;
        var options={
            restitution:.5,
            isStatic: true
        }
        
        this.body=Bodies.rectangle(x, y, width, height, options);
        World.add(world,this.body);
    }

    

    Display(){
        push();
        if(keyDown(UP_ARROW)){
            this.body.position.y=this.body.position.y-5;
        }
        if(keyDown(DOWN_ARROW)){
            this.body.position.y=this.body.position.y+5;
        }
        if(keyDown(LEFT_ARROW)){
            this.body.position.x=this.body.position.x-5;
        }
        if(keyDown(RIGHT_ARROW)){
            this.body.position.x=this.body.position.x+5;
        }
        var pos = this.body.position;
        rectMode(CENTER);
        fill ("white");
        rect(pos.x,pos.y,50,50);
        pop();
    }
    
}