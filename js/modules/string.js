function StringUtilities() {
    const validateInput = (text) => {
        if (!text) return 'Missed data';
        if (typeof text !== 'string') return 'Please introduce a string';

        return null;
    };

    const capitalize = (text) => {
        const error = validateInput(text);
        if (error) return error;

        const firstChar = text.charAt(0).toUpperCase();
        const restOfText = text.slice(1);
        return `${firstChar}${restOfText}`;
    };

    const reverseString = (text) => {
        const error = validateInput(text);
        if (error) return error;

        return text.split('').reverse().join('');
    };

    const caesarCipher = (text, shift) => {
        const error = validateInput(text);
        if (error) return error;
        if (!Number.isInteger(shift)) return 'Shift must be an integer.';

        // Keep shift within the alphabet range (0 to 25)
        const shiftAmount = shift % 26;

        return [...text].map(char => {
            // Get the ASCII code of each character
            const code = char.charCodeAt(0);

            // Check if it's an uppercase letter (A-Z)
            if (code >= 65 && code <= 90) {
                return String.fromCharCode(((code - 65 + shiftAmount) % 26) + 65);
            }

            // Check if it's a lowercase letter (a-z)
            if (code >= 97 && code <= 122) {
                return String.fromCharCode(((code - 97 + shiftAmount) % 26) + 97);
            }

            // Return non-alphabetic characters as they are
            return char;
        }).join('');
    };

    return {
        validateInput,
        capitalize,
        reverseString,
        caesarCipher
    };
}

export { StringUtilities };
