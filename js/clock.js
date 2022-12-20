let fullName1 = prompt("Lütfen adınızı giriniz.");
let myName = document.querySelector("#myName");
myName.innerHTML = `${myName.innerHTML} ${fullName1}`;

function showTime() {
  time = moment().locale("tr").format("HH:mm:ss dddd");
  document.getElementById("myClock").innerHTML = time;
  document.getElementById("myClock").textContent = time;
}

setInterval(showTime, 1000);
showTime();
