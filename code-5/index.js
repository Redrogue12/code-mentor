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
console.log('mostRepeatedNum:', mostRepeatedNum(array))

// Exercises 2
// Given an array of integers, count the number of unique pairs of integers that have difference k.
// Input: [1, 7, 5, 9, 2, 12, 3] K=2
// Output: 4

// We have four pairs with difference 2: (1, 3), (3, 5), (5, 7), (7, 9). Note that we only want the number of these pairs, not the pairs themselves.

const findIntegerDifferenceK = array => {
  array.forEach((int, i) => {
    
  });
}

const intArr = [1, 7, 5, 9, 2, 12, 3];
console.log('findIntegerDifferenceK:', findIntegerDifferenceK);

