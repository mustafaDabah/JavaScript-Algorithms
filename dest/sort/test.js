"use strict";
function SortArray(arr) {
    this.arr = arr;
    this.insertionSort = function () {
        for (let i = 1; i < this.arr.length; i++) {
            let numberToInsert = this.arr[i];
            let SE = i - 1;
            while (SE >= 0 && arr[SE] > numberToInsert) {
                this.arr[SE + 1] = this.arr[SE];
                SE = SE - 1;
            }
            this.arr[SE + 1] = numberToInsert;
        }
        return this.arr;
    };
    this.bubbleSort = function () {
        for (let i = 0; i < this.arr.length; i++) {
            for (let j = 1; j < this.arr.length - i; j++) {
                if (this.arr[j] < this.arr[j - 1]) { // -6 > 20 
                    // let temp = arr[j] // -6 
                    // arr[j] = arr[j - 1] 
                    // arr[j - 1] = temp
                    [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
                }
            }
        }
        return this.arr;
    };
    this.mergeSort = function (arr = this.arr) {
        if (arr.length < 2) {
            return arr;
        }
        let mid = Math.floor(arr.length / 2);
        let leftArr = arr.slice(0, mid);
        let rightArr = arr.slice(mid);
        return merge(this.mergeSort(leftArr), this.mergeSort(rightArr));
    };
    let merge = function (leftArr, rightArr) {
        let sortArr = [];
        while (leftArr.length && rightArr.length) {
            if (leftArr[0] <= rightArr[0]) {
                sortArr.push(leftArr.shift());
            }
            else {
                sortArr.push(rightArr.shift());
            }
        }
        return [...sortArr, ...leftArr, ...rightArr];
    };
    this.quicksort = function (arr = this.arr) {
        if (arr.length < 2) {
            return arr;
        }
        const mid = Math.floor(arr.length / 2);
        console.log(mid);
        let pivot = arr[0];
        let less = [];
        let greater = [];
        for (let i = 1; i < arr.length; i++) {
            if (pivot > arr[i]) {
                less.push(arr[i]);
            }
            else {
                greater.push(arr[i]);
            }
        }
        return [...this.quicksort(less), pivot, ...this.quicksort(greater)];
    };
}
const test = new SortArray([20, -6, 8, -2, 4]);
// console.log(test.insertionSort())
console.log(test.bubbleSort());
// console.log(test.mergeSort())
console.log(test.quicksort());
