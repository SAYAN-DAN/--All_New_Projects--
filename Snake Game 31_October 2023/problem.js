
// ***************************************************************************************
// // GAme Constants and Variabls

// let inputDir = { x: 0, y: 0 };
// const foodSound = new Audio("food.mp3");
// const gameoverSound = new Audio("gameover.mp3");
// const moveSound = new Audio("move.mp3");
// const musicSound = new Audio("music.mp3");
// let speed = 2;
// let lastPaintTime = 0;
// let score = 0;
// let snakeArr = [{ x: 13, y: 15 }];
// food = { x: 6, y: 7 };
// // // Game Functions
// function main(ctime) {
//   window.requestAnimationFrame(main);

//   if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
//     return;
//   }
//   lastPaintTime = ctime;
//   gameEngine();
// }

// function isCollide(sarr) {
//   return false;
// }

// function gameEngine() {
//   // part 1: Updateing the snake array and food
//   if (isCollide(snakeArr)) {
//     gameoverSound.play();
//     musicSound.pause();
//     inputDir = { x: 0, y: 0 };
//     alert = "Game Over.press any key to play again!";
//     snakeArr = [{ x: 13, y: 15 }];
//     musicSound.play();
//     score = 0;
//   }

//   // If you have eaten the food, increment the score and regenerate the food
//   if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
//     snakeArr.unshift({
//       x: snakeArr[0].x + inputDir.x,
//       y: snakeArr[0].y + inputDir.y,
//     });
//     let a = 2;
//     let b = 16;
//     food = {
//       x: Math.round(a + (b - a) * Math.random()),
//       y: Math.round(a + (b - a) * Math.random()),
//     };
//   }

//   //Moving snake
//   for (let i = snakeArr.length - 2; i >= 0; i--) {
//     snakeArr[i + 1] = { ...snakeArr[i] };
//   }

//   snakeArr[0].x += inputDir.x;
//   snakeArr[0].y += inputDir.y;

//   // part 2: Display the snake and food
//   // Display the Snake
//   const board = document.getElementById("board");
//   board.innerHTML = "";
//   snakeArr.forEach((e, index) => {
//     snakeElement = document.createElement("div");
//     snakeElement.style.gridRowStart = e.y;
//     snakeElement.style.gridColumnStart = e.y;

//     if (index === 0) {
//       snakeElement.classList.add("head");
//     } else {
//       snakeElement.classList.add("snake");
//     }
//     board.appendChild(snakeElement);
//   });
//   //Display the food
//   foodElement = document.createElement("div");
//   foodElement.style.gridRowStart = food.y;
//   foodElement.style.gridColumnStart = food.x;
//   foodElement.classList.add("food");
//   board.appendChild(foodElement);
// }

// // Game logic start here

// window.requestAnimationFrame(main);
// window.addEventListener("keydown", (e) => {
//   moveSound.play();
//   inputDir = { x: 0, y: 1 }; //Start the game
//   switch (e.key) {
//     case "ArrowUp":
//       console.log("ArrowUp");
//       inputDir.x = 0;
//       inputDir.y = -1;
//       break;
//     case "ArrowDown":
//       console.log("ArrowDown");
//       inputDir.x = 0;
//       inputDir.y = 1;
//       break;
//     case "ArrowLeft":
//       console.log("ArrowLeft");
//       inputDir.x = -1;
//       inputDir.y = 0;
//       break;
//     case "ArrowRight":
//       console.log("ArrowRight");
//       inputDir.x = 1;
//       inputDir.y = 0;
//       break;
//     default:
//       break;
//   }
// });
// // chatGPT told me to write this code
// // window.addEventListener("keydown", (e) => {
// //   moveSound.play();
// //   switch (e.key) {
// //     case "ArrowUp":
// //       direction = { x: 0, y: -1 }; // Move up
// //       break;
// //     case "ArrowDown":
// //       direction = { x: 0, y: 1 }; // Move down
// //       break;
// //     case "ArrowLeft":
// //       direction = { x: -1, y: 0 }; // Move left
// //       break;
// //     case "ArrowRight":
// //       direction = { x: 1, y: 0 }; // Move right
// //       break;
// //     default:
// //       break;
// //   }
// // });