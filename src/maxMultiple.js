function solution(divisor, bound) {
    return bound - (bound % divisor);
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test maxMultiple

// alternative solution
