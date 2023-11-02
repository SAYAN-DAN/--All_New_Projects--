var isstatus = document.querySelector("h3");

var addFriend = document.querySelector("#addfr");

var check = 0;

addFriend.addEventListener("click", function () {
  if (check === 0) {
    isstatus.innerHTML = "Friends";
    isstatus.style.color = "green";
    addFriend.style.backgroundColor = "#dadada";
    addFriend.style.color = "black"
    addFriend.innerHTML = "Remove Friend";
    check = 1;
  } else {
    isstatus.innerHTML = "stranger";
    isstatus.style.color = "red";
    addFriend.style.backgroundColor =  " rgb(78, 78, 251)"
    addFriend.style.color = "#fff"
    addFriend.innerHTML = "Add Friend";
    check = 0;
  }
});
