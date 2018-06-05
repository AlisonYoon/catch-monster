const canvas = document.createElement("canvas"),
    context = canvas.getContext("2d"),
    audio = document.createElement("audio");

document.body.appendChild(canvas);
document.body.appendChild(audio);

audio.src = "https://freesound.org/data/previews/39/39459_382028-lq.mp3";
audio.volume = 0.1;

canvas.height= 600;
canvas.width= 600;

let monsterCounter = 0;
let time = 0;

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

// bgImage.onload = () => {
//     bgImage.width = canvas.width;
//     bgImage.height = canvas.height;
//     context.drawImage(bgImage, 0, 0, bgImage.width, bgImage.height);
// };
bgImage.src = "./background.png";

// playerImage.onload = () => {
//     context.drawImage(playerImage, player.x, player.y, 100, 100);
// };
playerImage.src = "./player.gif";

// monsterImage.onload = () => {
//     context.drawImage(monsterImage, monster.x, monster.y, 110, 110);
// };
monsterImage.src = "./monster.gif";

const render = () => {
    bgImage.width = canvas.width;
    bgImage.height = canvas.height;
    context.drawImage(bgImage, 0, 0, bgImage.width, bgImage.height);
    context.font= "18px Helvetica";
    context.fillStyle = "#fff";
    context.textAlign = "left";
    context.textBaseline = "top";
    context.drawImage(playerImage, player.x, player.y, 100, 100);
    context.drawImage(monsterImage, monster.x, monster.y, 110, 110);
    context.fillText(`Monsters caught : ${monsterCounter}`, 50, 50);
    context.fillText(`Time: ${time}`, 50, 70);
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
        audio.play();
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
    ++time;
}, 1000);


// const eventWindowLodaded = () => {
//     canvasApp();
//     main();
// }
//window.addEventListener("load", eventWindowLodaded, false);