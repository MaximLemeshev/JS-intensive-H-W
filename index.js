const minutesBlock = document.querySelector(".stopwatch-minutes");
const secondsBlock = document.querySelector(".stopwatch-seconds");
const thousendsSecondsBlock = document.querySelector(
  ".stopwatch-thousends-seconds"
);

const startBtn = document.querySelector(".btn-start");
const stopBtn = document.querySelector(".btn-stop");
const resetBtn = document.querySelector(".btn-reset");

let interval;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;

const startTimerSec = () => {
  miliseconds++;

  if (miliseconds <= 99) {
    thousendsSecondsBlock.innerHTML = miliseconds;
  }

  if (miliseconds == 100) {
    thousendsSecondsBlock.innerHTML = "00";
  }

  if (miliseconds > 99) {
    seconds++;
    miliseconds = 0;
    secondsBlock.innerHTML = "0" + seconds;
  }

  if (seconds > 9) {
    secondsBlock.innerHTML = seconds;
  }

  if (seconds > 59) {
    minutes++;
    seconds = 0;
    minutesBlock.innerHTML = "0" + minutes;
    secondsBlock.innerHTML = "0" + seconds;
  }

  if (minutes > 9) {
    minutesBlock.innerHTML = minutes;
  }
};

startBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(startTimerSec, 10);
});
stopBtn.addEventListener("click", () => {
  clearInterval(interval);
});
resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  minutes = 0;
  seconds = 0;
  miliseconds = 0;
  minutesBlock.innerHTML = "0" + minutes;
  secondsBlock.innerHTML = "0" + seconds;
  thousendsSecondsBlock.innerHTML = "0" + miliseconds;
});

//

let countdown;
function startTimer() {
  var minutesInput = document.getElementById("minutesInput").value;
  var targetTime = new Date().getTime() + minutesInput * 60 * 1000;
  clearInterval(countdown);

  countdown = setInterval(function () {
    var now = new Date().getTime();
    var distance = targetTime - now;

    if (distance <= 0) {
      clearInterval(countdown);
      document.getElementById("timer-time").innerHTML = "Время вышло!";
    } else {
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      document.getElementById("timer-time").innerHTML =
        minutes + "м " + seconds + "с";
    }
  }, 1000);
}
//

const button = document.getElementById("clickMeButton");

function moveButton() {
  const maxWidth = window.innerWidth - button.clientWidth;
  const maxHeight = window.innerHeight - button.clientHeight;
  const randomX = Math.random() * maxWidth;
  const randomY = Math.random() * maxHeight;
  button.style.left = randomX + "px";
  button.style.top = randomY + "px";
}

button.addEventListener("mouseover", () => {
  if (Math.random() < 0.5) {
    moveButton();
  }
});

button.addEventListener("click", moveButton);
