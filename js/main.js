// ========================
// Demonstration of functionalities
// ========================

import { StringUtilities } from "./modules/string.js";
import { Calculator } from "./modules/math.js";

const { capitalize, reverseString } = StringUtilities();

// Capitalize
const text = 'smith';
console.log(`Original text: ${text}. Capitalize: ${capitalize(text)}.`);

// Reverse string
const rev = 'Hello';
console.log(`Original text: ${rev}. Reversed text: ${reverseString(rev)}.`);
