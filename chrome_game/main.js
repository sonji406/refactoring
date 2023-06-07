const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 550;
canvas.height = 550;

const siru = new Image();
siru.src = './siru.png';
//test
const dino = {
  x: 10,
  y: 200,
  width: 50,
  height: 50,
  isJumping: false,
  jumpTimer: 0,
  score: 0,
  draw() {
    ctx.fillStyle = 'green';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  },
  jump() {
    if (!this.isJumping) {
      this.isJumping = true;
      this.jumpTimer = 0;
    }
  },
  update() {
    if (this.isJumping) {
      this.y--;
      this.jumpTimer++;
      if (this.jumpTimer > 100) {
        this.isJumping = false;
        this.jumpTimer = 0;
      }
    } else if (this.y < 200) {
      this.y++;
    }
  },
  increaseScore() {
    this.score++;
  }
};

class Cactus {
  constructor() {
    this.x = 500;
    this.y = 200;
    this.width = 50;
    this.height = 50;
  }
  draw() {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(siru, this.x, this.y, this.width, this.height);
  }
}

let timer = 0;
const cacti = [];
let animation;
let gameOver = false;

function startGame() {
  siru.onload = function() {
    animation = requestAnimationFrame(updateGame);
  };
}

function updateGame() {
  animation = requestAnimationFrame(updateGame);

  timer++;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (timer % 220 === 0 && !gameOver) {
    const cactus = new Cactus();
    cacti.push(cactus);
  }

  cacti.forEach((cactus, index, array) => {
    if (cactus.x < 0) {
      array.splice(index, 1);
      dino.increaseScore(); // 점수 증가 호출
    }
    cactus.x--;

    if (checkCollision(dino, cactus)) {
      gameOver = true;
    }

    cactus.draw();
  });

  if (!gameOver) {
    dino.update();
  } else {
    cancelAnimationFrame(animation);
    showGameOverScreen();
  }

  dino.draw();
}

function checkCollision(dino, cactus) {
  return (
    dino.x + dino.width > cactus.x &&
    dino.x < cactus.x + cactus.width &&
    dino.y + dino.height > cactus.y &&
    dino.y < cactus.y + cactus.height
  );
}

function showGameOverScreen() {
  ctx.font = '30px Arial';
  ctx.fillStyle = 'black';
  ctx.textAlign = 'center';
  ctx.fillText('Game Over', canvas.width / 2, canvas.height / 2);
  ctx.fillText('Score: ' + dino.score, canvas.width / 2, canvas.height / 2 + 50); // 점수 출력 수정
}

startGame();

document.addEventListener('keydown', function(e) {
  if (e.code === 'Space') {
    dino.jump();
  }
});
