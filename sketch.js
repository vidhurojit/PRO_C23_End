const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(200,height,400,20)
    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
}

/*STAGE 1 : Add pig1 and check*/
/*STAGE 2: Add log1 and check */
/*STAGE 3: Increase  canvas and ground width to 1200. Check and adjust accordingly*/
/*STGAE 4: First Level of Structure  : Create -Display -Check
         box1 = new Box(700,320,70,70);
         box2 = new Box(920,320,70,70);
         pig1=new Pig(810,350);
         log1=new Log(810,260,300,PI/2);  */

 /*STAGE 5:   Second Level of Structure :   Create -Display -Check
        box3 = new Box(700,240,70,70);
        box4 = new Box(920,240,70,70);
        pig2=new Pig(810,220);
        log2=new Log(810,180,300,PI/2);
   */
  /*   STAGE 5: Third Level of Structure :   Create -Display -Check
        box5=new Box(810,160,70,70);
        log3=new Log(760,120,150,PI/7);
        log4=new Log(870,120,150,-PI/7);  */
   /* STAGE 6: Slipping
            Chenge friction of box and log to 1.0*/     

  /* STAGE 7: Create the bird class and come back to this file
      bird=new Bird(100,100); */


