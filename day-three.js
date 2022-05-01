// //define variables
// //declare for loop
// // log repeating numbers .repeat?

let symbol = "#";
for (i = 0; i < 6; i++) {
  let s = "";
  for (j = 0; j < i; j++) {
    s += "#";
  }
  console.log(s.toString());
}

// //define fuction
// //state argument
// // if else statement for grades
// //call function

// function assignGrade(score){
//     let result
//     if(score >= 90){
//         return 'A'
//     }
//     else if(score > 80) {
//         return 'B'
//     }
//     else if(score >70){
//         return 'C'
//     }
//     else if(score > 60){
//         return 'D'
//     }
//     else {
//         return 'F'
//     }
// }
// console.log(assignGrade(34))
// console.log(assignGrade(99))

// write a function that takes an array of numbers as a parameter and logs out every time the nmber is greater than five

// declare a function
// set paramater
// write for loop
// call function
let numArray = [2, 6, 8, 7, 9, 13, 12, 22, 34, 2, 1];

function numLogOutForOf(arr) {
  for (const num of arr) {
    if (num > 5) {
      console.log(num);
    }
  }
}

function numLogOutForI(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
      console.log(arr[i]);
    }
  }
}
numLogOutForOf(numArray);
numLogOutForI(numArray);
