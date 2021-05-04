class block{

    constructor(x,y,width,height){
        var ground_options={
            restitution :0.4,
            friction :0.0
        }
          this.visibility = 255;
          this.body = Bodies.rectangle(x,y,width,height,ground_options)
          this.width = width;
          this.height= height;
          World.add(world,this.body);
    }
    display(){
        if(this.body.speed<3){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(2);
        stroke(15);
        rectMode(CENTER);
        rect(0, 0,this.width,this.height);
        pop();
        }
        else{
            World.remove(world,this.body);
            push();
            this.visibility = this.visibility-5
            pop();

        }
    }
    score(){
        if(this.visibility<0 && this.visibility>-100){
           score++
        }
        
    }
}