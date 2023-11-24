let signupBtn = document.getElementById("signupBtn");  
let signinbtn = document.getElementById("signinbtn");  
let nameField = document.getElementById("nameField");  
let title = document.getElementById("title");  


signinbtn.onclick = function() {
    nameField.style.maxHeight = "0"; 
    title.innerHTML = "Sign In"; 
    signupBtn.classList.add("disable");
    signinbtn.classList.remove("disable"); 
}

signupBtn.onclick = function() {
    nameField.style.maxHeight = "60px"; 
    title.innerHTML = "Sign up"; 
    signupBtn.classList.remove("disable");
    signinbtn.classList.add("disable"); 
}