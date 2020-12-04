var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');
var textForEncrypt = document.querySelector('#text-for-encrypt');
var encryptButton = document.querySelector('#encrypt');
var widthInput = document.querySelector('#width');
var heightInput = document.querySelector('#height');
encryptButton.addEventListener('click', function () {
    var colors = textToHEX(textForEncrypt.value);
    drawPixelColorsInCanvas(colors);
});
function textToHEX(text) {
    var colors = [];
    for (var i = 0; i < text.length; i += 3) {
        var r = text.charCodeAt(i).toString(16);
        var g = text.charCodeAt(i + 1).toString(16);
        var b = text.charCodeAt(i + 2).toString(16);
        colors.push("#" + r + g + b);
    }
    return colors;
}
function drawPixelColorsInCanvas(colors) {
    var currentColor = 0;
    canvas.width = parseInt(widthInput.value);
    canvas.height = parseInt(heightInput.value);
    canvas.style.width = canvas.width + "px";
    canvas.style.height = canvas.height + "px";
    console.log(colors.length);
    for (var y = 0; y < parseInt(widthInput.value); y++) {
        for (var x = 0; x < parseInt(heightInput.value); x++) {
            context.fillStyle = colors[currentColor] || '#000000';
            context.fillRect(x, y, 1, 1);
            currentColor++;
        }
    }
    console.log(colors);
}
