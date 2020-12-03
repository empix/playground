var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');
var imageInput = document.querySelector('#imageInput');
var getImageDataButton = document.querySelector('#getImageData');
var allDivImages = document.querySelector('#allDivImages');
var image = new Image();
imageInput.addEventListener('change', function () {
    if (imageInput.files[0]) {
        image.src = URL.createObjectURL(imageInput.files[0]);
    }
});
image.addEventListener('load', function () {
    canvas.width = image.width;
    canvas.height = image.height;
    context.drawImage(image, 0, 0);
    URL.revokeObjectURL(image.src);
});
getImageDataButton.addEventListener('click', function () {
    var data = [];
    var divImage = document.createElement('div');
    allDivImages.append(divImage);
    for (var y = 0; y < image.height; y++) {
        var row = document.createElement('div');
        row.style.width = '100%';
        row.style.display = 'flex';
        for (var x = 0; x < image.width; x++) {
            var _a = context.getImageData(x, y, 1, 1).data, r = _a[0], g = _a[1], b = _a[2], a = _a[3];
            data.push("rgba(" + r + ", " + g + ", " + b + ", " + a / 255 + ")");
            var block = document.createElement('div');
            block.style.width = '5px';
            block.style.height = '5px';
            block.style.background = "rgba(" + r + ", " + g + ", " + b + ", " + a / 255 + ")";
            row.append(block);
        }
        divImage.append(row);
    }
});
