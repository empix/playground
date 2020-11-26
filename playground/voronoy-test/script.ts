const useColorInput: HTMLInputElement = document.querySelector('#useColor');
const useShadowInput: HTMLInputElement = document.querySelector('#useShadow');
const showPointsInput: HTMLInputElement = document.querySelector('#showPoints');

useColorInput.addEventListener('input', init);
useShadowInput.addEventListener('input', init);
showPointsInput.addEventListener('input', init);

const canvas: HTMLCanvasElement = document.createElement('canvas');
const context: CanvasRenderingContext2D = canvas.getContext('2d');

const container = document.querySelector('.container');
container.append(canvas);

canvas.width = 128;
canvas.height = 128;

window.onresize = changeCanvasSize;

function changeCanvasSize() {
  const { innerHeight, innerWidth } = window;
  let width, height;

  if (innerHeight >= innerWidth) {
    width = innerWidth * 0.9;
    height = innerWidth * 0.9;
  } else {
    width = innerHeight * 0.9;
    height = innerHeight * 0.9;
  }

  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
}

changeCanvasSize();

const pointsQuantity = 20;
let points = [];

function init() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  points = [];

  for (let i = 0; i < pointsQuantity; i++) {
    const x = random(5, canvas.width - 5);
    const y = random(5, canvas.height - 5);
    let color;

    if (useColorInput.checked) {
      color = randomColor();
    } else {
      color = [255, 255, 255, Math.random()];
    }

    points.push({
      id: i,
      x,
      y,
      color,
      velocity: { x: random(-2, 2), y: random(-2, 2) },
    });
  }

  draw();
}

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  points.forEach((point) => {
    if (point.x > canvas.width) {
      point.x = 0;
    } else if (point.x < 0) {
      point.x = canvas.width;
    } else {
      point.x += point.velocity.x;
    }

    if (point.y > canvas.height) {
      point.y = 0;
    } else if (point.y < 0) {
      point.y = canvas.height;
    } else {
      point.y += point.velocity.y;
    }
  });

  for (let i = 0; i < canvas.width; i++) {
    for (let j = 0; j < canvas.height; j++) {
      let shortestDistance = {
        point: null,
        distance: canvas.width,
      };

      for (let k = 0; k < pointsQuantity; k++) {
        const distance = Math.sqrt(
          Math.pow(points[k].x - i, 2) + Math.pow(points[k].y - j, 2)
        );

        if (distance < shortestDistance.distance) {
          shortestDistance.distance = distance;
          shortestDistance.point = points[k];
        }
      }

      if (useShadowInput.checked) {
        shortestDistance.point.color[3] = 1 - shortestDistance.distance * 0.025;
      }

      context.fillStyle = `rgba(${shortestDistance.point.color.join(', ')})`;
      context.fillRect(i, j, 1, 1);
    }
  }

  if (showPointsInput.checked) {
    points.forEach((point) => {
      context.fillStyle = '#FFF';
      context.fillRect(point.x, point.y, 1, 1);
    });
  }

  // requestAnimationFrame(draw);
}

init();
