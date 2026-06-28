let username = "admin";
let password = "1234";

let inputUser = prompt("Enter username:");
let inputPass = prompt("Enter password:");

if (inputUser === username && inputPass === password) {
    console.log("Login Successful");
} else {
    console.log("Invalid Credentials");
}