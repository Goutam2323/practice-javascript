// ===============================
// ARRAY PROPERTIES
// ===============================

// Creating an array
let arr = [1, 2, 3, 4, 5];

// constructor → returns constructor function of array
console.log("Constructor:", arr.constructor);

// length → returns number of elements in array
console.log("Length:", arr.length);

// prototype example → adding custom method to all arrays (not recommended in production)
Array.prototype.sayHello = function () {
  return "Hello from Array!";
};
console.log("Prototype method:", arr.sayHello());


// ===============================
// ARRAY METHODS
// ===============================

// concat() → joins two or more arrays (does NOT modify original)
let arr2 = [6, 7];
console.log("concat:", arr.concat(arr2));

// copyWithin(target, start) → copies part of array to another position (modifies original)
let copyArr = [1, 2, 3, 4, 5];
copyArr.copyWithin(0, 3);
console.log("copyWithin:", copyArr);

// entries() → returns iterator of [index, value] pairs
for (let [index, value] of arr.entries()) {
  console.log("entries:", index, value);
}

// every() → checks if ALL elements satisfy condition
console.log("every > 0:", arr.every(num => num > 0));

// fill(value, start, end) → fills array with static value
let fillArr = [1, 2, 3, 4];
fillArr.fill(0, 1, 3);
console.log("fill:", fillArr);

// filter() → returns new array with elements that pass condition
console.log("filter > 2:", arr.filter(num => num > 2));

// find() → returns FIRST element that matches condition
console.log("find > 3:", arr.find(num => num > 3));

// findIndex() → returns index of FIRST match
console.log("findIndex > 3:", arr.findIndex(num => num > 3));

// forEach() → runs function on each element (no return)
arr.forEach(num => console.log("forEach:", num));

// includes() → checks if value exists
console.log("includes 3:", arr.includes(3));

// indexOf() → returns first index of value (-1 if not found)
console.log("indexOf 3:", arr.indexOf(3));

// Array.isArray() → checks if variable is an array
console.log("isArray:", Array.isArray(arr));

// join(separator) → converts array into string
console.log("join:", arr.join("-"));

// lastIndexOf() → returns last occurrence index
let lastArr = [1, 2, 3, 2];
console.log("lastIndexOf 2:", lastArr.lastIndexOf(2));

// map() → creates new array by transforming each element
console.log("map x2:", arr.map(num => num * 2));

// pop() → removes last element (modifies original)
let popArr = [...arr];
console.log("pop:", popArr.pop(), popArr);

// push() → adds element at end (modifies original)
let pushArr = [...arr];
pushArr.push(6);
console.log("push:", pushArr);

// reduce() → reduces array to single value (left to right)
console.log("reduce sum:", arr.reduce((sum, num) => sum + num, 0));

// reduceRight() → reduces array from right to left
console.log("reduceRight sum:", arr.reduceRight((sum, num) => sum + num, 0));

// reverse() → reverses array (modifies original)
let revArr = [...arr];
revArr.reverse();
console.log("reverse:", revArr);

// some() → checks if ANY element satisfies condition
console.log("some > 4:", arr.some(num => num > 4));

// slice(start, end) → extracts portion (does NOT modify original)
console.log("slice(1,3):", arr.slice(1, 3));

// sort() → sorts elements (modifies original)
let sortArr = [5, 3, 8, 1];
sortArr.sort((a, b) => a - b);
console.log("sort:", sortArr);

// shift() → removes first element (modifies original)
let shiftArr = [...arr];
shiftArr.shift();
console.log("shift:", shiftArr);

// splice(start, deleteCount, ...items) → add/remove elements (modifies original)
let spliceArr = [1, 2, 3, 4];
spliceArr.splice(1, 2, 9, 10);
console.log("splice:", spliceArr);

// toString() → converts array to comma-separated string
console.log("toString:", arr.toString());

// unshift() → adds element at beginning (modifies original)
let unshiftArr = [...arr];
unshiftArr.unshift(0);
console.log("unshift:", unshiftArr);

// valueOf() → returns array itself
console.log("valueOf:", arr.valueOf());
