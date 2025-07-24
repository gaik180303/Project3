const startBtn = document.getElementById('startBtn');
const datetimeInput = document.getElementById('datetime');
const message = document.getElementById('message');
let countdownInterval = null;

startBtn.addEventListener('click', () => {
  const targetDate = new Date(datetimeInput.value);
  if (!datetimeInput.value || targetDate <= new Date()) {
    message.textContent = 'Please select a valid future date and time.';
    return;
  }

  message.textContent = '';
  clearInterval(countdownInterval); // Clear any existing countdowns

  countdownInterval = setInterval(() => {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      clearInterval(countdownInterval);
      updateDisplay(0, 0, 0, 0);
      message.textContent = "Time's up!";
      // Optional: Play sound or animation here
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    updateDisplay(days, hours, minutes, seconds);
  }, 1000);
});

function updateDisplay(days, hours, minutes, seconds) {
  document.getElementById('days').textContent = formatNum(days);
  document.getElementById('hours').textContent = formatNum(hours);
  document.getElementById('minutes').textContent = formatNum(minutes);
  document.getElementById('seconds').textContent = formatNum(seconds);
}

function formatNum(num) {
  return num < 10 ? '0' + num : num;
}
