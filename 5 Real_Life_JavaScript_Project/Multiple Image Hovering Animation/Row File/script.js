// When We select one element************

// var element = document.querySelector("#elem1");
// var elemImage = document.querySelector("#elem1 img");

// element.addEventListener("mousemove", function (event) {
//   elemImage.style.left = event.clientX + "px";
//   elemImage.style.top = event.clientY + "px";
// });

// element.addEventListener("mouseenter", function () {
//   elemImage.style.opacity = 1;
// });

// element.addEventListener("mouseleave", function () {
//   elemImage.style.opacity = 0;
// });

// ************************************************************

//When we select multiple element in one time

var elements = document.querySelectorAll(".elem");

elements.forEach(function (element) {
  element.addEventListener("mouseenter", function (e) {
    element.childNodes[3].style.opacity = 1;
  });
  element.addEventListener("mouseleave", function (e) {
    element.childNodes[3].style.opacity = 0;
  });
  element.addEventListener("mousemove", function (e) {
    element.childNodes[3].style.left = e.x + "px";
    element.childNodes[3].style.top = e.y + "px";
  });
});


// var element = document.querySelectorAll(".elem");

// element.forEach(function (event) {
//   // console.log(event.childNodes);
//   event.addEventListener("mouseenter", function (e) {
//     event.childNodes[3].style.opacity = 1;
//   });
//   event.addEventListener("mouseleave", function (e) {
//     event.childNodes[3].style.opacity = 0;
//   });
//   event.addEventListener("mousemove", function (e) {
//     event.childNodes[3].style.left = e.x + "px";
//     event.childNodes[3].style.top = e.y + "px";
//   });
// });
