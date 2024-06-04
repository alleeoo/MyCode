const userName = document.getElementById("username");
const password = document.getElementById("password");
const btnLogin = document.getElementById("login");
const text     = document.getElementById("p1");
var adminName = "Ali Hassan";
var adminPass = "5762"

const adminCredentials = {
   username: "Ali Hassan",
   password: "5762",
}


btnLogin.addEventListener('click',login);


function login(){
   const inputUsername = userName.value;
   const inputPassword = password.value;
       if (inputUsername === adminName && adminPass === inputPassword)
          {
            proceed(inputUsername);
          }
       else {
        p1.innerHTML= `Invalid`;
       }
}

const proceed = (name) => {
   window.location.replace(`page2.html?name=${name}`);
}

