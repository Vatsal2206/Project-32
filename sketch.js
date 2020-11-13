const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var circleS,ground1,ground2,ground3,ground4,ground5,sling;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18;

var score = 0;

var bg = "day.png";
var backgroundI;

var gameState = "rest";

function preload(){
  backg();
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(400,400,800,10)
  ground2 = new Ground(400,250,160,10)
  ground3 = new Ground(650,170,160,10)
  ground4 = new Ground(800,200,10,400)
  ground5 = new Ground(400,0,800,10)

  circleS = new Striker(100,200);

  sling = new SlingShot(circleS.body,{x: 100,y: 180})

  box1 = new Box(340,220,30,30)
  box2 = new Box(370,220,30,30)
  box3 = new Box(400,220,30,30)
  box4 = new Box(430,220,30,30)
  box5 = new Box(460,220,30,30)
  box6 = new Box(370,190,30,30)
  box7 = new Box(400,190,30,30)
  box8 = new Box(430,190,30,30)
  box9 = new Box(400,160,30,30)

  box10 = new Box(590,140,30,30)
  box11 = new Box(620,140,30,30)
  box12 = new Box(650,140,30,30)
  box13 = new Box(680,140,30,30)
  box14 = new Box(710,140,30,30)
  box15 = new Box(620,110,30,30)
  box16 = new Box(650,110,30,30)
  box17 = new Box(680,110,30,30)
  box18 = new Box(650,80,30,30)
  

}

function draw() {
  if(backgroundI){
    background(backgroundI);
}  

  Engine.update(engine);

  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  ground5.display();

  circleS.display();

  sling.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box18.display();
  box17.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box18.score();
  box17.score();

  if(gameState === "rest"){
    sling.attach(circleS.body)
    push();
    fill("white")
    strokeWeight(5)
    stroke(252, 3, 127)
    textSize(20)
    text("Drag the ball with mouse and release it towards the blocks",50,30) 
    text("Score 700 points to WIN : D",50,60)
    pop();
  }
  
  if(score > 699){
    gameState = "win";
  }

  if(gameState === "win"){
    textSize(30)
    strokeWeight(5)
    stroke("cyan");
    text("YOU WIN!!!",350,100)
    text("Please reload the page to play again",200,130)
  }

  
  push();
  fill(173, 252, 3)
  strokeWeight(5)
  stroke(204, 24, 24)
  textSize(30)
  text("SCORE = "+score , 325,370)
  pop();

  if(gameState === "shoot"){
    textSize(20)
    strokeWeight(5)
    stroke(255);
    text("Reload the page if you want another chance to play...",50,50)
  }

}
function mouseDragged() {
  if(gameState === "rest"){
  Matter.Body.setPosition(circleS.body,{x: mouseX, y:mouseY} )
  }
}

function mouseReleased(){
  gameState = "shoot"
  sling.fly();
}

async function backg(){

    var link = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var linkType = await link.json();
    console.log(linkType);

    var datetime = linkType.datetime;
    console.log(datetime);

    var hour = datetime.slice(11,13);
    console.log(hour);

    if (hour >= 06 && hour <= 18){
        bg = "day.png";    
    }else{
        bg = "night.png";
    }

    backgroundI = loadImage(bg);
    
}