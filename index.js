var sidenav = document.querySelector(".side-navbar");

function showNav() {
  sidenav.style.right = "0";
}

function closeNav() {
  sidenav.style.right = "-50%";
}

// subscribe

var phNo = document.querySelector("#phno");
function subscribe() {
  var phNoV = phNo.value;
  var lOfNo = phNoV.length;
  var no = parseInt(phNoV);
  if ((no > 0) & (lOfNo == 10)) {
    alert("Subscription 😃 done by this 👉" + no);
  } else {
    alert("Please enter valid Phone number ❗");
  }
  console.log(phNo);
}

// shopNow page

function placeOrder() {
  alert("Successfully Place the Order ✅ \n        Have a nice day 😊");
}

// contact page

function contact() {
  alert("Your message successfully send ✅");
}
