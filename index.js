var sidenav = document.querySelector(".side-navbar");



function showNav(){
    sidenav.style.left="0";
}

function closeNav(){
    sidenav.style.left="-50%";
}

var phNo = document.querySelector("#phno");
function subscribe(){
    var phNoV = phNo.value;
    var lOfNo = phNoV.length;
    var no = parseInt(phNoV);
    if(no > 0 & lOfNo ==10){
        alert("Subscription done by this ->"+no)
    }
    else{
        alert("Plz enter valid Phone number !");
    }
    console.log(phNo);
}


function placeOrder(){
    alert("Successfully Place the Order (~.~) \n        Have a nice day :)")
}