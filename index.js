const canvas = document.createElement("canvas"),
    context = canvas.getContext("2d");

document.body.appendChild(canvas);

canvas.height= 600;
canvas.width= 600;

const bgImage = new Image(),
    playerImage = new Image(),
    monsterImage = new Image();

const player = {
    x: 80,
    y: 80,
    speed: 15
};
const monster = {
    x: 200,
    y: 200
};

bgImage.onload = () => {
    bgImage.width = canvas.width;
    bgImage.height = canvas.height;
    context.drawImage(bgImage, 0, 0, bgImage.width, bgImage.height);
};
bgImage.src = "./background.png";

playerImage.onload = () => {
    context.drawImage(playerImage, player.x, player.y, 100, 100);
};
playerImage.src = "./player.gif";

monsterImage.onload = () => {
    context.drawImage(monsterImage, monster.x, monster.y, 110, 110);
};
monsterImage.src = "./monster.gif";

const render = () => {
    context.font= "18px Helvetica";
    context.textAlign = "left";
    context.textBaseline = "top";
    context.drawImage(monsterImage, 0, 0);
    context.drawImage(monsterImage, monster.x, monster.y, 80, 80); 
    context.fillText(`Mons`);
};

const reset = () => {
    player.x = canvas.width / 3;
    player.y = canvas.height / 3;
    monster.x = Math.random() * (canvas.width - 200);
    monster.y = Math.random() * (canvas.height - 200);
  };


const KEY_UP = 38;
const KEY_DOWN = 40;
const KEY_LEFT = 37;
const KEY_RIGHT = 39;

const handleKeyDown = event => {
    const {keyCode} = event;
    if (keyCode === KEY_UP) {
        if (player.y >= -4) {
            player.y -= player.speed;
        }
    } else if (keyCode === KEY_DOWN) {
        if (player.y <= 380) {
            player.y += player.speed;
        }
    } else if (keyCode === KEY_LEFT) {
        if (player.x >= 8) {
            player.x -= player.speed;
        }
    } else if (keyCode === KEY_RIGHT) {
        if (player.x < 428) {
            player.x += player.speed;
        }
    }
    caculateTouch();
};

const caculateTouch = () => {
    if (
        player.x <= monster.x + 20 &&
        monster.x <= player.x + 20 &&
        player.y <= monster.y + 30 &&
        monster.y <= player.y + 30
    ) {
        reset();
        ++monsterCounter;
    }
};

document.addEventListener("keydown", handleKeyDown);

const main = () => {
    render();
    requestAnimationFrame(main);
};

reset();
main();

setInterval(() => {
    ++tiem;
}, 1000);

window.addEventListener("load", eventWindowLodaded, false);
const eventWindowLodaded = () => {
    canvasApp();
    main();
}