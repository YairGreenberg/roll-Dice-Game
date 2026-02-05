let scores;
let currentScore;
let activePlayer;
let isPlaying;

let scors_player1 = 0;
let scors_player2 = 0;

const maxScore = 100;
const diceNames = ["one", "two", "three", "four", "five", "six"];
let total = document.getElementById(`total-${activePlayer}`);

function init() {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = Math.floor(Math.random() * 2);
  isPlaying = true;
  updateUI();
}
function updateUI() {
  document.getElementById("total-0").textContent = scores[0];
  document.getElementById("total-1").textContent = scores[1];

  document.getElementById("curr-0").textContent = "0";
  document.getElementById("curr-1").textContent = "0";

  document.getElementById(`curr-${activePlayer}`).textContent = currentScore;

  document.getElementById("p-0").classList.remove("active");
  document.getElementById("p-1").classList.remove("active");
  document.getElementById(`p-${activePlayer}`).classList.add("active");
}

init();

function switchPlayer() {
  currentScore = 0;
  document.getElementById(`curr-${activePlayer}`).textContent = "0";
  activePlayer = activePlayer === 0 ? 1 : 0;

  document.getElementById("p-0").classList.toggle("active");
  document.getElementById("p-1").classList.toggle("active");
}

document.getElementById("btn-roll").addEventListener("click", () => {
  
  if (isPlaying) {
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;

    document.getElementById("d1").src = `img/${diceNames[dice1 - 1]}.png`;
    document.getElementById("d2").src = `img/${diceNames[dice2 - 1]}.png`;
    

    if (dice1 === dice2) {
      scores[activePlayer] = 0;
      document.getElementById(`curr-${activePlayer}`).textContent = "0";
      switchPlayer();
    } else {
      if (scors_player2 >= maxScore || scors_player1 >= maxScore) {
        alert("Player" + (activePlayer + 1) + "winer!");
        isPlaying = false;
        scors_player2 = 0;
        scors_player1 = 0;
      }
   
      currentScore += dice1 + dice2;
      if (`total-${activePlayer}` === "total-0") {
        scors_player1 += dice1 + dice2;
        document.getElementById(`total-${activePlayer}`).textContent =
          scors_player1;
      } else {
        scors_player2 += dice1 + dice2;
        document.getElementById(`total-${activePlayer}`).textContent =
          scors_player2;
      }
      document.getElementById(`curr-${activePlayer}`).textContent =
        currentScore;
    }
  }
});

document.getElementById("btn-hold").addEventListener("click", () => {
  if (isPlaying) {
    scores[activePlayer] += currentScore;
    document.getElementById(`total-${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= maxScore) {
      alert("Player" + (activePlayer + 1) + "winer!");
      isPlaying = false;
      scors_player2 = 0;
      scors_player1 = 0;
    } else {
      switchPlayer();
    }
  }
});

document.getElementById("btn-new").addEventListener("click", init);

let scors_player1_curent_around = 0;
let scors_player2_curent_around = 0;
