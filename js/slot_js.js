/*----- constants -----*/
const jackpot = [2, 2, 2];

/*------ state variables ------*/
let board, item1, item2, item3

/*------ cached element references ------*/
const btnEl = document.getElementById('bttn');
const refreshBtnEl = document.getElementById('refresh')
const num1El = document.getElementById('slot1');
const num2El = document.getElementById('slot2');
const num3El = document.getElementById('slot3');
const bank = document.getElementById("bank");
const winMsg = document.getElementById("winmessage");
const lossMsg = document.getElementById("lossmessage");
const jackpotMsg = document.getElementById("jackpotmessage");

/*------ event listener ------*/
btnEl.addEventListener('click', function() {
    runNumGenerator();
});

refreshBtnEl.addEventListener('click', function() {
    document.location.reload();
    init();
})

/*------ functions ------*/
function init() {
    board = [null, null, null];
    item1 = 0;
    item2 = 0;
    item3 = 0;
    bank.value =100;
}

function generateNums() {
    return Math.floor(Math.random() * 3) + 1;
}

function runNumGenerator() {
    item1 = generateNums();
    item2 = generateNums();
    item3 = generateNums();
    render();
}

function render() {
    num1El.innerHTML = `${item1}`
    num2El.innerHTML = `${item2}`
    num3El.innerHTML = `${item3}`

    board = [item1, item2, item3]

    if (board.toString() === jackpot.toString()) {
        showJackpotMessage();
        addJackpot();
    } else if (item1 === item2 && item1 === item3 && board.toString() !== jackpot.toString()) {
        showWinMessage();
        addWin();
    } else {
        hideMessage();
        subtract();
    }
}

function subtract() {
    const newCash = parseInt(bank.value) - 10;
    bank.value = newCash;

    if (newCash < 10) {
        showLossMessage();
    }
}

function addWin() {
    const newCash = parseInt(bank.value) + 30;
    bank.value = newCash;
}

function addJackpot() {
    const newCash = parseInt(bank.value) + 1000;
    bank.value = newCash;
}

function showLossMessage() {
    lossMsg.style.display = "block";
    refreshBtnEl.style.display = "block";
    btnEl.style.display = "none";
}

function showWinMessage() {
    winMsg.style.display = "block";
}

function showJackpotMessage() {
    jackpotMsg.style.display = "block";
    refreshBtnEl.style.display = "block";
    btnEl.style.display = "none";
}

function hideMessage() {
    winMsg.style.display = "none"
    lossMsg.style.display = "none"
    jackpotMsg.style.display = "none"
    refreshBtnEl.style.display = "none"
}

init();