let signupBtn = document.getElementById("signupBtn");  
let signinbtn = document.getElementById("signinbtn");  
let nameField = document.getElementById("nameField");  
let title = document.getElementById("title");  


signinbtn.onclick = async function() {
  nameField.style.display = "none"; 
  title.innerHTML = "Sign In"; 

  signupBtn.classList.add("disable");
  signinbtn.classList.remove("disable"); 


  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
}


signupBtn.onclick = async function() {
  
    nameField.style.maxHeight = "60px"; 
    title.innerHTML = "Sign up"; 
    signupBtn.classList.remove("disable");
    signinbtn.classList.add("disable"); 


    const username = document.querySelector('#email-login').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
    }
}

signinbtn.addEventListener('submit', loginFormHandler);

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);