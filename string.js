// ===============================
// BASE STRING
// ===============================

// Creating a string
let str = "Hello Goutam";
console.log("Original String:", str);


// ===============================
// BASIC METHODS
// ===============================

// charAt(index) → returns character at given index
console.log("charAt(1):", str.charAt(1));

// charCodeAt(index) → returns Unicode (ASCII) value of character
console.log("charCodeAt(1):", str.charCodeAt(1));

// concat() → joins two or more strings and returns new string
console.log("concat:", str.concat(" Welcome!"));

// endsWith() → checks if string ends with given text
console.log("endsWith 'tam':", str.endsWith("tam"));

// String.fromCharCode() → converts Unicode numbers to characters (static method)
console.log("fromCharCode:", String.fromCharCode(72, 105,67));

// includes() → checks if string contains given substring
console.log("includes 'Gou':", str.includes("Gou"));


// ===============================
// INDEX METHODS
// ===============================

// indexOf() → returns first occurrence index, -1 if not found
console.log("indexOf 'o':", str.indexOf("o"));

// lastIndexOf() → returns last occurrence index
console.log("lastIndexOf 'o':", str.lastIndexOf("o"));


// ===============================
// COMPARISON
// ===============================

// localeCompare() → compares two strings
// returns -1, 0, or 1
console.log("localeCompare:", "apple".localeCompare("banana"));


// ===============================
// REGEX METHODS
// ===============================

// match() → returns matches using regular expression
console.log("match:", str.match(/o/g));

// replace() → replaces first matching value
console.log("replace:", str.replace("Goutam", "Developer"));

// search() → returns index of match using regex or string
console.log("search:", str.search("Goutam"));


// ===============================
// REPEAT
// ===============================

// repeat(n) → repeats string n times
console.log("repeat:", "Hi ".repeat(3));


// ===============================
// EXTRACTION METHODS
// ===============================

// slice(start, end) → extracts part of string
console.log("slice(0,5):", str.slice(0, 5));

// substring(start, end) → similar to slice but no negative indexes
console.log("substring(0,5):", str.substring(0, 5));

// substr(start, length) → extracts based on length (deprecated)
console.log("substr(6,6):", str.substr(6, 6));


// ===============================
// SPLIT
// ===============================

// split(separator) → converts string into array
console.log("split:", str.split(" "));


// ===============================
// STARTS / ENDS
// ===============================

// startsWith() → checks if string begins with given text
console.log("startsWith 'Hello':", str.startsWith("Hello"));


// ===============================
// CASE METHODS
// ===============================

// toUpperCase() → converts to uppercase
console.log("toUpperCase:", str.toUpperCase());

// toLowerCase() → converts to lowercase
console.log("toLowerCase:", str.toLowerCase());

// Locale-based case conversion
console.log("toLocaleUpperCase:", str.toLocaleUpperCase());
console.log("toLocaleLowerCase:", str.toLocaleLowerCase());


// ===============================
// TRIM
// ===============================

// trim() → removes whitespace from both sides
let spaced = "   Hello World   ";
console.log("trim:", spaced.trim());


// ===============================
// TEMPLATE LITERALS
// ===============================

// Using backticks for interpolation
let name = "Goutam";
console.log(`Template Literal: Hello ${name}`);


// ===============================
// STRING LENGTH
// ===============================

// length → returns number of characters
console.log("Length:", str.length);
