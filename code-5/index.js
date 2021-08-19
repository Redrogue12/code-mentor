// Exercises 1
// Find the most repeated element in an array of integers. What is the time complexity of this method? (A variation of this exercise is finding the most repeated word in a sentence. The algorithm is the same. Here we use an array of numbers for simplicity.)
// Input: [1, 2, 2, 3, 3, 3, 4]
// Output: 3

// Time O(N) | Space O(N)?
const mostRepeatedNum = array => {
  const instances = {};
  let max = array[0];
  array.forEach(num => {
    instances[num] ? instances[num] = instances[num] + 1 : instances[num] = 1;
    if (instances[num] > max) max = instances[num];
  });
  return max;
}

const array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
mostRepeatedNum(array);
// console.log('mostRepeatedNum:', mostRepeatedNum(array))

// Exercises 2
// Given an array of integers, count the number of unique pairs of integers that have difference k.
// Input: [1, 7, 5, 9, 2, 12, 3] K=2
// Output: 4

// We have four pairs with difference 2: (1, 3), (3, 5), (5, 7), (7, 9). Note that we only want the number of these pairs, not the pairs themselves.

// Time O() | Space O()
const findIntegerDifferenceK = (array, k) => {
  let count = 0;
  array
    .sort((a,b) => a - b)
    .forEach((num, i) => {
      for (let j = i + 1; j < array.length; j++) {
        const nextNum = array[j];
        const difference = nextNum - num;
        if (difference === k) {
          count++;
          break;
        } else if (difference > k) break;
        else continue;
      }
    });
    return count;
}

const intArr = [1, 7, 5, 9, 2, 12, 3];
// console.log('findIntegerDifferenceK:', findIntegerDifferenceK(intArr, 2));

// Exercises 3
// Given an integer A. Compute and return the square root of A.
// If A is not a perfect square, return floor(sqrt(A)).
// DO NOT USE SQRT FUNCTION FROM STANDARD LIBRARY
// Input Format : The first and only argument given is the integer A.
// Output Format: Return floor(sqrt(A))

// Constraints
// 1 <= A <= 10^9
// For Example
// Input 1: A = 11 Output 1:    3
// Input 2:    A = 9 Output 2:    3

const getSqrRoot = int => {
  if (int < 4) return 1;
  for (let i = 2; i < int; i++) {
    const pwr2 = i*i;
    if (pwr2 === int) return i;
    else if (pwr2 > int) return i - 1;
  }
}
// console.log('getSqrRoot:', getSqrRoot(5));

// Exercises 4
// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
