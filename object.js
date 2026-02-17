// ===============================
// OBJECT CREATION
// ===============================

// Creating a simple object
let obj = {
  name: "Goutam",
  age: 22,
  city: "Amritsar"
};

console.log("Original Object:", obj);


// ===============================
// OBJECT PROPERTIES
// ===============================

// constructor → returns the constructor function of the object
console.log("Constructor:", obj.constructor);

// hasOwnProperty() → checks if property exists directly inside object
console.log("hasOwnProperty 'name':", obj.hasOwnProperty("name"));


// prototype example → adding method to all objects (NOT recommended in real apps)
Object.prototype.sayHi = function () {
  return "Hi from Object!";
};
console.log("Prototype method:", obj.sayHi());


// ===============================
// STATIC OBJECT METHODS
// ===============================

// Object.keys() → returns array of object keys
console.log("Object.keys:", Object.keys(obj));

// Object.values() → returns array of object values
console.log("Object.values:", Object.values(obj));

// Object.entries() → returns array of [key, value] pairs
console.log("Object.entries:", Object.entries(obj));

// Object.assign() → copies properties into new object (shallow copy)
let newObj = Object.assign({}, obj, { country: "India" });
console.log("Object.assign:", newObj);

// Object.freeze() → prevents modification, addition, deletion
let freezeObj = { a: 1 };
Object.freeze(freezeObj);
freezeObj.a = 99; // will NOT change
console.log("Object.freeze:", freezeObj);

// Object.seal() → prevents adding/removing properties but allows modification
let sealObj = { b: 2 };
Object.seal(sealObj);
sealObj.b = 5; // allowed
delete sealObj.b; // NOT allowed
console.log("Object.seal:", sealObj);

// Object.create() → creates new object with given prototype
let personProto = {
  greet() {
    return "Hello!";
  }
};
let person = Object.create(personProto);
person.name = "Rahul";
console.log("Object.create:", person.greet(), person.name);

// Object.defineProperty() → defines property with special settings
let defineObj = {};
Object.defineProperty(defineObj, "id", {
  value: 101,
  writable: false // cannot change value
});
console.log("Object.defineProperty:", defineObj);

// Object.getOwnPropertyNames() → returns all property names
console.log("Object.getOwnPropertyNames:", Object.getOwnPropertyNames(obj));

// Object.getPrototypeOf() → returns prototype of object
console.log("Object.getPrototypeOf:", Object.getPrototypeOf(obj));

// Object.setPrototypeOf() → sets prototype of object
let protoObj = {};
Object.setPrototypeOf(protoObj, personProto);
console.log("Object.setPrototypeOf:", protoObj.greet());

// Object.is() → compares two values (like === but more accurate)
console.log("Object.is:", Object.is(10, 10));

// Object.fromEntries() → converts array of [key,value] pairs into object
let entries = [["x", 1], ["y", 2]];
console.log("Object.fromEntries:", Object.fromEntries(entries));


// ===============================
// LOOPING THROUGH OBJECT
// ===============================

// for...in → loops through all enumerable properties
for (let key in obj) {
  console.log("for...in:", key, obj[key]);
}


// ===============================
// DESTRUCTURING
// ===============================

// Extracting values into variables
let { name, age } = obj;
console.log("Destructuring:", name, age);


// ===============================
// SPREAD OPERATOR
// ===============================

// Copies object and adds new property
let spreadObj = { ...obj, profession: "Developer" };
console.log("Spread:", spreadObj);


// ===============================
// DELETE PROPERTY
// ===============================

// delete → removes property from object
let deleteObj = { a: 1, b: 2 };
delete deleteObj.a;
console.log("Delete:", deleteObj);


// ===============================
// JSON METHODS
// ===============================

// JSON.stringify() → converts object into JSON string
let jsonString = JSON.stringify(obj);
console.log("JSON.stringify:", jsonString);

// JSON.parse() → converts JSON string back into object
let parsedObj = JSON.parse(jsonString);
console.log("JSON.parse:", parsedObj);
