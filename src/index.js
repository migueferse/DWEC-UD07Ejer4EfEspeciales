let nieve = document.getElementById('nieve');
let confetti = document.getElementById('confetti');

nieve.addEventListener('click', gotoNieve);
confetti.addEventListener('click', gotoConfetti);

function gotoNieve() {
  window.location.pathname = 'nieve.html';
}

function gotoConfetti() {
  window.location.pathname = 'confetti.html';
}