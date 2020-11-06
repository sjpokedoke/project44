var luna, lunastartimg;
var livesimg, life1, life2, life3, life4, life5;
var pumpkinsr, pumpkinsl, pumpkinsd, pumpkingroupr, pumpkingroupl, pumpkingroupd;
var evilred, evilblue, evilyellow, evilgreen;
var lives = 5;
var score = 0;

function preload() {
  livesimg = loadImage("Images/Lives.png")

  evilred = loadImage("Images/Evil red.png");
  evilblue = loadImage("Images/Evil blue.png");
  evilyellow = loadImage("Images/Evil yellow.png");
  evilgreen = loadImage("Images/Evil green.png");

  lunastartimg = loadAnimation("Images/Luna 1.png", "Images/Luna 1.png", "Images/Luna 1.png", "Images/Luna 1.png", "Images/Luna 1.png", "Images/Luna 1.png", "Images/Luna 1.png", "Images/Luna 1.png", "Images/Luna 1.png", "Images/Luna 1.png", "Images/Luna 1.png", "Images/Luna 1.png",  "Images/Luna 2.png", "Images/Luna 2.png", "Images/Luna 2.png")
}

function setup() {
  createCanvas(1400, 800);

  pumpkingroupr = new Group();
  pumpkingroupl = new Group();
  pumpkingroupd = new Group();

  luna = createSprite(700, 400);
  luna.addAnimation("lunastart", lunastartimg)

  life1 = createSprite(50, 30);
  life1.addImage("life1", livesimg)

  life2 = createSprite(100, 30);
  life2.addImage("life2", livesimg)

  life3 = createSprite(150, 30);
  life3.addImage("life3", livesimg)

  life4 = createSprite(200, 30);
  life4.addImage("life4", livesimg)

  life5 = createSprite(250, 30);
  life5.addImage("life5", livesimg)
}

function draw() {
  background("blue");
  pumpkin();

  if (pumpkinsr!== undefined) {
    if (pumpkinsr.x<600) {
      pumpkinsr.x = pumpkinsr.x+10;
    }
  }

  if (pumpkinsl!== undefined) {
    if (pumpkinsl.x>800) {
      pumpkinsl.x = pumpkinsl.x-10;
    }
  }

  if (pumpkinsd!== undefined) {
    if (pumpkinsd.y>500) {
      pumpkinsd.y = pumpkinsd.y-10;
    }
  }

  if (pumpkinsr!==undefined) {
    if(pumpkinsr.x>500&&pumpkinsr.x<800){
      for(var a=0; a<pumpkingroupr.length; a++){
           if(pumpkingroupr.isTouching(luna)){
             pumpkingroupr.get(a).destroy();
             lives = lives-1;
           }
       }
    }
    console.log(lives)
  }

  if (pumpkinsl!==undefined) {
    if(pumpkinsl.x>500&&pumpkinsl.x<820){
      for(var b=0; b<pumpkingroupl.length; b++){
        if(pumpkingroupl.isTouching(luna)){
          pumpkingroupl.get(b).destroy();
          lives = lives-1;
        }
    }
    }
  }

  if (pumpkinsd!==undefined) {
    console.log(pumpkinsd.y)
    if(pumpkinsd.y<550&&pumpkinsd.y>500){
      for(var c=0; c<pumpkingroupd.length; c++){
           if(pumpkingroupd.isTouching(luna)){
             pumpkingroupd.get(c).destroy();
             lives = lives-1;
           }
       }
    }
  }

  if (lives === 5) {
    life1.visible = true;
    life2.visible = true;
    life3.visible = true;
    life4.visible = true;
    life5.visible = true;
  }

  if (lives === 4) {
    life1.visible = true;
    life2.visible = true;
    life3.visible = true;
    life4.visible = true;
    life5.visible = false;
  }

  if (lives === 3) {
    life1.visible = true;
    life2.visible = true;
    life3.visible = true;
    life4.visible = false;
    life5.visible = false;
  }

  if (lives === 2) {
    life1.visible = true;
    life2.visible = true;
    life3.visible = false;
    life4.visible = false;
    life5.visible = false;
  }

  if (lives === 1) {
    life1.visible = true;
    life2.visible = false;
    life3.visible = false;
    life4.visible = false;
    life5.visible = false;
  }

  if (lives === 0) {
    life1.visible = false;
    life2.visible = false;
    life3.visible = false;
    life4.visible = false;
    life5.visible = false;
  }

  drawSprites();

  textSize(20);
  fill("white");
  textFont("Comic Sans")
  text("Score: "+score, 1250, 30)
}

function pumpkin() {
  if (frameCount%100===0) {
    var position = Math.round(random(1,3));
    console.log(position)

    var randimg = Math.round(random(1,4));

    if (position === 1) {
      pumpkinsr = createSprite(30, random(350, 500));
      pumpkinsr.shapeColor = "red";
      pumpkingroupr.add(pumpkinsr);
    }

    if (position === 2) {
      pumpkinsl = createSprite(1370, random(350, 500));
      pumpkinsl.shapeColor = "green";
      pumpkingroupl.add(pumpkinsl);
    }

    if (position === 3) {
      pumpkinsd = createSprite(random(640, 760), 750);
      pumpkinsd.shapeColor = "yellow";
      pumpkingroupd.add(pumpkinsd);
    }

    if (randimg === 1){
      pumpkingroupl.setImage("randomimgl", evilred);
      pumpkingroupr.setImage("randomimgr", evilred);
      pumpkingroupd.setImage("randomimgd", evilred);
    }

    if (randimg === 2){
      pumpkingroupl.setImage("randomimgl", evilblue);
      pumpkingroupr.setImage("randomimgr", evilblue);
      pumpkingroupd.setImage("randomimgd", evilblue);
    }

    if (randimg === 3){
      pumpkingroupl.setImage("randomimgl", evilyellow);
      pumpkingroupr.setImage("randomimgr", evilyellow);
      pumpkingroupd.setImage("randomimgd", evilyellow);
    }

    if (randimg === 4){
      pumpkingroupl.setImage("randomimgl", evilgreen);
      pumpkingroupr.setImage("randomimgr", evilgreen);
      pumpkingroupd.setImage("randomimgd", evilg  );
    }
  }
}


//link to game: https://www.google.com/doodles/halloween-2020