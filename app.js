function calculateFactorial() {
  let number = parseInt(document.getElementById('number').value);
  let counter = number;
  let acum = number;
  while (counter > 1) {
    counter--;
    acum *= number;
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

function isNumber() {
  const text = document.getElementById('exercise3');
  const splitText = text.value.split('')
  for (let i = 0; i < splitText.length; i++) {
    const current = splitText[i];
    if (!Number(current)) {
      console.log('false');
      return false
    }
  }
  console.log('true')
  return true
}