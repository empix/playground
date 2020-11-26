const canvas: HTMLCanvasElement = document.querySelector('#canvas');
const context: CanvasRenderingContext2D = canvas.getContext('2d');

const info = document.querySelector('#info');

window.addEventListener('resize', resizeCanvas);

function resizeCanvas() {
  const { innerWidth, innerHeight } = window;

  let width = innerWidth * 0.9;
  let height = innerHeight * 0.9;

  height = (9 / 16) * width;

  info.innerHTML = JSON.stringify(
    {
      width: width.toFixed(2),
      height: height.toFixed(2),
      innerHeight: innerHeight.toFixed(2),
      innerWidth: innerWidth.toFixed(2),
      'aspect-ratio': width / height,
    },
    null,
    2
  );

  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
}

resizeCanvas();
