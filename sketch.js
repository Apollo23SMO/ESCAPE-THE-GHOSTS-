var pacman
var blinky
var inky
var pinky
var clyde
var berry
var powerberry
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9

var gamestate = "play"

function preload() {

    pacMovingLeft = loadAnimation("Pac1.png")
    pacMovingRight = loadAnimation("Pac2.png")
    pacMovingUp = loadAnimation("Pac3.png")
    pacMovingDown = loadAnimation("Pac4.png")

    blinkyImg = loadImage("ghost1.png")
    inkyImg = loadImage("ghost2.png")
    pinkyImg = loadImage("ghost3.png")
    clydeImg = loadImage("ghost4.png")

}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);

    pacman = createSprite(windowWidth / 3, windowHeight / 2, 50, 50)
    pacman.scale = 0.035

    blinky = createSprite(windowWidth / 3, windowHeight / 3, 50, 50)
    blinky.scale = 0.35
    blinky.addImage("blinky", blinkyImg)
    inky = createSprite(windowWidth / 4, windowHeight / 4, 50, 50)
    inky.scale = 0.75
    inky.addImage("inky", inkyImg)
    pinky = createSprite(windowWidth - 175, windowHeight - 120, 50, 50)
    pinky.scale = 0.35
    pinky.addImage("pinky", pinkyImg)
    clyde = createSprite(windowWidth / 7, windowHeight / 7, 50, 50)
    clyde.scale = 0.35
    clyde.addImage("clyde", clydeImg)

    wall1 = createSprite(windowWidth / 2, windowHeight / 17, 1750, 20)
    wall2 = createSprite(windowWidth / 2, windowHeight - 50, 1750, 20)
    wall3 = createSprite(windowWidth / 20, windowHeight / 2, 20, 840)
    wall4 = createSprite(windowWidth - 95, windowHeight / 2, 20, 840)
    wall5 = createSprite(windowWidth / 2, windowHeight / 5, 1000, 20)
    wall6 = createSprite(windowWidth / 2, windowHeight / 2, 20, 250)
    wall7 = createSprite(windowWidth - 500, windowHeight / 2, 500, 20)
    wall8 = createSprite(windowWidth / 7, windowHeight - 450, 20, 500)
    wall9 = createSprite(windowWidth / 2.510, windowHeight - 200, 1000, 20)

    blinky.velocityY = 5
    inky.velocityY = -5
    pinky.velocityY = -5
    clyde.velocityY = 5

    blinky.velocityX = 5
    inky.velocityX = -5
    pinky.velocityX = 5
    clyde.velocityX = -5

}

function draw() {

    if (gamestate == "play") {

        background(0);

        edges = createEdgeSprites();
        pacman.bounceOff(edges);

        blinky.bounceOff(wall1);
        blinky.bounceOff(wall2);
        blinky.bounceOff(wall3);
        blinky.bounceOff(wall4);
        blinky.bounceOff(wall5);
        blinky.bounceOff(wall6);
        blinky.bounceOff(wall7);
        blinky.bounceOff(wall8);
        blinky.bounceOff(wall9);

        inky.bounceOff(wall1);
        inky.bounceOff(wall2);
        inky.bounceOff(wall3);
        inky.bounceOff(wall4);
        inky.bounceOff(wall5);
        inky.bounceOff(wall6);
        inky.bounceOff(wall7);
        inky.bounceOff(wall8);
        inky.bounceOff(wall9);

        pinky.bounceOff(wall1);
        pinky.bounceOff(wall2);
        pinky.bounceOff(wall3);
        pinky.bounceOff(wall4);
        pinky.bounceOff(wall5);
        pinky.bounceOff(wall6);
        pinky.bounceOff(wall7);
        pinky.bounceOff(wall8);
        pinky.bounceOff(wall9);

        clyde.bounceOff(wall1);
        clyde.bounceOff(wall2);
        clyde.bounceOff(wall3);
        clyde.bounceOff(wall4);
        clyde.bounceOff(wall5);
        clyde.bounceOff(wall6);
        clyde.bounceOff(wall7);
        clyde.bounceOff(wall8);
        clyde.bounceOff(wall9);

        pacman.addAnimation("left", pacMovingLeft)
        pacman.addAnimation("right", pacMovingRight)
        pacman.addAnimation("up", pacMovingUp)
        pacman.addAnimation("down", pacMovingDown)

        if (keyDown("right")) {
            pacman.velocityX = 5
            pacman.velocityY = 0
            pacman.changeAnimation("right", pacMovingRight);

        }

        if (keyDown("left")) {
            pacman.velocityX = -5
            pacman.velocityY = 0
            pacman.changeAnimation("left", pacMovingLeft);

        }

        if (keyDown("up")) {
            pacman.velocityY = -5
            pacman.velocityX = 0
            pacman.changeAnimation("up", pacMovingUp);

        }

        if (keyDown("down")) {
            pacman.velocityY = 5
            pacman.velocityX = 0
            pacman.changeAnimation("down", pacMovingDown);

        }

        pacman.collide(wall1);
        pacman.collide(wall2);
        pacman.collide(wall3);
        pacman.collide(wall4);
        pacman.collide(wall5);
        pacman.collide(wall6);
        pacman.collide(wall7);
        pacman.collide(wall8);
        pacman.collide(wall9);

        if (pacman.isTouching(blinky)) {
            pacman.destroy()
            gamestate = "end"

        }

        if (pacman.isTouching(inky)) {
            pacman.destroy()
            gamestate = "end"

        }

        if (pacman.isTouching(pinky)) {
            pacman.destroy()
            gamestate = "end"

        }

        if (pacman.isTouching(clyde)) {
            pacman.destroy()
            gamestate = "end"

        }
    }

    if (gamestate == "end") {

        background(0)
        textSize(30)
        fill("white")
        text("GAME OVER", windowWidth - 1600, windowHeight / 2)

        blinky.bounceOff(wall1);
        blinky.bounceOff(wall2);
        blinky.bounceOff(wall3);
        blinky.bounceOff(wall4);
        blinky.bounceOff(wall5);
        blinky.bounceOff(wall6);
        blinky.bounceOff(wall7);
        blinky.bounceOff(wall8);
        blinky.bounceOff(wall9);

        inky.bounceOff(wall1);
        inky.bounceOff(wall2);
        inky.bounceOff(wall3);
        inky.bounceOff(wall4);
        inky.bounceOff(wall5);
        inky.bounceOff(wall6);
        inky.bounceOff(wall7);
        inky.bounceOff(wall8);
        inky.bounceOff(wall9);

        pinky.bounceOff(wall1);
        pinky.bounceOff(wall2);
        pinky.bounceOff(wall3);
        pinky.bounceOff(wall4);
        pinky.bounceOff(wall5);
        pinky.bounceOff(wall6);
        pinky.bounceOff(wall7);
        pinky.bounceOff(wall8);
        pinky.bounceOff(wall9);

        clyde.bounceOff(wall1);
        clyde.bounceOff(wall2);
        clyde.bounceOff(wall3);
        clyde.bounceOff(wall4);
        clyde.bounceOff(wall5);
        clyde.bounceOff(wall6);
        clyde.bounceOff(wall7);
        clyde.bounceOff(wall8);
        clyde.bounceOff(wall9);

    }

    drawSprites();
}