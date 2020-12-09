const timer = document.querySelector('#timer');

const playBtn = document.querySelector('#play');
const pauseBtn = document.querySelector('#pause');

let pomodoro;

playBtn.addEventListener('click', () => {
  playBtn.disabled = true;
  pauseBtn.disabled = false;

  if (pomodoro) {
  } else {
    pomodoro = Date.now();

    startTimer();
  }
});

function startTimer() {
  setInterval(() => {
    if (pomodoro) {
      const time = new Date(Date.now() - pomodoro);
      const minutes = ('0' + time.getMinutes()).slice(-2);
      const seconds = ('0' + time.getSeconds()).slice(-2);

      timer.innerText = `${minutes}:${seconds}`;
    }
  }, 1000);
}

pauseBtn.addEventListener('click', () => {
  pauseBtn.disabled = true;
  playBtn.disabled = false;
});
