document.getElementById("login").addEventListener("click", loginclicked);

function loginclicked(event){
    console.log("loginclicked");
    event.stopPropagation();
    console.log(this);
    document.getElementById("header").removeEventListener("click", headerclicked);
    document.getElementById("wrapper").removeEventListener("click", wrapperclicked);
    
}

document.getElementById("sign").addEventListener("click", signupclicked);

function signupclicked(){
    
    console.log("signup clicked");
    document.getElementById("header").addEventListener("click", headerclicked);
    document.getElementById("wrapper").addEventListener("click", wrapperclicked);
}

document.getElementById("header").addEventListener("click", headerclicked);

function headerclicked(){
    
    console.log("header clicked");
}

document.getElementById("wrapper").addEventListener("click", wrapperclicked);

function wrapperclicked(){
    console.log("wrapper clicked");
}