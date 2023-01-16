import { createSnow, showSnow } from "pure-snow.js";
createSnow();
// showSnow(true);
let inicio = document.getElementById('inicio');
inicio.addEventListener('click', gotoinicio);

function gotoinicio() {
  window.location.pathname = 'index.html';
}