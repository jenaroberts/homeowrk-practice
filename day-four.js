// // Create a function that takes in a number of two pointers and three pointers made and returns a basketball teams total score?
// 2. Create a function that takes an array of numbers & returns both min and max in that order. (use a loop)
// 3. Create a function that converts a string to uppercase letters:
// let str = “WHAT a TIME to BE ALIVE!”

const pointsScored = [
  2, 3, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 2, 3, 2, 3, 2, 3, 3, 3, 2, 2, 2,
];
function pointLog(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}
pointLog(pointsScored);

// --------------------------------------------

let lowerString = "what a time to be alive!";
function str2(str) {
  return str.toUpperCase();
}
console.log(str2(lowerString));

// ----------------------------------------------

function minMaxDisplay(arr) {
  let max = arr[0];
  let min = arr[0];

  for (const num of arr) {
    if (num > max) {
      max = num;
    }
    if (num < min) {
      min = num;
    }
  }
  console.log(min, max);
}
const numberArray = [10, 4, 5, 7, 100, 4];

minMaxDisplay(numberArray);
