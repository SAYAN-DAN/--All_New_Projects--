var timer = 60;
var Score = 0;
var hitrn = 0;

function increaseScore() {
  Score += 10;
  document.querySelector("#Scoreval").textContent = Score;
}

function getnewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#Hitval").textContent = hitrn;
}

function makebubble() {
  var clutter = "";

  for (var i = 1; i <= 152; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += ` <div class="bubble">${rn}</div>`;
  }
  document.querySelector("#pbtn").innerHTML = clutter;
}

function runtimer() {
  var timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timeval").textContent = timer;
    } else {
      clearInterval(timerint);
      document.querySelector("#pbtn").innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
}

function ClickedNumber() {
  document.querySelector("#pbtn").addEventListener("click", function (dets) {
    var clickednum = Number(dets.target.textContent);
    if (clickednum === hitrn) increaseScore();
    makebubble();
    getnewHit();
  });
}
// increaseScore();
getnewHit();
runtimer();
makebubble();
ClickedNumber();
