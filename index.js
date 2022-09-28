const word = document.getElementById("word");
const text = document.getElementById("input_area");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endGameEl = document.getElementById("end_game");


const words = [
  "toothsome",
  "swot",
  "ill-fated",
  "yarn",
  "sleep",
  "utter",
  "omit",
  "freeze",
  "sticky",
  "construct",
  "ad hoc",
  "measure",
  "provide",
  "dreary",
  "quarrel",
  "chair",
  "digestion",
  "finger",
  "jeans",
  "send",
];

let randomWord;
let score = 0;
let time = 60;

function getRandomWord() {
  return words[Math.floor(Math.random()*words.length)];
}

function addToDo() {
  randomWord = getRandomWord();
  word.innerHTML  = randomWord;
}



function updateScore(){
  score++;
  scoreEl.innerHTML = score;
}

function updateTime(){
  time--;
  timeEl.innerHTML = time;

  if(time === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}

function gameOver(){
  endGameEl.innerHTML = `
  <h1>Wagt gutardy!</h1>
  <h3>Bal: ${score}</h3>
  <button onclick="location.reload()">Täzeden synanyş!</button>
  `;
  endGameEl.style.display = "flex";
}

const timeInterval = setInterval(updateTime,1000);


addToDo();
text.addEventListener("input",(e) => {
  const typedText = e.target.value;

  if(typedText === randomWord){
    updateScore();
    addToDo();
    e.target.value = "";
    updateTime();
  }
})