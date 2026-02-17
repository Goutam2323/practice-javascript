// ===============================
// ARRAY PROPERTIES
// ===============================

let arr = [1, 2, 3, 4, 5];

console.log("Constructor:", arr.constructor);
console.log("Length:", arr.length);

// prototype example
Array.prototype.sayHello = function () {
  return "Hello from Array!";
};
console.log(arr.sayHello());

// ===============================
// ARRAY METHODS
// ===============================

// concat()
let arr2 = [6, 7];
console.log("concat:", arr.concat(arr2));

// copyWithin()
let copyArr = [1, 2, 3, 4, 5];
copyArr.copyWithin(0, 3);
console.log("copyWithin:", copyArr);

// entries()
for (let [index, value] of arr.entries()) {
  console.log("entries:", index, value);
}

// every()
console.log("every > 0:", arr.every(num => num > 0));

// fill()
let fillArr = [1, 2, 3, 4];
fillArr.fill(0, 1, 3);
console.log("fill:", fillArr);

// filter()
console.log("filter > 2:", arr.filter(num => num > 2));

// find()
console.log("find > 3:", arr.find(num => num > 3));

// findIndex()
console.log("findIndex > 3:", arr.findIndex(num => num > 3));

// forEach()
arr.forEach(num => console.log("forEach:", num));

// includes()
console.log("includes 3:", arr.includes(3));

// indexOf()
console.log("indexOf 3:", arr.indexOf(3));

// isArray()
console.log("isArray:", Array.isArray(arr));

// join()
console.log("join:", arr.join("-"));

// lastIndexOf()
let lastArr = [1, 2, 3, 2];
console.log("lastIndexOf 2:", lastArr.lastIndexOf(2));

// map()
console.log("map x2:", arr.map(num => num * 2));

// pop()
let popArr = [...arr];
console.log("pop:", popArr.pop(), popArr);

// push()
let pushArr = [...arr];
pushArr.push(6);
console.log("push:", pushArr);

// reduce()
console.log("reduce sum:", arr.reduce((sum, num) => sum + num, 0));

// reduceRight()
console.log("reduceRight sum:", arr.reduceRight((sum, num) => sum + num, 0));

// reverse()
let revArr = [...arr];
revArr.reverse();
console.log("reverse:", revArr);

// some()
console.log("some > 4:", arr.some(num => num > 4));

// slice()
console.log("slice(1,3):", arr.slice(1, 3));

// sort()
let sortArr = [5, 3, 8, 1];
sortArr.sort((a, b) => a - b);
console.log("sort:", sortArr);

// shift()
let shiftArr = [...arr];
shiftArr.shift();
console.log("shift:", shiftArr);

// splice()
let spliceArr = [1, 2, 3, 4];
spliceArr.splice(1, 2, 9, 10);
console.log("splice:", spliceArr);

// toString()
console.log("toString:", arr.toString());

// unshift()
let unshiftArr = [...arr];
unshiftArr.unshift(0);
console.log("unshift:", unshiftArr);

// valueOf()
console.log("valueOf:", arr.valueOf());
