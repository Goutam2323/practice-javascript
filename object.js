// ===============================
// OBJECT CREATION
// ===============================

let obj = {
  name: "Goutam",
  age: 22,
  city: "Amritsar"
};

console.log("Original Object:", obj);

// ===============================
// OBJECT PROPERTIES
// ===============================

// constructor
console.log("Constructor:", obj.constructor);

// hasOwnProperty()
console.log("hasOwnProperty 'name':", obj.hasOwnProperty("name"));

// prototype example
Object.prototype.sayHi = function () {
  return "Hi from Object!";
};
console.log(obj.sayHi());

// ===============================
// STATIC OBJECT METHODS
// ===============================

// Object.keys()
console.log("Object.keys:", Object.keys(obj));

// Object.values()
console.log("Object.values:", Object.values(obj));

// Object.entries()
console.log("Object.entries:", Object.entries(obj));

// Object.assign()
let newObj = Object.assign({}, obj, { country: "India" });
console.log("Object.assign:", newObj);

// Object.freeze()
let freezeObj = { a: 1 };
Object.freeze(freezeObj);
freezeObj.a = 99; // won't change
console.log("Object.freeze:", freezeObj);

// Object.seal()
let sealObj = { b: 2 };
Object.seal(sealObj);
sealObj.b = 5; // can modify
delete sealObj.b; // cannot delete
console.log("Object.seal:", sealObj);

// Object.create()
let personProto = {
  greet() {
    return "Hello!";
  }
};
let person = Object.create(personProto);
person.name = "Rahul";
console.log("Object.create:", person.greet(), person.name);

// Object.defineProperty()
let defineObj = {};
Object.defineProperty(defineObj, "id", {
  value: 101,
  writable: false
});
console.log("Object.defineProperty:", defineObj);

// Object.getOwnPropertyNames()
console.log("Object.getOwnPropertyNames:", Object.getOwnPropertyNames(obj));

// Object.getPrototypeOf()
console.log("Object.getPrototypeOf:", Object.getPrototypeOf(obj));

// Object.setPrototypeOf()
let protoObj = {};
Object.setPrototypeOf(protoObj, personProto);
console.log("Object.setPrototypeOf:", protoObj.greet());

// Object.is()
console.log("Object.is:", Object.is(10, 10));

// Object.fromEntries()
let entries = [["x", 1], ["y", 2]];
console.log("Object.fromEntries:", Object.fromEntries(entries));

// ===============================
// LOOPING THROUGH OBJECT
// ===============================

for (let key in obj) {
  console.log("for...in:", key, obj[key]);
}

// ===============================
// DESTRUCTURING
// ===============================

let { name, age } = obj;
console.log("Destructuring:", name, age);

// ===============================
// SPREAD OPERATOR
// ===============================

let spreadObj = { ...obj, profession: "Developer" };
console.log("Spread:", spreadObj);

// ===============================
// DELETE PROPERTY
// ===============================

let deleteObj = { a: 1, b: 2 };
delete deleteObj.a;
console.log("Delete:", deleteObj);

// ===============================
// JSON METHODS
// ===============================

let jsonString = JSON.stringify(obj);
console.log("JSON.stringify:", jsonString);

let parsedObj = JSON.parse(jsonString);
console.log("JSON.parse:", parsedObj);
