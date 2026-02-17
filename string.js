// ===============================
// BASE STRING
// ===============================

let str = "Hello Goutam";
console.log("Original String:", str);

// ===============================
// BASIC METHODS
// ===============================

// charAt()
console.log("charAt(1):", str.charAt(1));

// charCodeAt()
console.log("charCodeAt(1):", str.charCodeAt(1));

// concat()
console.log("concat:", str.concat(" Welcome!"));

// endsWith()
console.log("endsWith 'tam':", str.endsWith("tam"));

// String.fromCharCode()
console.log("fromCharCode:", String.fromCharCode(72, 105));

// includes()
console.log("includes 'Gou':", str.includes("Gou"));

// ===============================
// INDEX METHODS
// ===============================

// indexOf()
console.log("indexOf 'o':", str.indexOf("o"));

// lastIndexOf()
console.log("lastIndexOf 'o':", str.lastIndexOf("o"));

// ===============================
// COMPARISON
// ===============================

console.log("localeCompare:", "apple".localeCompare("banana"));

// ===============================
// REGEX METHODS
// ===============================

// match()
console.log("match:", str.match(/o/g));

// replace()
console.log("replace:", str.replace("Goutam", "Developer"));

// search()
console.log("search:", str.search("Goutam"));

// ===============================
// REPEAT
// ===============================

console.log("repeat:", "Hi ".repeat(3));

// ===============================
// EXTRACTION METHODS
// ===============================

// slice()
console.log("slice(0,5):", str.slice(0, 5));

// substring()
console.log("substring(0,5):", str.substring(0, 5));

// substr()
console.log("substr(6,6):", str.substr(6, 6)); // deprecated but works

// ===============================
// SPLIT
// ===============================

console.log("split:", str.split(" "));

// ===============================
// STARTS / ENDS
// ===============================

console.log("startsWith 'Hello':", str.startsWith("Hello"));

// ===============================
// CASE METHODS
// ===============================

console.log("toUpperCase:", str.toUpperCase());
console.log("toLowerCase:", str.toLowerCase());

console.log("toLocaleUpperCase:", str.toLocaleUpperCase());
console.log("toLocaleLowerCase:", str.toLocaleLowerCase());

// ===============================
// TRIM
// ===============================

let spaced = "   Hello World   ";
console.log("trim:", spaced.trim());

// ===============================
// TEMPLATE LITERALS
// ===============================

let name = "Goutam";
console.log(`Template Literal: Hello ${name}`);

// ===============================
// STRING LENGTH
// ===============================

console.log("Length:", str.length);
