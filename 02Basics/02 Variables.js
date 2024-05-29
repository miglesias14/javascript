const uid = "abc123";

var firstName = "Michelle";
var lastName = "Iglesias";
var email = "michelleiglesias@icloud.com"
var password = "123456";
var confirmPassword ="123456";
var courseCount = 0;
var isLoggedInFromGoogle = false;

// one example of output 
// firstName = prompt("Enter your name");

console.log(uid);
console.log("First Name is: ", firstName);
console.log(email);

//example below is interpolation

console.log(` 
    With Unique ID: ${uid}
    User is: ${firstName}
    and their email is: ${email}
    and uses the password:${password}
`)