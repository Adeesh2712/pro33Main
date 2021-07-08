const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg;
var boy1,ground1,snow1; 
var engine;
var world;

function preload() {
  getBackgroundImg();
}

function setup() {
  createCanvas(1200,700);

  engine = Engine.create();
  world = engine.world;
  
  boy1 =new Boy(500,250,100,100)
  ground1= new Ground(600,700,1600,10)

  snow1 = new Snow(100,150,10,10)
  snow2 = new Snow(150,200,10,10)
  snow3 = new Snow(200,300,10,10)
  snow4 = new Snow(250,180,10,10)
  snow5 = new Snow(300,310,10,10)
  snow6 = new Snow(350,250,10,10)
  snow7 = new Snow(400,100,10,10)
  snow8 = new Snow(450,140,10,10)
  snow9 = new Snow(500,210,10,10)
  snow10 = new Snow(550,300,10,10)
  snow11 = new Snow(600,280,10,10)
  snow12 = new Snow(650,170,10,10)
  snow13 = new Snow(700,210,10,10)
  snow14 = new Snow(750,100,10,10)
  snow15 = new Snow(800,130,10,10)
  snow16 = new Snow(850,90,10,10)
  snow17 = new Snow(900,120,10,10)
  snow18 = new Snow(950,250,10,10)
  snow19 = new Snow(1000,210,10,10)
  snow20 = new Snow(1050,170,10,10)
  snow1a = new Snow(100,150,10,10)
  snow2a = new Snow(150,200,10,10)
  snow3a = new Snow(200,300,10,10)
  snow4a = new Snow(250,180,10,10)
  snow5a = new Snow(300,310,10,10)
  snow6a = new Snow(350,250,10,10)
  snow7a = new Snow(400,100,10,10)
  snow8a = new Snow(450,140,10,10)
  snow9a = new Snow(500,210,10,10)
  snow10a = new Snow(550,300,10,10)
  snow11a = new Snow(600,280,10,10)
  snow12a = new Snow(650,170,10,10)
  snow13a = new Snow(700,210,10,10)
  snow14a = new Snow(750,100,10,10)
  snow15a = new Snow(800,130,10,10)
  snow16a = new Snow(850,90,10,10)
  snow17a = new Snow(900,120,10,10)
  snow18a = new Snow(950,250,10,10)
  snow19a = new Snow(1000,210,10,10)
  snow20a = new Snow(1050,170,10,10)


}

