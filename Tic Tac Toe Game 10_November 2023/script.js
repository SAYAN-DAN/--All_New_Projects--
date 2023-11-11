let music = new Audio("music.mp3");
let Audioting = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let ting = "X";

//function to change the turn

const changeTing = function () {
  return ting === "X" ? "0" : "X";
};

// function to check for a win

const checkWin = function () {
    let boxtexts = document.getElementsByClassName("boxtext")
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach (function (e)  {
            if((boxtext[e[0]].innerText === boxtext[e[0]].innerText) &&(boxtext[e[0]].innerText === boxtext[e[0]].innerText)&&boxtext[e[0]].innerText !=="" ){}
    })
};

// Game Logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(function (element) {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", function (e) {
    if (boxtext.innerText === "") {
      boxtext.innerText = ting;
      ting = changeTing();
      Audioting.play();
      checkWin();
      document.getElementsByClassName("info")[0].innerText = "Turn for" + ting;
    }
  });
});
