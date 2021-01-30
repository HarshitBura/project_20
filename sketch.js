var backround,backroundImage;
var cat,catImage2,catImage,catImage3;
var mouse,mouseImage2,mouseImage3;
//Press space key after pressing left arrow 
//last date was there that's why I have submitted and you was not free.

function preload() {
    //load the images here
    backroundImage = loadImage("garden.png");

    mouseImage2 = loadAnimation("mouse1.png","mouse2.png","mouse3.png");
    mouseImage3 = loadImage("mouse4.png");
    catImage2 = loadImage("cat1.png");
    catImage = loadAnimation("cat2.png","cat3.png");
    catImage3 = loadImage("cat4.png");
}

function setup(){
    createCanvas(1000,700);
    //create tom and jerry sprites here
  backround = createSprite(500,400,20,20);
  backround.addImage("back",backroundImage);

  cat = createSprite(700,600,20,20);
  cat.addImage("siting",catImage2);
 
  cat.scale=0.10;
 
  mouse = createSprite(250,600,20,20);
  mouse.scale=0.08;

  
  
}

function draw() {

 background(255);
 keyPressed();
 if (cat.x-mouse.x<(cat.width-mouse.width/2)){
  cat.velocityX=0;
  cat.addImage("kill",catImage3);
  cat.changeImage("kill");

  mouse.addImage("killin",mouseImage3);
  mouse.changeImage("killin");
 } 


    
    drawSprites();
}


function keyPressed(){
 //For moving and changing animation write code here
 if(keyCode === LEFT_ARROW){
   cat.velocityX= -5 ;
   cat.addAnimation("run",catImage);
   cat.changeAnimation("run");

   mouse.addAnimation("teaseing",mouseImage2);
   mouse.changeAnimation("teaseing");
 }

}
