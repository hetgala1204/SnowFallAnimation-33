const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var snow,snowImage;
var engine,world;
function preload(){
 snowImage=loadImage("snow3.jpg") 
}

function setup() {
  createCanvas(1200,800);
 
  engine = Engine.create();
    
  world = engine.world;
  snow1=new Snow(10,10,80,80)
  snow2=new Snow(40,25,80,80)
  snow3=new Snow(80,90,80,80)
  snow4=new Snow(120,170,80,80)
  snow5=new Snow(160,75,80,80)
  snow6=new Snow(200,200,80,80)
  snow7=new Snow(240,150,80,80)
  snow8=new Snow(280,300,80,80)
  snow9=new Snow(320,240,80,80)
  snow10=new Snow(360,270,80,80)
  snow11=new Snow(400,290,80,80)
  snow12=new Snow(440,235,80,80)
  snow13=new Snow(480,290,80,80)
  snow14=new Snow(520,530,80,80)
  snow15=new Snow(560,70,80,80)
  snow16=new Snow(600,500,80,80)
  snow17=new Snow(700,570,80,80)
  snow18=new Snow(650,520,80,80)
  snow19=new Snow(750,340,80,80)
  snow20=new Snow(800,380,80,80)



  

}

function draw() {
  background(snowImage); 
  Engine.update(engine); 
   snow1.display();
   snow2.display();
   snow3.display();
   snow4.display();
   snow5.display();
   snow6.display();
   snow7.display();
   snow8.display();
   snow9.display();
   snow10.display();
   snow11.display();
   snow12.display();
   snow13.display();
   snow14.display();
   snow15.display();
   snow16.display();
   snow17.display();
   snow18.display();
   snow19.display();
   snow20.display();



   

  drawSprites();
}