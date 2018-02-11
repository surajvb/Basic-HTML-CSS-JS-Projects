function check(){
    var age = document.getElementById("element").value;
    if(age==0){
        console.log("not yet born");
    }
    else{
    if(age<18){
        console.log("not eligible to vote");
    }
    else{
        console.log("eligible to vote");
        if(age>=24)
        {
        console.log("eligible to contest elections");
            if(age>=60)
            {
            console.log("Time to live retirement life");
            }
        }
        
    }  
 }
    
}

/* task 3*/
var arr =[1,2,3]
var sum = 0;
for(arr && arr.length>0){
    for(var i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    console.log(sum);
}

/*task 4*/


var arr =[1,2,3]

for(arr && arr.length>0){
    for(var i=0; i<arr.length; i++){
        var mul=arr[i]*5;
        if(mul > 200 && mul < 250){
            
        }else if(mul > 250){
            
        }
    }
    console.log(sum);
}














