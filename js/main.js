// ========================
// Demonstration of functionalities
// ========================

import { StringUtilities } from "./modules/string.js";
import { AnalyzeArray, Calculator } from "./modules/math.js";

const { capitalize, reverseString, caesarCipher } = StringUtilities();
const { add, subtract, divide, multiply } = Calculator();

// Capitalize
let text = 'smith';
console.log(`Original text: ${text}. Capitalize: ${capitalize(text)}.`);

// Reverse string
text = 'Hello';
console.log(`Original text: ${text}. Reversed text: ${reverseString(text)}.`);

// Caesar Cipher string 
console.log(`Original text: ${text}. Function 'caesarCipher' with 'shift: 3'  return: ${caesarCipher(text, 3)}.`);

// Calculator: add method
let num1 = 12;
let num2 = 8;
console.log(`${num1} + ${num2} = ${add(num1, num2)}`);

// Calculator: subtract method
num1 = 112;
num2 = 22;
console.log(`${num1} - ${num2} = ${subtract(num1, num2)}`);

// Calculator: multiply method
num1 = 60;
num2 = 5;
console.log(`${num1} + ${num2} = ${multiply(num1, num2)}`);

// Calculator: divide method
num1 = 100;
num2 = 5;
console.log(`${num1} / ${num2} = ${divide(num1, num2)}`);

// Analyze  Array
const myArr = [1, 8, 3, 4, 2, 6];
console.log(AnalyzeArray(myArr));
