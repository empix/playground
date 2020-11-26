const canvas: HTMLCanvasElement = document.querySelector('canvas');
const context: CanvasRenderingContext2D = canvas.getContext('2d');

const colorPicker: HTMLInputElement = document.querySelector('#color-picker');
const canvasContainer = document.querySelector('.canvas');

canvas.width = canvasContainer.clientWidth;
canvas.height = canvasContainer.clientHeight - 10;
context.fillStyle = '#eee';
context.fillRect(0, 0, canvas.width, canvas.height);

let mousePosition;
canvas.addEventListener('mousedown', changePostion);
canvas.addEventListener('mousemove', draw);

function changePostion({ offsetX: x, offsetY: y }) {
  mousePosition = { x, y };
}

function draw(event: MouseEvent) {
  if (event.buttons === 1) {
    context.beginPath();

    context.lineWidth = 5;
    context.lineCap = 'round';
    context.strokeStyle = colorPicker.value;

    context.moveTo(mousePosition.x, mousePosition.y);
    changePostion(event);
    context.lineTo(mousePosition.x, mousePosition.y);

    context.stroke();
  }
}
