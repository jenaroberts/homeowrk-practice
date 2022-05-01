// create a loop that prints out the numbers from 1-100 that are divisible by 5

for (let i = 0; i < 101; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}

// Using a loop; Find the max number in this array

const numberArray = [10, 4, 5, 7, 100, 4];
let max = 0;
for (const num of numberArray) {
  if (num > max) {
    max = num;
  }
}
console.log(max);

//add the su of two arrays together

let arrayOne = [45, 65, 78, 23, 43, 2, 4, 5, 6];
let arrayTwo = [23, 34, 44, 45, 66, 77, 8, 9, 12];
let sum = 0;

for (const num of arrayOne) {
  sum += num;
}
for (const num of arrayTwo) {
  sum += num;
}
console.log(sum);

// Using a loop; Find the sum of all even numbers in this array

const nums = [2, 200, 203, 200, 18, 7];
let sum = 0;
for (const evens of nums) {
  if (evens % 2 === 0) {
    sum += evens;
  }
}
console.log(sum);

//create a half pyramid

for (let i = 0; i < 7; i++) {
  let star = "";
  for (j = 0; j < i; j++) {
    star += "7";
  }
  console.log(star);
}
