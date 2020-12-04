const canvas: HTMLCanvasElement = document.querySelector('canvas');
const context: CanvasRenderingContext2D = canvas.getContext('2d');

const textForEncrypt: HTMLTextAreaElement = document.querySelector(
  '#text-for-encrypt'
);
const encryptButton: HTMLButtonElement = document.querySelector('#encrypt');
const widthInput: HTMLInputElement = document.querySelector('#width');
const heightInput: HTMLInputElement = document.querySelector('#height');

encryptButton.addEventListener('click', () => {
  const colors = textToHEX(textForEncrypt.value);
  drawPixelColorsInCanvas(colors);
});

function textToHEX(text: string) {
  const colors = [];

  for (let i = 0; i < text.length; i += 3) {
    const r = text.charCodeAt(i).toString(16);
    const g = text.charCodeAt(i + 1).toString(16);
    const b = text.charCodeAt(i + 2).toString(16);

    colors.push(`#${r}${g}${b}`);
  }

  return colors;
}

function drawPixelColorsInCanvas(colors: string[]) {
  let currentColor = 0;

  canvas.width = parseInt(widthInput.value);
  canvas.height = parseInt(heightInput.value);

  canvas.style.width = `${canvas.width}px`;
  canvas.style.height = `${canvas.height}px`;

  console.log(colors.length);

  for (let y = 0; y < parseInt(widthInput.value); y++) {
    for (let x = 0; x < parseInt(heightInput.value); x++) {
      context.fillStyle = colors[currentColor] || '#000000';
      context.fillRect(x, y, 1, 1);
      currentColor++;
    }
  }

  console.log(colors);
}
