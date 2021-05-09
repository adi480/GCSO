var car,wall;
var speed,weight;


function setup() {
  createCanvas(800,400);
  speed=random(40,80)
  weight=random(100,800)
  car=createSprite(50, 200, 50, 50);
wall=createSprite(700,200,60,100)
car.velocityX=speed;
}

function draw() {
  background(255,255,255);  

  if (isTouching(car,wall)){
    car.shapeColor="blue";
    
  }
  
  else{car.shapeColor="green";
  
  
  }


  drawSprites();
}