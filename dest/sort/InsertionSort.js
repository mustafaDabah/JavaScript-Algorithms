"use strict";
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i]; // arr[compare] 20  8 
        let j = i - 1; // arr[start] sort element 0 1 >> -6 20 
        while (j >= 0 && arr[j] > numberToInsert) {
            arr[j + 1] = arr[j]; // -6 20 20 -2 4 
            j = j - 1; // 0
        }
        arr[j + 1] = numberToInsert;
    }
    return arr;
}
// console.log(insertionSort([-6 , 20 , 8 , -2 , 4])); // [-6 , 20 , 8 , -2 , 4 ]
