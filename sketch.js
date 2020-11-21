  var background_surface, bow, redBalloon, redballoon, greenballoon, greenBalloon, blueballoon, blueBalloon, pinkBalloon, pinkballoon, arrow;
var score = 0;
var arrowGroup, redGroup, greenGroup, blueGroup, pinkGroup;

  function preload(){
   //loading images 
    backgroundImage = loadImage("background0.png");
    bowImage = loadImage("bow0.png");
    redBalloon = loadImage("red_balloon0.png");
    greenBalloon = loadImage("green_balloon0.png");
    blueBalloon = loadImage("blue_balloon0.png");
    pinkBalloon = loadImage("pink_balloon0.png");
    arrowImage = loadImage("arrow0.png");

  }

  function setup() {
    createCanvas(600, 600);

    //creating background
    background_surface = createSprite(0,0,600,600);
    background_surface.addImage(backgroundImage);
    background_surface.scale = 2.5;

    //creating bow
    bow = createSprite(480,220,20,50);
    bow.addImage(bowImage);
    bow.scale = 1

     //creating groups
    arrowGroup = new Group();
    redGroup = new Group();
    greenGroup = new Group();
      blueGroup = new Group();
      pinkGroup = new Group();
  }

  function draw() {
  
  
    var select_balloon = Math.round(random(1,4));
    console.log = (select_balloon)
    
      //balloons coming randomly
      if(frameCount%80 == 0){
        if(select_balloon == 1){
          red_balloon()
        }else if(select_balloon == 2){
          green_balloon()
        }else if(select_balloon == 3){
          blue_balloon()
        }else {
          pink_balloon()
        }
            }
    
    //giving velocity to ground
     background_surface.velocityX = -3;
    if(background_surface.x<0){
       background_surface.x = background_surface.width/2;
       }

    //Press space to release arrow from bow
        if(keyDown("space")){
          createArrow(); 
         }
    
    //destroying red balloon when arrow is touching and score increases by 2
    if(arrowGroup.isTouching(redGroup)){
      redGroup.destroyEach();
      arrowGroup.destroyEach();
      score = score+2; 
    }
    
     //destroying green balloon when arrow is touching and score increases by 1
    if(arrowGroup.isTouching(greenGroup)){
      greenGroup.destroyEach();
      arrowGroup.destroyEach();
      score = score+1;
    }
    
     //destroying pink balloon when arrow is touching and score increases by 1
    if(arrowGroup.isTouching(pinkGroup)){
      pinkGroup.destroyEach();
      arrowGroup.destroyEach();
      score = score+1;
    }
    
         //destroying pink balloon when arrow is touching and score increases by 2 
    if(arrowGroup.isTouching(blueGroup)){
      blueGroup.destroyEach();
      arrowGroup.destroyEach();
      score = score+2;
    }
 
    //moving bow with mouse
   bow.y = World.mouseY;
   
    drawSprites();
   textSize(20);
       text("Score: "+ score, 270,30);
               
  }
  //creating an arrow
  function createArrow(){
     arrow = createSprite(100, 100, 60, 10);
    arrow.addImage(arrowImage);
    arrow.x = 360;
    arrow.y = bow.y;
     arrow.velocityX = -3;
     arrow.lifetime = 100; 
     arrow.scale = 0.3;
  arrowGroup.add(arrow)
    }
  //creating red balloon
   function red_balloon(){
    var red = createSprite(0,Math.round(random(20,370)), 10, 10);
     red.addImage(redBalloon);
     red.velocityX = 3;
     red.lifetime = 150;
     red.scale = 0.1;
     redGroup.add(red)
      }

  //creating green balloon
  function green_balloon(){
    var green = createSprite(0,Math.round(random(20,370)), 10, 10);
    green.addImage(greenBalloon);
    green.velocityX = 3;
    green.lifetime = 150; 
    green.scale = 0.1;
    greenGroup.add(green);
  }

  //creating blue balloon
  function blue_balloon(){
    var blue = createSprite(0,Math.round(random(20,370)), 10, 10);
    blue.addImage(blueBalloon);
    blue.velocityX = 3;
    blue.lifetime = 150;
    blue.scale = 0.1;
    blueGroup.add(blue);
  }
  //creating pink balloon
  function pink_balloon(){
    var pink = createSprite(0,Math.round(random(20,370)), 10, 10);
    pink.addImage(pinkBalloon);
    pink.velocityX = 3;
    pink.lifetime = 150;
    pink.scale = 1.2;
    pinkGroup.add(pink);
  }





