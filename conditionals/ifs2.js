// challenge 1
// if grade is 90 or above, console.log 'A', if 80 or above, console.log 'B', if 70 or above, console.log 'C', if 60 or above, console.log 'D', if below 60, console.log 'F'
const printMyGrade = (grade) => {
  // your code here
};

const grades = [90, 88, 78, 95, 80, 85, 100, 92, 98, 75];

for (let i = 0; i < grades.length; i++) {
  printMyGrade(grades[i]);
}

// challenge 2
// if the number is divisible by 3, console.log 'fizz', if the number is divisible by 5, console.log 'buzz', if the number is divisible by 3 and 5, console.log 'fizzbuzz', if the number is not divisible by 3 or 5, console.log the number

const fizzBuzz = (num) => {
  // your code here
};

const numbers = [3, 5, 15, 7, 9, 10, 30, 20, 25, 2];

for (let i = 0; i < numbers.length; i++) {
  fizzBuzz(numbers[i]);
}
