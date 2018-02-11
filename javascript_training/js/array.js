var library=[
    
    {
        author:'bill',
        title:'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'steve',
        title:'walt',
        readingStatus: true
    },
    
    {
        author: 'collin',
        title:'mock',
        readingStatus: false
    }
]
var i;
for(i=0;i<library.length;i++)
    {
        if(library[i].readingStatus==true){
            console.log(library[i].author);
            console.log(library[i].title);
        }
    }

function multiply(){
    var a= document.getElementById("value1").value;
    var b= document.getElementById("value2").value;
    var c = a*b;
    document.getElementById("result").innerText=c;
    
}
function divide(){
    var n= document.getElementById("value1").value;
    var m= document.getElementById("value2").value;
    var j = n/m;
    document.getElementById("result").innerText=j;
    
}