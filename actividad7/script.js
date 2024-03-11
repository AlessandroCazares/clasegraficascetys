const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// canvas
canvas.width = 1200; 
canvas.height = 600; 

const imageObj = {
  img: new Image(),
  x: canvas.width / 2,
  y: canvas.height / 2,
  speed: 2,
  dx: 2,
  amplitude: 80,
  frequency: 0.05
};


imageObj.img.src = 'https://static.wikia.nocookie.net/riskofrain2/images/7/7b/Lemurian.png';

let time = 0;

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawImage() {
  if (imageObj.img.complete) {
    const imgX = imageObj.x - imageObj.img.width / 2;
    const imgY = imageObj.y - imageObj.img.height / 10;

    ctx.drawImage(imageObj.img, imgX, imgY);
  } else {
    imageObj.img.onload = function() {
      drawImage();
    };
  }
}

function update() {
  clearCanvas();
  
  imageObj.y = canvas.height / 2 + imageObj.amplitude * Math.sin(imageObj.frequency * imageObj.x);
  
  drawImage();
  
  imageObj.x += imageObj.dx;
  time += imageObj.speed;
  
  // rebote
  if (imageObj.x + imageObj.img.width / 2 > canvas.width || imageObj.x - imageObj.img.width / 2 < 0) {
    imageObj.dx = -imageObj.dx;
  }
  
  requestAnimationFrame(update);
}

update();
