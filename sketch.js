var spaceBgImg,issImg,spacecraft1Img,spacecraft2Img,spacecraft3Img,spacecraft4Img

var iss, spacecraft, hasDocked

hasDocked = false

function setup() {
  createCanvas(800,400);
  iss = createSprite(400,200);
  iss.addImage(issImg);
  spacecraft = createSprite(350,320)
  spacecraft.addImage(spacecraft1Img)
  spacecraft.scale=0.3
}

function preload(){
  issImg = loadImage("Docking-undocking/iss.png")
  spaceBgImg = loadImage("Docking-undocking/spacebg.jpg")
  spacecraft1Img = loadImage("Docking-undocking/spacecraft1.png")
  spacecraft2Img = loadImage("Docking-undocking/spacecraft2.png")
  spacecraft3Img = loadImage("Docking-undocking/spacecraft3.png")
  spacecraft4Img = loadImage("Docking-undocking/spacecraft4.png")


}

function draw() {
  background(spaceBgImg);  
  if(!hasDocked){
    spacecraft.x = Math.round(random(300,400));   
}
  if(keyDown(LEFT_ARROW)){
    spacecraft.addImage(spacecraft3Img)
    spacecraft.x = 300
} 
  else{
  spacecraft.addImage(spacecraft1Img)
}
  if(keyDown(RIGHT_ARROW)){
    spacecraft.addImage(spacecraft4Img)
    spacecraft.x = 400
}
  else{
  spacecraft.addImage(spacecraft1Img)
}
  if(keyDown(DOWN_ARROW)){
    spacecraft.addImage(spacecraft2Img)
}
if(keyDown(UP_ARROW)){
  spacecraft.y = 200
  text("docking successfull", 400, 20)
}

  
if(spacecraft.isTouching(iss)){
    
    hasDocked = true

  }
  

drawSprites(); 
}
