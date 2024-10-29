module.exports = {
    transform: {
        '^.+\\.js$': 'babel-jest',
    },
    testEnvironment: 'node', // sau 'jsdom', în funcție de nevoile tale
};
