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

// const render = () => {
//     context.drawImage(monsterImage, 0, 0);
//     context.drawImage(monsterImage, monster.x, monster.y, 80, 80); 
// };
// render();



