// audioElement.play();

//Initialize the variables

let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.querySelectorAll("#songItem"));

let songs = [
  {
    songName: "Warriyo - Mortals [NCS Release]",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Cielo - Huma-Huma",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "DEAF KEV - Invincible [NCS Release]-320k",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "Different Heaven & EH!DE - My Heart [NCS Release]",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songName: "Rabba - Salam-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "Sakhiyaan - Salam-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songName: "Bhula Dena - Salam-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/8.jpg",
  },
  {
    songName: "Tumhari Kasam - Salam-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/9.jpg",
  },
  {
    songName: "Na Jaana - Salam-e-Ishq",
    filePath: "songs/4.mp3",
    coverPath: "covers/10.jpg",
  },
];

songItems.forEach((element, i) => {
  console.log(element, i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});
//Handle play / pause click

masterPlay.addEventListener("click", function () {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});
//Listen To events

audioElement.addEventListener("timeupdate", function () {
  //    console.log("timeupdate");
  //update seekbar

  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  //   console.log(progress);
  myProgressBar.value = progress;
});


myProgressBar.addEventListener("change", function () {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = function() {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(function (element) {
    element.classList.remove("fa-circle-pause")
    element.classList.add("fa-circle-play")
  })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach(function (element) {
  element.addEventListener("click" , function (e) {
    // console.log(e.target);
    makeAllPlays()
    songIndex = parseInt(e.target.id)
    e.target.classList.remove("fa-circle-play")    
    e.target.classList.add("fa-circle-pause")    
    audioElement.src = `songs/${songIndex+1}.mp3`
    masterSongName.innerText = songs[songIndex].songName
    audioElement.currentTime = 0
    audioElement.play()
    gif.style.opacity = 0;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
  })
})

document.getElementById("next").addEventListener("click" , function () {
  if (songIndex >= 9) {
    songIndex =0
  } else {
    songIndex +=1
  }
  audioElement.src = `songs/${songIndex+1}.mp3`
  masterSongName.innerText = songs[songIndex].songName
  audioElement.currentTime = 0
  audioElement.play()
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
})

document.getElementById("previous").addEventListener("click" , function () {
  if (songIndex <=0) {
    songIndex =0
  } else {
    songIndex -=1
  }
  audioElement.src = `songs/${songIndex+1}.mp3`
  masterSongName.innerText = songs[songIndex].songName
  audioElement.currentTime = 0
  audioElement.play()
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
})