function draw() {
 
     if(backgroundImg)
       background(backgroundImg);

        Engine.update(engine);

   
        boy1.display();
        ground1.display();

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
        snow1a.display();
        snow2a.display();
        snow3a.display();
        snow4a.display();
        snow5a.display();
        snow6a.display();
        snow7a.display();
        snow8a.display();
        snow9a.display();
        snow10a.display();
        snow11a.display();
        snow12a.display();
        snow13a.display();
        snow14a.display();
        snow15a.display();
        snow16a.display();
        snow17a.display();
        snow18a.display();
        snow19a.display();
        snow20a.display();




        if(snow1.body.position.y>600){
          Matter.Body.setPosition(snow1.body, {x:100,y:10})
        }
        if(snow2.body.position.y>610){
          Matter.Body.setPosition(snow2.body, {x:150,y:10})
        }
        if(snow3.body.position.y>620){
          Matter.Body.setPosition(snow3.body, {x:200,y:10})
        }
        if(snow4.body.position.y>630){
          Matter.Body.setPosition(snow4.body, {x:250,y:10})
        }
        if(snow5.body.position.y>590){
          Matter.Body.setPosition(snow6.body, {x:300,y:10})
        }
        if(snow7.body.position.y>600){
          Matter.Body.setPosition(snow7.body, {x:350,y:10})
        }
        if(snow8.body.position.y>600){
          Matter.Body.setPosition(snow8.body, {x:400,y:10})
        }
        if(snow9.body.position.y>600){
          Matter.Body.setPosition(snow9.body, {x:450,y:10})
        }
        if(snow10.body.position.y>600){
          Matter.Body.setPosition(snow10.body, {x:500,y:10})
        }
        if(snow11.body.position.y>600){
          Matter.Body.setPosition(snow11.body, {x:550,y:10})
        }
        if(snow12.body.position.y>600){
          Matter.Body.setPosition(snow12.body, {x:600,y:10})
        }
        if(snow13.body.position.y>600){
          Matter.Body.setPosition(snow13.body, {x:650,y:10})
        }
        if(snow14.body.position.y>600){
          Matter.Body.setPosition(snow14.body, {x:700,y:10})
        }
        if(snow15.body.position.y>600){
          Matter.Body.setPosition(snow15.body, {x:750,y:10})
        }
        if(snow16.body.position.y>600){
          Matter.Body.setPosition(snow16.body, {x:800,y:10})
        }
        if(snow17.body.position.y>600){
          Matter.Body.setPosition(snow17.body, {x:850,y:10})
        }
        if(snow18.body.position.y>600){
          Matter.Body.setPosition(snow18.body, {x:900,y:10})
        }
        if(snow19.body.position.y>600){
          Matter.Body.setPosition(snow19.body, {x:950,y:10})
        }
        if(snow20.body.position.y>600){
          Matter.Body.setPosition(snow20.body, {x:1000,y:10})
        }

        
        if(snow1a.body.position.y>600){
          Matter.Body.setPosition(snow1a.body, {x:100,y:10})
        }
        if(snow2a.body.position.y>610){
          Matter.Body.setPosition(snow2a.body, {x:150,y:10})
        }
        if(snow3a.body.position.y>620){
          Matter.Body.setPosition(snow3a.body, {x:200,y:10})
        }
        if(snow4a.body.position.y>630){
          Matter.Body.setPosition(snow4a.body, {x:250,y:10})
        }
        if(snow5a.body.position.y>590){
          Matter.Body.setPosition(snow5a.body, {x:300,y:10})
        }
        if(snow6a.body.position.y>590){
          Matter.Body.setPosition(snow6a.body, {x:300,y:10})
        }
        if(snow7a.body.position.y>500){
          Matter.Body.setPosition(snow7a.body, {x:350,y:10})
        }
        if(snow8a.body.position.y>500){
          Matter.Body.setPosition(snow8a.body, {x:400,y:10})
        }
        if(snow9a.body.position.y>500){
          Matter.Body.setPosition(snow9a.body, {x:450,y:10})
        }
        if(snow10a.body.position.y>500){
          Matter.Body.setPosition(snow10a.body, {x:500,y:10})
        }
        if(snow11a.body.position.y>500){
          Matter.Body.setPosition(snow11a.body, {x:550,y:10})
        }
        if(snow12a.body.position.y>500){
          Matter.Body.setPosition(snow12a.body, {x:600,y:10})
        }
        if(snow13a.body.position.y>500){
          Matter.Body.setPosition(snow13a.body, {x:650,y:10})
        }
        if(snow14a.body.position.y>500){
          Matter.Body.setPosition(snow14a.body, {x:700,y:10})
        }
        if(snow15a.body.position.y>500){
          Matter.Body.setPosition(snow15a.body, {x:750,y:10})
        }
        if(snow16a.body.position.y>500){
          Matter.Body.setPosition(snow16a.body, {x:800,y:10})
        }
        if(snow17a.body.position.y>500){
          Matter.Body.setPosition(snow17a.body, {x:850,y:10})
        }
        if(snow18a.body.position.y>500){
          Matter.Body.setPosition(snow18a.body, {x:900,y:10})
        }
        if(snow19a.body.position.y>500){
          Matter.Body.setPosition(snow19a.body, {x:950,y:10})
        }
        if(snow20a.body.position.y>500){
          Matter.Body.setPosition(snow20a.body, {x:1000,y:10})
        }


        KeyPressed();
      
        drawSprites();
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "snow1.jpg";
  }
  else{
      bg = "snow2.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}

function KeyPressed(){

  if(keyDown("left")){
    boy1.body.position.x=boy1.body.position.x-0.5;
  }
  if(keyDown("right")){
    boy1.body.position.x=boy1.body.position.x+0.5;
  }
  }