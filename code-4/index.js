// Exercise 1
// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

// O(A*B) Time
// O(N)   Space
// const getArrayIntersection = (nums1, nums2) => {
//   const intersections = [];
//   for (let i = 0; i < nums1.length; i++) {
//     const num1 = nums1[i];
//     for (let j = 0; j < nums2.length; j++) {
//       const num2 = nums2[j];
//       if (!intersections.includes(num1) && num1 === num2) intersections.push(num1);
//     }
//   }
//   return intersections;
// }

const getArrayIntersection = (nums1, nums2) => {
  const intersections = new Set();
  for (let i = 0; i < nums1.length; i++) {
    const num1 = nums1[i];
      for (let i = 0; i < nums2.length; i++) {
      const num2 = nums2[i];
      if (num1 === num2) intersections.add(num1);
    }
  }

  return intersections;
}

// nums1 = [1,2,2,1];
// nums2 = [2,2];
const nums1 = [4,9,5];
const nums2 = [9,4,9,8,4];
// console.log('getArrayIntersection:', getArrayIntersection(nums1, nums2))

// Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.
// You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

// https://baffinlee.com/leetcode-javascript/problem/add-strings.html
// https://shareablecode.com/snippets/add-strings-javascript-solution-uzS4-zP5u

// const sumStringNums = (num1, num2) => {

// }

// Is Anagram
// Create a function that takes in two strings and returns `true` if one string is an anagram of another string and otherwise returns `false`.

// Time O(NM) - Space O(NM)
const isAnagram = (str1, str2) => {
  let placeholder = str2.split('');
  if (str1.length !== str2.length) return false;
  for (let i = 0; i < str1.length; i++) {
    const char1 = str1[i];
    for (let j = 0; j < placeholder.length; j++) {
      const char2 = placeholder[j];
      if (char1 === char2) {
        placeholder.splice(j, 1).join('');
        break;
      } else if (j === placeholder.length - 1) return false;
    }
  }
  return true;
}

// let strA = "nnjjdyus";
// let strB = "njdnsjyu";

// let strA = "tacocat";
// let strB = "ctatocato";

let strA = "anagram";
let strB = "nagaram";

// console.log('isAnagram:', isAnagram(strA, strB))


function minimumWaitingTime(queries) {
	const length = queries.length;
	if (length === 1) return 0;
	queries = queries.sort((a, b) => a - b);
  console.log('queries:', queries)
	let total = 0;
	for (let i = 0; i < length; i++) {
		const num = queries[i];
		const queriesLeft = length - (i + 1);
		total = total + (num * queriesLeft);
	}
  return total;
}
const queries = [17, 4, 3];
	console.log('minimumWaitingTime:', minimumWaitingTime(queries))