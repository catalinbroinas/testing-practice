function Calculator() {
    const add = (num1, num2) => {
        if (!num1 || !num2) return 'Missed data';
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            return 'Please introduce two numbers';
        }

        return num1 + num2;
    };

    return {
        add
    };
}

export { Calculator };
