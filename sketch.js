function setup() {
  createCanvas(1200,800);
 fixedRect=createSprite(400,400,200,280);
 fixedRect.shapeColor="yellow";
  
 movingRect=createSprite(400,400,170,150);
 movingRect.shapeColor="orange";
}
var fixedRect,movingRect;

function draw() {
  background(255,255,255);  

movingRect.x = mouseX;
movingRect.y = mouseY
console.log(movingRect.y-fixedRect.y);

if(movingRect.x-fixedRect.x<=movingRect.width/2 + fixedRect.width/2 &&
  fixedRect.x-movingRect.x <=movingRect.width/2 + fixedRect.width/2 &&
   movingRect.y-fixedRect.y<=movingRect.height/2+ fixedRect.height/2 &&
   fixedRect.y-movingRect.y <=movingRect.height/2+ fixedRect.height/2
  ) {
    movingRect.shapeColor="purple";
    fixedRect.shapeColor="black"
  }
  else{
    fixedRect.shapeColor="yellow";
 movingRect.shapeColor="orange";
  }
  drawSprites();
}