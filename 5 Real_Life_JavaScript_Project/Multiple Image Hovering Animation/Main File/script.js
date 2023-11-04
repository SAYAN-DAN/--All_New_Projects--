// ONLY ONE ELEMENT
// var elem1 = document.querySelector("#elem1")
// var elemImage = document.querySelector("#elem1 img")

// elem1.addEventListener("mousemove" , function (dets) {
//     elemImage.style.left = dets.x +"px"
//     elemImage.style.top = dets.y +"px"
// })

// elem1.addEventListener("mouseenter" , function (dets) {
//     elemImage.style.opacity = 1
// })
// elem1.addEventListener("mouseleave" , function (dets) {
//     elemImage.style.opacity = 0
// })

// ALL ELEMENT

// var elem = document.querySelectorAll(".elem");

// elem.forEach(function (val) {
//   // console.log(val.childNodes);
//   val.addEventListener("mouseenter", function () {
//     val.childNodes[3].style.opacity = 1;
//   });
//   val.addEventListener("mouseleave", function () {
//     val.childNodes[3].style.opacity = 0;
//   });
//   val.addEventListener("mousemove", function (dets) {
//     val.childNodes[3].style.left = dets.x + "px";
//     val.childNodes[3].style.top = dets.y + "px";
//   });
// });

var elem = document.querySelectorAll(".elem");

elem.forEach(function (val) {
  var img = val.querySelector("img"); // Select the image element within each .elem

  val.addEventListener("mouseenter", function () {
    img.style.opacity = 1;
  });
  val.addEventListener("mouseleave", function () {
    img.style.opacity = 0;
  });
  val.addEventListener("mousemove", function (dets) {
    img.style.position = "absolute"; // Set the position to absolute
    img.style.left = dets.clientX + "px";
    img.style.top = dets.clientY + "px";
  });
});
