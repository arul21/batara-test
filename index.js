// 1. Find Factorial Value
function findFactorial(input) {
  let val = 1;
  for (let i = 2; i <= input; i++) val = val * i;
  return val;
}
console.log(findFactorial(4));
console.log(findFactorial(8));
console.log('======================');

// 2. Insert Dash between even number
function insertDash(input) {
  let inputArr = input.toString().split('');
  let numArray = inputArr.map(Number);

  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i - 1] % 2 === 0 && numArray[i] % 2 === 0) {
      numArray.splice(i, 0, '-');
    }
  }
  return numArray.join('');
}
console.log(insertDash(553847));
console.log(insertDash(32143264873628432));
console.log(insertDash(65765346324));
console.log('======================');

// 3. Braces Validate
function barcesValidate(input) {
  let temp = 0;
  for (i of input) {
    if (i === '(') temp++;
    else if (i === ')' && --temp < 0) return false;
  }
  return temp === 0;
}

const test1 = '({[]})';
const test2 = '{{))';
const test3 = '({[]))';

console.log(barcesValidate(test1));
console.log(barcesValidate(test2));
console.log(barcesValidate(test3));
