function StringUtilities() {
    const capitalize = (text) => {
        if (!text) return 'Missed data';
        if (typeof text !== 'string') return 'Please introduce a string';

        const firstChar = text.charAt(0).toUpperCase();
        const restOfText = text.slice(1);
        return `${firstChar}${restOfText}`;
    };

    return {
        capitalize
    };
}

export { StringUtilities };
