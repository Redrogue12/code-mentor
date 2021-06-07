function calculateFactorial() {
  let number = parseInt(document.getElementById('number').value);
  let acum = number;
  while (number > 1) {
    number--;
    acum *= number;
  }
  console.log(acum)
}