// =================================================================
// Exercise 1

function calculateFactorial() {
  let number = parseInt(document.getElementById('number').value);
  let counter = number;
  let acum = number;
  while (counter > 1) {
    counter--;
    acum *= counter;
  }
  const result = document.getElementById('factorialResult');
  result.innerHTML = "Result is: " + number + "! = " + acum;
}

// =================================================================
// Exercise 2

function getDivisibleByThree() {
  let number = 1;
  let counter = 0;
  while (number < 100) {
    if (number % 3 === 0) counter++;
    number++;
  }
  console.log(counter)
}

// =================================================================
// Exercise 3

const numbers = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '.'];

const checkIsNumber = num => numbers.indexOf(num);
const validSign = (i, current) => {
  if (i !== 0 && (current === "+" || current === "-")) return false
  else return true
}

function isNumber() {
  const text = document.getElementById('exercise3').value;
  const splitText = text.split('');
  const checkDecimals = text.split('.');

  if (checkDecimals.length > 2) {
    console.log(false);
    return false;
  }

  for (const [i, current] of splitText.entries()) { 
    if (!validSign(i, current)) {
      console.log('invalid sign', false)
      return false
    }
    if (checkIsNumber(current) === -1) {
      console.log('decimal or non number included', false);
      return false;
    }
  }
  console.log(true);
  return true;
}

// =================================================================
// Exercise 4

const accounts = [[2,8,7],[7,1,3],[1,9,5]];

getWealthiest = (accounts) => {
  return Math.max(...accounts.map(acc => acc.reduce((acum, value) => acum + value)))
}

console.log('wealthiest', getWealthiest(accounts))