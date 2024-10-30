import { Calculator } from "../modules/math.js";

describe('Calculator: data validation', () => {
    const { validateInputs } = Calculator();

    test('Returns "Missed data" when one input is missing', () => {
        expect(validateInputs(12)).toBe('Missed data');
    });

    test('Returns "Please introduce two numbers" when second input is a string', () => {
        expect(validateInputs(12, '2')).toBe('Please introduce two numbers');
    });

    test('Returns "Please introduce two numbers" when first input is a string', () => {
        expect(validateInputs('12', 10)).toBe('Please introduce two numbers');
    });

    test('Returns "Please introduce two numbers" when both inputs are strings', () => {
        expect(validateInputs('12', '2')).toBe('Please introduce two numbers');
    });

    test('Returns "Please introduce two numbers" when first input is NaN', () => {
        expect(validateInputs(NaN, 5)).toBe('Please introduce two numbers');
    });

    test('Returns "Please introduce two numbers" when first input is Infinity', () => {
        expect(validateInputs(Infinity, 5)).toBe('Please introduce two numbers');
    });
});

describe('Calculator: add method', () => {
    const { add } = Calculator();

    test('Adds two numbers', () => {
        expect(add(12, 8)).toBe(20);
    });

    test('Adds a number with 0', () => {
        expect(add(12132, 0)).toBe(12132);
    });

    test('Adds two negative numbers', () => {
        expect(add(-5, -10)).toBe(-15);
    });

    test('Adds a positive and a negative number resulting in zero', () => {
        expect(add(10, -10)).toBe(0);
    });

    test('Adds two large numbers', () => {
        expect(add(1e9, 1e9)).toBe(2e9);
    });

    test('Adds two decimal numbers', () => {
        expect(add(1.5, 2.3)).toBeCloseTo(3.8);
    });
});

describe('Calculator: subtract method', () => {
    const { subtract } = Calculator();

    test('Subtracts two positive numbers', () => {
        expect(subtract(66, 26)).toBe(40);
    });

    test('Subtracts a number by 0', () => {
        expect(subtract(12132, 0)).toBe(12132);
    });

    test('Subtracts 0 by a number', () => {
        expect(subtract(0, 12132)).toBe(-12132);
    });

    test('Subtracts two negative numbers', () => {
        expect(subtract(-5, -10)).toBe(5);
    });

    test('Subtracts two identical positive numbers resulting in zero', () => {
        expect(subtract(10, 10)).toBe(0);
    });

    test('Subtracts a positive and a negative number', () => {
        expect(subtract(10, -10)).toBe(20);
    });

    test('Subtracts two decimal numbers', () => {
        expect(subtract(6.5, 2.3)).toBeCloseTo(4.2);
    });

    test('Subtracts a large positive number from a smaller one, resulting in negative', () => {
        expect(subtract(5, 20)).toBe(-15);
    });

    test('Subtracts a small decimal number from a large one', () => {
        expect(subtract(10.75, 0.25)).toBeCloseTo(10.5);
    });
});

describe('Calculator: multiply method', () => {
    const { multiply } = Calculator();

    test('Multiplies two positive numbers', () => {
        expect(multiply(6, 7)).toBe(42);
    });

    test('Multiplies a number by 0', () => {
        expect(multiply(12132, 0)).toBe(0);
    });

    test('Multiplies 0 by a number', () => {
        expect(multiply(0, 12132)).toBe(0);
    });

    test('Multiplies two negative numbers', () => {
        expect(multiply(-3, -4)).toBe(12);
    });

    test('Multiplies a positive number by a negative number', () => {
        expect(multiply(-5, 3)).toBe(-15);
    });

    test('Multiplies two decimal numbers', () => {
        expect(multiply(1.5, 2.0)).toBeCloseTo(3.0);
    });
});

describe('Calculator: divide method', () => {
    const { divide } = Calculator();

    test('Divides two positive numbers', () => {
        expect(divide(20, 4)).toBe(5);
    });

    test('Divides a number by 1', () => {
        expect(divide(12132, 1)).toBe(12132);
    });

    test('Divides a number by 0', () => {
        expect(divide(10, 0)).toBe('Cannot divide by zero');
    });

    test('Divides a negative number by a positive number', () => {
        expect(divide(-10, 2)).toBe(-5);
    });

    test('Divides two negative numbers', () => {
        expect(divide(-10, -2)).toBe(5);
    });

    test('Divides two decimal numbers', () => {
        expect(divide(5.5, 2.2)).toBeCloseTo(2.5);
    });
});
