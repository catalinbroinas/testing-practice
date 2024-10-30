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

    test('Capitalize an empty string', () => {
        expect(capitalize('')).toBe('');
    });

    test('Capitalize a number (as string)', () => {
        expect(capitalize('2')).toMatch(/2/);
    });

    test('Capitalize null value', () => {
        expect(capitalize(null)).toBeNull();
    });

    test('Capitalize object', () => {
        expect(() => capitalize({})).toThrow();
    });
});
