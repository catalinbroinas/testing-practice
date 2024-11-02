import { StringUtilities } from "../modules/string.js";

describe('String utilities: data validation', () => {
    const { validateInput } = StringUtilities();

    test('Returns "Missed data" for an empty input', () => {
        expect(validateInput()).toBe('Missed data');
    });

    test('Returns "Missed data" for an empty string', () => {
        expect(validateInput('')).toBe('Missed data');
    });

    test('Returns "Missed data" for a null value', () => {
        expect(validateInput(null)).toBe('Missed data');
    });

    test('Returns "Please introduce a string" for a number input', () => {
        expect(validateInput(2)).toBe('Please introduce a string');
    });

    test('Returns "Please introduce a string" for an object input', () => {
        expect(validateInput({})).toBe('Please introduce a string');
    });
});

describe('Capitalize string method', () => {
    const { capitalize } = StringUtilities();

    test('Capitalize single letter', () => {
        expect(capitalize('a')).toMatch(/A/);
    });

    test('Capitalize single word', () => {
        expect(capitalize('smith')).toMatch(/Smith/);
    });

    test('Capitalize a phrase', () => {
        expect(capitalize('this is a test')).toMatch(/This is a test/);
    });

    test('Capitalize a number (as string)', () => {
        expect(capitalize('2')).toMatch(/2/);
    });
});

describe('Reverse string method', () => {
    const { reverseString } = StringUtilities();

    test('Revers single letter', () => {
        expect(reverseString('a')).toMatch(/a/);
    });

    test('Reverse single word', () => {
        expect(reverseString('hello')).toMatch(/olleh/);
    });

    test('Reverse a phrase', () => {
        expect(reverseString('this is')).toMatch(/si siht/);
    });

    test('Reverse a number (as string)', () => {
        expect(reverseString('2')).toMatch(/2/);
    });
});

describe('Caesar Cipher string method', () => {
    const { caesarCipher } = StringUtilities();

    test('Caesar Cipher single letter', () => {
        expect(caesarCipher('a', 3)).toBe('d');
    });

    test('Caesar Cipher single word', () => {
        expect(caesarCipher('hello', 3)).toBe('khoor');
    });

    test('Caesar Cipher a phrase', () => {
        expect(caesarCipher('Hello, world!', 3)).toBe('Khoor, zruog!');
    });

    test('Caesar Cipher with negative shift', () => {
        expect(caesarCipher('hello', -3)).toBe('ebiil');
    });

    test('Caesar Cipher with shift larger than 26', () => {
        expect(caesarCipher('hello', 29)).toBe('khoor');
    });

    test('Caesar Cipher with shift of zero', () => {
        expect(caesarCipher('hello', 0)).toBe('hello');
    });

    test('Caesar Cipher with non-alphabetic characters', () => {
        expect(caesarCipher('1234 !@#$', 5)).toBe('1234 !@#$');
    });

    test('Caesar Cipher with mixed case', () => {
        expect(caesarCipher('Hello World!', 3)).toBe('Khoor Zruog!');
    });
});
