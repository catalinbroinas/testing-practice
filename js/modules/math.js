function Calculator() {
    const validateInputs = (num1, num2) => {
        if (num1 === undefined || num2 === undefined || num1 === null || num2 === null) {
            return 'Missed data';
        }
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            return 'Please introduce two numbers';
        }

        return null;
    };

    const add = (num1, num2) => {
        const error = validateInputs(num1, num2);
        if (error) return error;

        return num1 + num2;
    };

    return {
        add
    };
}

export { Calculator };
