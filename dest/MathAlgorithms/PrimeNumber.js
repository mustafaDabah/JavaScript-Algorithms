"use strict";
function isPrimeNumber(n) {
    if (n < 2)
        return false;
    if (n % 2 !== 0)
        return true;
    return false;
}
console.log(isPrimeNumber(5)); // true
console.log(isPrimeNumber(4)); // false
console.log(isPrimeNumber(1)); // false
