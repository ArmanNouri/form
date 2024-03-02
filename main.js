let name = "";
name = prompt("What is your name? ");
let userName =  document.querySelector("#userName");
console.log(userName, name);
userName.innerHTML= "Welcome "+ name;