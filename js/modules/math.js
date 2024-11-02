function Calculator() {
    const validateInputs = (num1, num2) => {
        if (num1 === undefined || num2 === undefined || num1 === null || num2 === null) {
            return 'Missed data';
        }
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            return 'Please introduce two numbers';
        }
        if (isNaN(num1) || isNaN(num2) || !isFinite(num1) || !isFinite(num2)) {
            return 'Please introduce two numbers';
        }

        return null;
    };

    const add = (num1, num2) => {
        const error = validateInputs(num1, num2);
        if (error) return error;

        return num1 + num2;
    };

    const subtract = (num1, num2) => {
        const error = validateInputs(num1, num2);
        if (error) return error;

        return num1 - num2;
    };

    const divide = (num1, num2) => {
        const error = validateInputs(num1, num2);
        if (error) return error;
        if (num2 === 0) return 'Cannot divide by zero';

        return num1 / num2;
    };

    const multiply = (num1, num2) => {
        const error = validateInputs(num1, num2);
        if (error) return error;

        return num1 * num2;
    };

    return {
        validateInputs,
        add,
        subtract,
        divide,
        multiply
    };
}

function AnalyzeArray(arr) {
    const validateInput = (arr) => {
        if (!Array.isArray(arr) || !arr.length) {
            throw new Error('Please provide a non-empty array');
        }

        if (arr.some(value => typeof value !== 'number')) {
            throw new Error('Array must contain only numbers');
        }

        return true;
    };

    const getAverage = (arr) => arr.reduce((sum, currentValue) => sum + currentValue, 0) / arr.length;
    const getMin = (arr) => Math.min(...arr);
    const getMax = (arr) => Math.max(...arr);
    const getLength = (arr) => arr.length;

    if (validateInput(arr)) {
        return {
            average: getAverage(arr),
            min: getMin(arr),
            max: getMax(arr),
            length: getLength(arr)
        };
    }

    return null;
}

export { Calculator, AnalyzeArray };
