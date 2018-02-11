 var arr = [];

function onAddClick(){
  
   var x = document.querySelector("#text").value;
    arr.push(x);
    document.querySelector("#text").value = '';//resetting input
    console.log(arr);
}

document.getElementById("add").addEventListener("click",onAddClick);
document.getElementById("display").addEventListener("click", onDisplay);


/*
function onDisplay(){
   // var ul = document.querySelector("#resultlist");
    //var li = "";
    for(i=0; i<arr.length;i++){
        document.getElementById("resultlist").innerHTML += arr[i] + "<br>";
       // li+=`<li> ${arr[i]}<li>`;
        
    }
     
}
*/


function onDisplay(){

var li = "";
if(arr != null& arr.length>0){
for(var i=0; i<arr.length;i++){
   li+= `<li> element ${i} is ${arr[i]}</li>`;
}
}
document.querySelector("#resultlist").innerHTML = li;
}










