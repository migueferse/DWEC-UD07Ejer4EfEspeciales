import JSConfetti from 'js-confetti'
let lanza = document.getElementById('lanza');
const jsConfetti = new JSConfetti()

lanza.addEventListener('click', lanzaConfetti);

async function lanzaConfetti() {
  lanza.disabled = true;
  await jsConfetti.addConfetti();
  lanza.disabled = false;
}

