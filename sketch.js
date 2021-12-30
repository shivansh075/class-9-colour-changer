

function setup() {
  createCanvas(400, 400);  

}

function draw() {
  background(20,200,200);

  if(keyIsDown(UP_ARROW)){
    background("red");
  }
 

  if(keyIsDown(DOWN_ARROW)){
    background("green")
  }
drawSprites();
}




