const num1 = 2;
const num2 = 69;

function add(num1, num2) {
  return num1 + num2;
}
console.log(add(1, 2));

const testArray = [
  true,
  false,
  false,
  true,
  false,
  false,
  false,
  true,
  true,
  true,
  false,
];

function trueArrays() {
  let sum = 0;
  for (const bool of testArray) {
    if (bool) {
      sum++;
    }
  }
  return sum;
}
console.log(trueArrays());

const jeep = {
  make: "Jeep",
  model: "Wrangler",
  color: "black",
};
function myCar(car) {
  console.log(car.make);
  console.log(car.model);
}
myCar(jeep);

const family = ["mom", "dad", "mom", "your mom"];
function element(array) {
  return array[0];
}
console.log(element(family));

const num1 = 45;
const num2 = 34;
function myAdd() {
  return num1 + num2;
}
console.log(myAdd());

const testArray = [
  true,
  false,
  false,
  true,
  false,
  false,
  false,
  true,
  true,
  true,
  false,
];

function trueArrays() {
  let sum = 0;
  for (const bool of testArray) {
    if (bool) {
      sum++;
    }
  }
  return sum;
}
console.log(trueArrays());

const carOne = {
  make: "jeep",
  model: " wrangler",
  year: 2022,
  owner: "your mom",
};
console.log(carOne.make, carOne.model);

const candy = ["twix", "snickers", "reecess", "moonpie"];

function element(inputArr) {
  return inputArr[0];
}
console.log(element(candy));
