// ========================
// Demonstration of functionalities
// ========================

import { StringUtilities } from "./modules/string.js";
import { MathUtilities } from "./modules/math.js";

const { capitalize } = StringUtilities();

// Capitalize
const text = 'smith';
console.log(`Original text: ${text}. Capitalize: ${capitalize(text)}.`);
