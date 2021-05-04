
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1,ground2;
var block1, block2,block3,block4,block5,block6,block7;
var block8, block9, block10,block11,block12;
var block13, block14,block15;
var block16, block17, block18,block19,block20;
var block21, block22, block23;
var block24, block25;
var base;

var polygon, polygonImage;
var slingshot1;

var bg = "light.jpg";
var backgroundImg;

var score=0;

function preload(){
    getBackgroundImage();
    polygonImage = loadImage("polygon.png");    
}

function setup() {
    createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    base = new ground(600,590,1200,20);
    ground1 = new ground(420,400,340,20);
    ground2 = new ground(880,300,260,20);
    
    //creating level 1 blocks for ground 1
    block1 = new block(300,370,35,40);
    block2 = new block(340,370,35,40);
    block3 = new block(380,370,35,40);
    block4 = new block(420,370,35,40);
    block5 = new block(460,370,35,40);
    block6 = new block(500,370,35,40);
    block7 = new block(540,370,35,40);

     //creating level 2 blocks for ground 1
     block8 = new block(340,320,35,40);
     block9 = new block(380,320,35,40);
     block10 = new block(420,320,35,40);
     block11 = new block(460,320,35,40);
     block12 = new block(500,320,35,40);

    //creating level 3 blocks for ground 1
     block13 = new block(380,280,35,40);
     block14 = new block(420,280,35,40);
     block15 = new block(460,280,35,40);

    //creating level 4 blocks for ground 1
     block16 = new block(420,240,35,40);

    //creating level 1 blocks for ground 2  
     block17 = new block(800,270,35,40);
     block18 = new block(840,270,35,40);
     block19 = new block(880,270,35,40);
     block20 = new block(920,270,35,40);
     block21 = new block(960,270,35,40);
     
    //creating level 2 blocks for ground 2  
     block22 = new block(840,230,35,40);
     block23 = new block(880,230,35,40);
     block24 = new block(920,230,35,40);

    //creating level 3 blocks for ground 2  
     block25 = new block(880,190,35,40);

     //creating polygon
     polygon = Bodies.circle(100,300,20);
     World.add(world, polygon);

     //creating slingshot
     slingshot1 = new slingshot(this.polygon, {x:100,y:300});
    

}
function draw() {
    Engine.update(engine);

    if(backgroundImg){
        background(backgroundImg);
    }
    

    //displaying score
    textSize(25);
    fill("lightyellow");
    text("score:"+score,1000,40); 

    //displaying text
    textSize(20);
    fill("lightyellow");
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

    ground1.display();
    ground2.display();
    base.display();

    //displaying polygon
    imageMode(CENTER);
    image(polygonImage, polygon.position.x,polygon.position.y,50,50);

    //displaying level 1 blocks of ground 1
    fill("skyblue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    
    //displaying level 2 blocks of ground 1
    fill("peach");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    //displaying level 3 blocks of ground 1
    fill("lightgreen");
    block13.display();
    block14.display();
    block15.display();
   
    //displaying level 4 blocks of ground 1
    fill("gray");
    block16.display();

    //displaying level 1 blocks of ground 2
    fill("peach");
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();

    //displaying level 2 blocks of ground 2
    fill("lightgreen");
    block22.display();
    block23.display();
    block24.display();

     //displaying level 3 blocks of ground 2
     fill("gray");
     block25.display();

     //displaying slingshot
     slingshot1.display();

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();

    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();
    block22.score();
    block23.score();
    block24.score();
    block25.score();


    
 
}

function mouseDragged(){
    
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingshot1.fly();
}

function keyPressed(){
    if(keyCode===32){
        Matter.Body.setPosition(this.polygon,{x:100,y:300});
        slingshot1.attach(this.polygon);
    }
}

async function getBackgroundImage(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11, 13);

    if(hour >= 6 && hour <= 18){
        bg = "light.jpg";
    }
    else{
        bg = "dark.jpg";
    }
    backgroundImg = loadImage(bg);

}