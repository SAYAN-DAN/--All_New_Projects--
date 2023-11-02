var isstatus =  document.querySelector("h3")

var addFriend  = document.querySelector("#addfr")

var removeFriend = document.querySelector("#Rmv")

addFriend.addEventListener("click" , function () {
    isstatus.innerHTML = "Friends"
    isstatus.style.color = "green"
})
removeFriend.addEventListener("click" , function () {
    isstatus.innerHTML = "stranger"
    isstatus.style.color = "red"
})