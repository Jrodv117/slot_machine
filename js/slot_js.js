const jackpot = [3,3,3];

let randomNumsArray = [];

function generateNums() {
    return Math.floor(Math.random() *3 ) + 1;
}

function subtract() {
  const cash1 = document.getElementById("cash1");
  const newCash = parseInt(cash1.value) - 10;
  cash1.value = newCash;

  if (newCash < 10) {
    alert("GAME OVER");
    document.location.reload();
  }
}

function runNums() {
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const num3 = document.getElementById('num3');
    
    const item1 = generateNums();
    const item2 = generateNums();
    const item3 = generateNums();

    num1.innerHTML = `${item1}`
    num2.innerHTML = `${item2}`
    num3.innerHTML = `${item3}`

    randomNumsArray = [item1, item2 ,item3]
    
    if (randomNumsArray.toString() === jackpot.toString()) {
      showjMessage();
    } 
    else if (item1 === item2 && item1 === item3 && item1 < 3) {
        showwMessage();
    }
    else {
        hideMessage();
        subtract();
    }
}

function showwMessage() {
    const wmsg = document.getElementById("wmessage");
    wmsg.style.display = "block";
}

function showjMessage() {
  const jmsg = document.getElementById("jmessage");
  jmsg.style.display = "block";
}

function hideMessage() {
    const wmsg = document.getElementById("wmessage");
    const lmsg = document.getElementById("lmessage");
    const jmsg = document.getElementById("jmessage");
    wmsg.style.display = "none"
    lmsg.style.display = "none"
    jmsg.style.display = "none"
}