const els = document.getElementsByTagName("td");
const btn = document.querySelector(".btn");

let player = "X";
let gameOver = false;

function restartGame() {
  gameOver = false;
  player = "X";
  for (let i = 0; i < els.length; i++) {
    els[i].innerHTML = "";
  }
  btn.style.display = "none";
}

btn.addEventListener("click", restartGame, false);
btn.style.display = "none";

function clickElement(e, i) {
  if (e.target.innerHTML === "" && !gameOver) {
    e.target.innerHTML = player;
    checkForWin(player);
    player === "X" ? (player = "O") : (player = "X");
  }
}

for (let i = 0; i < els.length; i++) {
  els[i].addEventListener("click", (e) => clickElement(e, i), false);
}

function checkForWin(player) {
  if (
    // horizontal
    (els[0].innerHTML === player && els[1].innerHTML === player && els[2].innerHTML === player) ||
    (els[3].innerHTML === player && els[4].innerHTML === player && els[5].innerHTML === player) ||
    (els[6].innerHTML === player && els[7].innerHTML === player && els[8].innerHTML === player) ||
    // vertical
    (els[0].innerHTML === player && els[3].innerHTML === player && els[6].innerHTML === player) ||
    (els[1].innerHTML === player && els[4].innerHTML === player && els[7].innerHTML === player) ||
    (els[2].innerHTML === player && els[5].innerHTML === player && els[8].innerHTML === player) ||
    // diagonal
    (els[0].innerHTML === player && els[4].innerHTML === player && els[8].innerHTML === player) ||
    (els[2].innerHTML === player && els[4].innerHTML === player && els[6].innerHTML === player)
  ) {
    console.log(`${player} wins!`);
    gameOver = true;
    btn.style.display = "block";
  }
}
