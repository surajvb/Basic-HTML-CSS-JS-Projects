var x=10;

var btnn=document.createElement("button");
var btnlabel = document.createTextNode("Test Button");
btnn.append(btnlabel);
document.getElementById("box").appendChild(btnn);

function onLoginClick(event){
    console.log("loginclicked");
    event.target.innerText="already logged in"; 
    document.getElementById("para1").innerText="success";
    document.getElementById("btn").style.backgroundColor="green";
    document.getElementById("para1").style.color="green";
    document.getElementById("para1").style.fontSize="100px";
    document.querySelector("#para1").style.backgroundColor="gray";
    document.querySelectorAll(".ghj")[1].style.backgroundColor="gray";
}




function add(x,y){
    console.log(x+y);
}

add(10,30);