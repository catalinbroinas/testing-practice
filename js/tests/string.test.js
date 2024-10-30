import { StringUtilities } from "../modules/string.js";

describe('String methods', () => {
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
