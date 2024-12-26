var sidenav = document.querySelector(".side-navbar");



function showNav(){
    sidenav.style.left="0";
}

function closeNav(){
    sidenav.style.left="-50%";
}

// subscribe

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



// shopNow page


var address = document.querySelector("#address");
function placeOrder(){
    var adrs = address.value;
    if(adrs == "."){
        alert("Please enter the address (*.*)");
    }
    else{
        alert("Successfully Place the Order \n        Have a nice day :)")
    }
}


// contact page

function contact(){
    alert("Your message successfully send (^_^)");
}