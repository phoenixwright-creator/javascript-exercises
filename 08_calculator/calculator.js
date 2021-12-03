const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  let sum = 0;
	for(let item in arr){
    sum += arr[item];
  }
  return sum;
};

const multiply = function(arr) {
  let res = 1;
  for(let item in arr){
    res *= arr[item];
  }
  return res;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(num) {
  let res = 1;
	for(let i = num; i>1; i--){
    res *= i;
  }
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
