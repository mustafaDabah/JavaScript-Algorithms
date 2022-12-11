"use strict";
function factorial(num) {
    let value = 1;
    let count = 0;
    for (let i = 2; i <= num; i++) {
        value = i * value;
        count++;
    }
    return {
        value,
        count
    };
}
// console.log(factorial(4));
// console.log(factorial(0));
function factorialTwo(n) {
    return n * (n - 1);
}
// console.log(factorialTwo(4));
function factorialThree(n) {
    if (n === 0)
        return 1;
    return n * factorialThree(n - 1);
}
console.log(factorialThree(5));
