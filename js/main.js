// ========================
// Demonstration of functionalities
// ========================

import { StringUtilities } from "./modules/string.js";
import { Calculator } from "./modules/math.js";

const { capitalize, reverseString } = StringUtilities();
const { add, subtract, divide, multiply } = Calculator();

// Capitalize
let text = 'smith';
console.log(`Original text: ${text}. Capitalize: ${capitalize(text)}.`);

// Reverse string
text = 'Hello';
console.log(`Original text: ${text}. Reversed text: ${reverseString(text)}.`);

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
