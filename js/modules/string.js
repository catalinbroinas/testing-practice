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

    return {
        capitalize,
        reverseString
    };
}

export { StringUtilities };
