var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');
var colorPicker = document.querySelector('#color-picker');
var canvasContainer = document.querySelector('.canvas');
canvas.width = canvasContainer.clientWidth;
canvas.height = canvasContainer.clientHeight - 10;
context.fillStyle = '#eee';
context.fillRect(0, 0, canvas.width, canvas.height);
var mousePosition;
canvas.addEventListener('mousedown', changePostion);
canvas.addEventListener('mousemove', draw);
function changePostion(_a) {
    var x = _a.offsetX, y = _a.offsetY;
    mousePosition = { x: x, y: y };
}
function draw(event) {
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
