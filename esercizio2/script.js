let timer;
let seconds = 0;
let running = false;

const display = document.getElementById('display');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

function formatTime(sec) {
  let m = Math.floor(sec / 60);
  let s = sec % 60;
  return (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);
}

function updateDisplay() {
  display.textContent = formatTime(seconds);
}

function startTimer() {
  if (running) return;
  running = true;
  timer = setInterval(() => {
    seconds++;
    updateDisplay();
  }, 1000);
}

function stopTimer() {
  running = false;
  clearInterval(timer);
}

function resetTimer() {
  stopTimer();
  seconds = 0;
  updateDisplay();
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

updateDisplay();
