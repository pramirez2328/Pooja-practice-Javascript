// challenge 1
// if grade is 90 or above, console.log 'A', if 80 or above, console.log 'B', if 70 or above, console.log 'C', if 60 or above, console.log 'D', if below 60, console.log 'F'
const printMyGrade = (grade) => {
  // your code here
};

const grades = [90, 88, 78, 95, 80, 85, 100, 92, 98, 75];

for (let i = 0; i < grades.length; i++) {
  printMyGrade(grades[i]);
}

//--------------------------------------------------------------------------------------------------------

// challenge 2
// if the number is divisible by 3, console.log 'fizz', if the number is divisible by 5, console.log 'buzz', if the number is divisible by 3 and 5, console.log 'fizzbuzz', if the number is not divisible by 3 or 5, console.log the number

const fizzBuzz = (num) => {
  // your code here
};

const numbers = [3, 5, 15, 7, 9, 10, 30, 20, 25, 2];

for (let i = 0; i < numbers.length; i++) {
  fizzBuzz(numbers[i]);
}

//--------------------------------------------------------------------------------------------------------

// challenge 3
// get input from the user using the prompt method and store the result in a variable called "userInput"
//run npm install in your terminal before solving this challenge
const prompt = require('prompt-sync')();
const userInput = prompt('Enter a number: ');

const isSquare = (num) => {
  // your code here
  // if the number is a perfect square, console.log 'The number is a perfect square'
  // if the number is not a perfect square, console.log 'The number is not a perfect square'
  // if the number is 0 or less, console.log 'The number is not a perfect square'
  // if the number is not a number, console.log 'The input is not a number'
  // hint: use the Math.sqrt method to check if the number is a perfect square
  // hint: use the isNaN method to check if the input is a number
  // hint: use the parseInt method to convert the input to a number
  // hint: use the Math.sign method to check if the number is less than 0
  // hint: use the Math.pow method to square the number
  // hint: use the === operator to check if the number is equal to 0
  // hint: use the typeof operator to check if the input is a number
  // hint: use the console.log method to print the result
};

isSquare(userInput);
