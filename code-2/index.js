// 8-	Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically, and their corresponding values in the same order.
// Examples
// keysAndValues({ a: 1, b: 2, c: 3 })
// ➞ [["a", "b", "c"], [1, 2, 3]]

// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
// ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

// keysAndValues({ key1: true, key2: false, key3: undefined })
// ➞ [["key1", "key2", "key3"], [true, false, undefined]]

const keysAndValues = obj => [Object.keys(obj), Object.values(obj)];
console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));

// Give an array of objects, create a function that takes two inputs (sortASC, data) and sort the array (i.e data) alphabetically using the object label. Sorting direction is based on sortASC value
// E.g.
// data = 
// [
//   { value: 1, label: "Australia" },
//   { value: 2, label: "Western Europe" },
//   { value: 3, label: "North America" },]
// sortASC = true (Ascending )
// Output [
//   { value: 1, label: "Australia" },
//   {value: 3,  label: "North America" },
//   {value: 2, label: "Western Europe" },
// ]
// sortASC = false (Descending ) 
// Output [
//   { value:2, label: "Western Europe" },
//   { value: 3,  label: "North America" },
//   { value: 1, label: "Australia" },
// ]

const data = [
  { value: 1, label: "Australia" },
  { value: 2, label: "Western Europe" },
  { value: 3, label: "North America" },
]

compareDESC = (a, b) => {
  const labelA = a.label.toUpperCase();
  const labelB = b.label.toUpperCase();
  if (labelA > labelB) return -1;
  if (labelA < labelB) return 1;
  return 0;
}

compareASC = (a, b) => {
  const labelA = a.label.toUpperCase();
  const labelB = b.label.toUpperCase();
  if (labelA < labelB) return -1;
  if (labelA > labelB) return 1;
  return 0;
}

const sortObjArray = (sortASC, data) => {
  if (sortASC) return data.sort(compareASC);
  else return data.sort(compareDESC);
}

console.log('sortObjArray:', sortObjArray(true, data));

// # Most Songs in PlayList

// Write code to create a function that takes an array of numbers, each representing the duration of a song. You will return the maximum number of songs present in the array that can fit into a 60 minute playlist.

var arr = [4, 2, 5, 3, 1, 1, 2, 3, 4, 2, 5, 6, 3, 2, 4, 7, 3, 2, 3]; 
compareNumbers = (a, b) => a - b;

songsInAMinute = array => {
  const sorted = array.sort(compareNumbers);
  let sum = 0;
  for (let i = 0; i < sorted.length; i++) {
    const el = sorted[i];
    sum += el;
    if (sum > 60) return i;
  }
  return array.length;
}

console.log('songsInAMinute:', songsInAMinute(arr))

// Given an array of integers, find if the array contains any duplicates.
// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
// Example 1:
// Input: [1,2,3,1]Output: true

const containsDuplicate = array => {
  const memo = {}
  for (let i = 0; i < array.length; i++) {
    const el = array[i];
    if (memo[el]) return true;
    else memo[el] = true;
  }
  return false;
}

console.log('containsDuplicate:', containsDuplicate([1,2,3,3]))