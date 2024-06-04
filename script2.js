

const username = decodeURI(window.location.search.split("=")[1]);
console.log()

const  displayName = document.getElementById("h1");
document.getElementById("h1").innerHTML= `Welcome ${username}`;
console.log("it works");
