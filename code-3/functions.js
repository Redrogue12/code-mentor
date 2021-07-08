// Exercise 1
// Given a number N, find all factors of N.
// Examples:
// N = 6 
// factors = {1, 2, 3, 6}

//  Input : n = 10       
//  Output: 1 2 5 10

//  Input:  n = 100
//  Output: 1 2 4 5 10 20 25 50 100

const getFactors = number => { // O(n)
  const factors = [];
  for (let i = 0; i <= number; i++) {
    if (number % i === 0) factors.push(i);
  }
  return factors;
}

const getFactors2 = number => { // O(square of n)
  const factors = [];
  const sqRoot = Math.sqrt(number);
  for (let i = 0; i <= sqRoot; i++) {
    if (number % i === 0) {
      factors.push(i);
      if (i !== sqRoot) factors.push(number/i)
    }
  }
  return factors;
}

console.log('getFactors:', getFactors(36));
console.log('getFactors2:', getFactors2(36));

// Exercise 2
// Verify Prime
// Given a number N, verify if N is prime or not.
// Return 1 if N is prime, else return 0.
// Example :
// Input : 7
// Output: True

const isPrime = number => { // O(n)
  const factors = [];
  for (let i = 0; i <= number; i++) {
    if (number % i === 0) factors.push(i);   
  }
  if (factors.length > 2) return 0;
  else return 1;
}

console.log('isPrime:', isPrime(33))

// Exercise 3
// # Array Search 2D
// Write code to create a function that takes in a 2-dimensional array and searches each 2D element for the character "X".

const search2dArray = array => {
  let xCount = 0;
  for (let i = 0; i < array.length; i++) {
    const row = array[i];
    for (let j = 0; j < row.length; j++) {
      const current = row[j];
      if (current === "X") xCount++;
    }
  }
  return xCount;
}

const array = [
  ["X", "O", "O", "O", "X", "O"],
  ["O", "X", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "X", "X"],
  ["O", "O", "O", "O", "O", "O"]
]

console.log('search 2d array:', search2dArray(array))

// Exercise 4
// Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases. 
// Example 1:
// Input: s = "A man, a plan, a canal: Panama"Output: trueExplanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input: s = "race a car"Output: falseExplanation: "raceacar" is not a palindrome.

const isPalindrome = string => {
  const reversed = string.split("").reverse().join("")
  if (reversed === string) return true;
  else return false;
};

console.log('isPalindrome', isPalindrome("raceacar"));