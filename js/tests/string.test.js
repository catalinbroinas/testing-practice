import { StringUtilities } from "../modules/string.js";

const { capitalize } = StringUtilities();

// Capitalize
test('Capitalize single word', () => {
    expect(capitalize('smith')).toMatch(/Smith/);
});

test('Capitalize a phrase', () => {
    expect(capitalize('this is a test')).toMatch(/This is a test/);
});
