var garden, gardenImg;
var cat, cat_sitImg, cat_purrImg, cat_lieImg;
var mouse, mouse_cheeseImg, mouse_sillyImg, mouse_detectImg;

function preload() {
    //load the images here
    gardenImg = loadImage("images/garden.png");
    cat_lieImg = loadImage("images/cat1.png");
    cat_sitImg = loadImage("images/cat1.png");
    cat_purrImg = loadAnimation("images/cat2.png", "images/cat3.png");
    mouse_cheeseImg = loadImage("images/mouse1.png");
    mouse_sillyImg = loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouse_detectImg = loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    garden = createSprite(500, 400);
    garden.addAnimation("garden", gardenImg);

    //create tom and jerry sprites here
    cat = createSprite(800, 600);
    cat.addAnimation("cat", cat_lieImg);
    cat.scale = 0.2;
    mouse = createSprite(200, 600);
    mouse.addAnimation("mouse", mouse_cheeseImg);
    mouse.scale = 0.2;
}

function draw() {

    background("garden");
    keyPressed();
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2) {
        mouse.addAnimation("detect", mouse_detectImg);
        mouse.changeAnimation("detect");

        cat.addAnimation("sit", cat_sitImg);
        cat.changeAnimation("sit");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === RIGHTARROW) {
        mouse.addAnimation("teaser", mouse_sillyImg);
        mouse.changeAnimation("teaser");
        mouse.frameDelay = 25;
    }

    if(keyCode === LEFTARROW) {
        cat.addAnimation("search", cat_purrImg);
        cat.changeAnimation("search");
        cat.frameDelay = 25;
        cat.x = cat.x - 3;
    }
}
