var spacecraft, leftThrottle, rightThrottle, fullForce;
var iss, spaceBG;
var issObj, spacecraftObj;
var hasDocked = false;

function preload()
{
  spacecraft = loadImage("spacecraft1.png");
  leftThrottle = loadImage("spacecraft3.png");
  rightThrottle = loadImage("spacecraft4.png");
  fullForce = loadImage("spacecraft2.png");

  iss = loadImage("iss.png");
  spaceBG = loadImage("spacebg.jpg");
}

function setup() {
  createCanvas(800,400);

  spacecraftObj = createSprite(150, 300, 30, 30);
  spacecraftObj.addImage(spacecraft);
  spacecraftObj.scale = 0.2;
  
  issObj = createSprite(400, 200, 50, 50);
  issObj.addImage(iss);
}

function draw() {
  background(spaceBG);  

  if(!hasDocked)
  {
    spacecraftObj.x = Math.round(random(320, 350));
    if(keyWentDown(LEFT_ARROW))
    {
      spacecraftObj.addImage(leftThrottle);
      spacecraftObj.x = spacecraftObj.x + 7;
      spacecraftObj.y = spacecraftObj.y;
    }

    if(keyWentDown(RIGHT_ARROW))
    {
      spacecraftObj.addImage(rightThrottle);
      spacecraftObj.x = spacecraftObj.x - 7;
    }

    if(keyWentDown(DOWN_ARROW))
    {
      spacecraftObj.addImage(fullForce);
    }

    if(keyWentDown(UP_ARROW))
    {
      spacecraftObj.y = spacecraftObj.y - 7;
    }
  }
  else if(hasDocked)
  {
    textSize(30);
    fill("red");
    text("Docking Successful!", 100, 370);
  }

  if(spacecraftObj.x === 335 && spacecraftObj.y === 272)
  {
    hasDocked = true;
  }
  drawSprites();
}