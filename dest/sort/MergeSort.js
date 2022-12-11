"use strict";
function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid);
    // console.log(leftArr)
    // console.log(rightArr)
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}
function merge(leftArr, rightArr) {
    let sortArr = [];
    while ((leftArr === null || leftArr === void 0 ? void 0 : leftArr.length) && (rightArr === null || rightArr === void 0 ? void 0 : rightArr.length)) {
        if (leftArr[0] <= rightArr[0]) {
            sortArr.push(leftArr.shift());
        }
        else {
            rightArr.push(leftArr.shift());
        }
    }
    console.log(sortArr);
    return [...sortArr, ...leftArr, ...rightArr];
}
console.log(mergeSort([20, 8, -6, -2, 4, 5]));
