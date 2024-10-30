import { StringUtilities } from "../modules/string.js";

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

    test('Capitalize an empty string', () => {
        expect(capitalize()).toBe('Missed data');
    });

    test('Capitalize an empty string', () => {
        expect(capitalize('')).toBe('Missed data');
    });

    test('Capitalize null value', () => {
        expect(capitalize(null)).toBe('Missed data');
    });

    test('Capitalize a number', () => {
        expect(capitalize(2)).toBe('Please introduce a string');
    });

    test('Capitalize object', () => {
        expect(capitalize({})).toBe('Please introduce a string');
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

    test('Reverse an empty string', () => {
        expect(reverseString()).toBe('Missed data');
    });

    test('Reverse an empty string', () => {
        expect(reverseString('')).toBe('Missed data');
    });

    test('Reverse null value', () => {
        expect(reverseString(null)).toBe('Missed data');
    });

    test('Reverse a number', () => {
        expect(reverseString(2)).toBe('Please introduce a string');
    });

    test('Reverse object', () => {
        expect(reverseString({})).toBe('Please introduce a string');
    });
});
