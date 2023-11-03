var main = document.querySelector("#main");
var crsr = document.querySelector("#cursor");

main.addEventListener("mousemove", function (man) {
  crsr.style.top = man.y + "px";
  crsr.style.left = man.x + "px";
});
