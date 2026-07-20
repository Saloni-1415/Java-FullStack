// ==========================================
// JavaScript Basics Practice
// Topics Learned Today:
// Variables, Data Types, typeof,
// Type Coercion, Equality Operators
// ==========================================

// --------------------------------------------------
// 1. VARIABLES
// --------------------------------------------------
console.log("===== VARIABLES =====");

let name = "Saloni";
let age = 20;
const country = "India";

console.log("Name:", name);
console.log("Age:", age);
console.log("Country:", country);

// Updating a let variable
age = 21;
console.log("Updated Age:", age);

// --------------------------------------------------
// 2. DATA TYPES
// --------------------------------------------------
console.log("\n===== DATA TYPES =====");

let studentName = "Saloni";       // String
let marks = 95;                    // Number
let isStudent = true;              // Boolean
let phone = null;                  // Null
let address;                       // Undefined
let bigNumber = 123456789012345678901234567890n; // BigInt
let uniqueId = Symbol("id");      // Symbol

console.log(studentName);
console.log(marks);
console.log(isStudent);
console.log(phone);
console.log(address);
console.log(bigNumber);
console.log(uniqueId);

// --------------------------------------------------
// 3. typeof OPERATOR
// --------------------------------------------------
console.log("\n===== typeof OPERATOR =====");

console.log(typeof studentName); // string
console.log(typeof marks);       // number
console.log(typeof isStudent);   // boolean
console.log(typeof phone);       // object (JavaScript quirk)
console.log(typeof address);     // undefined
console.log(typeof bigNumber);   // bigint
console.log(typeof uniqueId);    // symbol
console.log(typeof {});          // object
console.log(typeof []);          // object
console.log(typeof function(){}); // function

// --------------------------------------------------
// 4. TYPE COERCION
// --------------------------------------------------
console.log("\n===== TYPE COERCION =====");

// String coercion
console.log("5" + 5);   // "55"

// Number coercion
console.log("5" - 2);   // 3
console.log("5" * 2);   // 10
console.log("10" / 2);  // 5

// Boolean coercion
console.log(true + 1);   // 2
console.log(false + 1);  // 1

// Explicit conversion
console.log(Number("100")); // 100
console.log(String(100));   // "100"
console.log(Boolean(1));    // true
console.log(Boolean(0));    // false

// --------------------------------------------------
// 5. EQUALITY OPERATORS
// --------------------------------------------------
console.log("\n===== EQUALITY OPERATORS =====");

let num = 10;
let str = "10";

// Loose Equality (==)
console.log("10 == \"10\" :", num == str); // true

// Strict Equality (===)
console.log("10 === \"10\" :", num === str); // false

// Loose Not Equal (!=)
console.log("10 != \"10\" :", num != str); // false

// Strict Not Equal (!==)
console.log("10 !== \"10\" :", num !== str); // true

// More examples
console.log(false == 0);        // true
console.log(false === 0);       // false
console.log(true == 1);         // true
console.log(true === 1);        // false
console.log(null == undefined); // true
console.log(null === undefined);// false

// --------------------------------------------------
// 6. PRACTICE SUMMARY
// --------------------------------------------------
console.log("\n===== PRACTICE SUMMARY =====");

console.log("Use let for variables that can change.");
console.log("Use const for values that should not change.");
console.log("Use typeof to check data types.");
console.log("Type coercion converts values automatically.");
console.log("Use === and !== for strict comparison.");

console.log("\n===== END OF JS BASICS PRACTICE =====");