function StringUtilities() {
    const capitalize = (text) => {
        const firstChar = text.charAt(0).toUpperCase();
        const restOfText = text.slice(1);
        return `${firstChar}${restOfText}`;
    };

    return {
        capitalize
    };
}

export { StringUtilities };
