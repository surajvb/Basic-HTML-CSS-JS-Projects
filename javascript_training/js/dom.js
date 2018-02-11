document.getElementById("h").style.backgroundColor="yellow";
document.getElementById("h").style.textAlign="center";



/*BOM DEMO*/

function newWindow(){
    //window.open("https://www.google.com");
}

function newWindowCustomised(){
    //window.open("https://www.google.com");
    outerWidth=800;
    outerHeight=700;
}

document.getElementById("btn").addEventListener("click", fun);

function fun(Event){
    console.log("clicked");
    Event.stopPropagation();
}


document.getElementById("btn2").addEventListener("click", fun2);



function fun2(Event){
    console.log("clicked");
    Event.stopPropagation(); document.getElementById("btn2").removeEventListener("click", fun2);
    
}

function boddy(event){
    console.log("body also clicked");
} 










