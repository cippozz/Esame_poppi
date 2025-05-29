let timer;
let milliseconds = 0;
let running = false;

const display = document.getElementById('display');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');
const giroBtn = document.getElementById('giro');
const giriList = document.getElementById('giri-list');

function formatTime(ms) {
  let totalSeconds = Math.floor(ms / 100);
  let m = Math.floor(totalSeconds / 60);
  let s = totalSeconds % 60;
  let cs = ms % 100;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}:${cs.toString().padStart(2, '0')}`;
}

function updateDisplay() {
  display.textContent = formatTime(milliseconds);
}

function startTimer() {
  if (running) return;
  running = true;
  timer = setInterval(() => {
    milliseconds++;
    updateDisplay();
  }, 10); // ogni 10ms → centesimi di secondo
}

function stopTimer() {
  running = false;
  clearInterval(timer);
}

function resetTimer() {
  stopTimer();
  milliseconds = 0;
  updateDisplay();
  giriList.innerHTML = "";
}

function salvaGiro() {
  const li = document.createElement('li');
  li.textContent = formatTime(milliseconds);
  giriList.appendChild(li);
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
giroBtn.addEventListener('click', salvaGiro);

updateDisplay();
