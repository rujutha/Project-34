//Create variables here
var dog,happyDog;

var database;
var foodS;
var dogImage;

function preload()
{
  //load images here
  dogImage=loadImage("images/dogImg.png");
  happyDog=loadImage("images/dogImg1.png");
}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);
dog=createSprite(250,250,1,1);

 foodS=database.ref('Food');
foodS.on("value",readStock);

dog.addImage(dogImage);
  dog.scale=0.3;
}


function draw() {  
background(46,139,87);
  
  //add styles here
  //image (dogImage);
  


if(foodS!==undefined){
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }}
  drawSprites();
textSize(20);
fill ("black");
text("NOTE: press UP_ARROW key to feed the dog",50,50);
text("food remaining:  "+foodS,150,100);

}

function readStock(data){
  foodS=data.val();

  //ball.x=position.x;
  //ball.y=position.y;
}



function writeStock(x){

if(x<=0){
  x=0;
}else{x=x-1;}

  database.ref('/').update({
      Food:x
      
  })


}




