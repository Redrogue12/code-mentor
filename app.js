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

function getDivisibleByThree() {
  let number = 1;
  let counter = 0;
  while (number < 100) {
    if (number % 3 === 0) counter++;
    number++;
  }
  console.log(counter)
}

const numbers = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

const checkIsNumber = num => numbers.indexOf(num);

function isNumber() {
  const text = document.getElementById('exercise3').value;
  const splitText = text.split('');
  const checkDecimals = text.split('.');

  if (checkDecimals.length > 2) {
    console.log(false);
    return false;
  }

  for (const current of splitText) {
    if (current !== "." && checkIsNumber(current) === -1) {
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
}