const canvas: HTMLCanvasElement = document.querySelector('canvas');
const context: CanvasRenderingContext2D = canvas.getContext('2d');

const imageInput: HTMLInputElement = document.querySelector('#imageInput');
const getImageDataButton: HTMLButtonElement = document.querySelector(
  '#getImageData'
);
const allDivImages = document.querySelector('#allDivImages');
const image = new Image();

imageInput.addEventListener('change', () => {
  if (imageInput.files[0]) {
    image.src = URL.createObjectURL(imageInput.files[0]);
  }
});

image.addEventListener('load', () => {
  canvas.width = image.width;
  canvas.height = image.height;
  context.drawImage(image, 0, 0);
  URL.revokeObjectURL(image.src);
});

getImageDataButton.addEventListener('click', () => {
  let data = [];

  const divImage = document.createElement('div');

  allDivImages.append(divImage);

  for (let y = 0; y < image.height; y++) {
    const row = document.createElement('div');
    row.style.width = '100%';
    row.style.display = 'flex';

    for (let x = 0; x < image.width; x++) {
      const [r, g, b, a] = context.getImageData(x, y, 1, 1).data;

      data.push(`rgba(${r}, ${g}, ${b}, ${a / 255})`);

      const block = document.createElement('div');
      block.style.width = '5px';
      block.style.height = '5px';
      block.style.background = `rgba(${r}, ${g}, ${b}, ${a / 255})`;

      row.append(block);
    }
    divImage.append(row);
  }
});
