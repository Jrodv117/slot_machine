/*----- constants -----*/
const jackpot = [3,3,3];
const smallWin = [1,1,1]
const mediumWin = [2,2,2]

/*------ state variables ------*/
let board, money, item1, item2, item3

/*------ cached element references ------*/
const btnEl = document.querySelector('button');
const num1El = document.getElementById('num1');
const num2El = document.getElementById('num2');
const num3El = document.getElementById('num3');
const cash = document.getElementById("cash");
const wmsg = document.getElementById("wmessage");
const lmsg = document.getElementById("lmessage");
const jmsg = document.getElementById("jmessage");

/*------ event listener ------*/
btnEl.addEventListener('click', function(){
  runNumGenerator();
});

/*------ functions ------*/
function init() {
  board = [null,null,null];
  // money = 100;
}

function generateNums() {
    return Math.floor(Math.random() *3 ) + 1;
}

function runNumGenerator () {
  item1 = generateNums();
  item2 = generateNums();
  item3 = generateNums();
  handleNums();
}

function handleNums() {
  num1El.innerHTML = `${item1}`
  num2El.innerHTML = `${item2}`
  num3El.innerHTML = `${item3}`
  render();
}
 
function render() {
  board = [item1, item2 ,item3]

  if (board.toString() === jackpot.toString()) {
    showjMessage();
  } 
  else if (item1 === item2 && item1 === item3 && item1 < 3 && board.toString() !== jackpot.toString()) {
    showwMessage();
  }
  else {
    hideMessage();
    subtract();
  }
}

function subtract() {
  const newCash = parseInt(cash.value) - 10;
  cash.value = newCash;

  if (newCash < 5) {
    alert("GAME OVER");
    document.location.reload();
  }
}

function showwMessage() {
  wmsg.style.display = "block";
}

function showjMessage() {
  jmsg.style.display = "block";
}

function hideMessage() {
  wmsg.style.display = "none"
  lmsg.style.display = "none"
  jmsg.style.display = "none"
}

init()