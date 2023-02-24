var count = 0;
var time = 60;
var 

function changePosition() {
  count++;
  document.getElementsByClassName("score-value")[0].innerHTML = " " + count;
  var top = Math.floor(Math.random() * 30) + 1;
  var left = Math.floor(Math.random() * 70) + 1;
  document.getElementsByClassName("object")[0].style.marginTop = top + "%";
  document.getElementsByClassName("object")[0].style.marginLeft = left + "%";
}

function timer() {
  action = setInterval(function () {
    document.getElementsByClassName("timer-value")[0].innerHTML = " " + time;
    if (time === 50) {
      document.getElementById("result").innerHTML = count;
      document.getElementsByClassName("score-value")[0].innerHTML = " " + count;
      document.getElementsByClassName("object")[0].style.display = "none";
      document.getElementsByClassName("game-over-box")[0].style.display =
        "block";
      clearInterval(action);
    }
    time--;
  }, 1000);
}

function startGame() {
  timer();
}

function resetGame() {
  clearInterval(action);
}
