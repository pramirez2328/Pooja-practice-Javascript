// Challenge 1
// Create a variable called "age" and set it to a number. Then, write an if statement that prints "You are old enough to drive" if the age is 16 or older. If the age is under 16, print "You are not old enough to drive."

let age = 30;
let message = '';
if (age >= 16) {
    message = "You are old enough to drive";
}   else {
    message = "You are NOT old enough to drive";
}
console.log(message);

//challenge 2
//create a variable called number and set it to 7. Then, write and if and else statement that checks if the number is even or odd

let number = 7;
let message0 = '';
if (number % 2 === 0) {
    message0 = "The number is even";
} else {
    message0 = "The number is odd";
}
console.log (message0);

//challenge 3
//create an if, else if, and else statement that checks if the number is positive, negative, or zero

let number1 = 49;
let message1 = '';
if (number1 > 0) {
    message1 = "The number is positive";
} else if (number1 < 0) {
    message1 = "The number is negative";
} else {
    message1 = "The number is zero";
}
console.log(message1);

//challenge 4
//create a variable called "password" and set it to "password"
//create a variable called "userPassword" and set it to "password"
//create an if statement that checks if the two variables are equal
//if they are, console.log "login successful"

let password = 'password';
let message2 = '';
let userPassword = 'password';
if (password === userPassword) {
    message2 = "Login Successful";
} else {
    message2 = "Login NOT successful";
}
console.log(message2);

//challenge 5
//practice using && and ||
// && - both conditions must be true
// || - one condition must be true
//create a variable called "alive" and set it to true
//create a variable called "learningJavascript" and set it to true
//create a variable called "hungry" and set it to false
//create a variable called "tired" and set it to true
// now create conditional statements using if, else ifs, if the person is alive and learningJavascript prints "keep up the good work" if the person is alive and hungry, print "go eat something" if the person is alive and tired or hungry, print "take a break" if the person is not alive, print "call 911"

let alive = true;
let learningJavascript = true;
let hungry = false;
let tired = true;
let message3 = '';
if (alive && learningJavascript) {
    message3 = "Keep up the good work";
} else if (alive && hungry) {
    message3 = "Go eat something";
} else if (tired || hungry) {
    message3 = "Take a break";
} else if (!alive ) {
    message3 = 'Call 911';
}
  console.log(message3);




