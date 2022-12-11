"use strict";
function bubbleSort(arr) {
    // const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        let isSorted = true;
        for (let m = 1; m < arr.length - i; m++) {
            console.log('m');
            // isSorted = true;
            if (arr[m] < arr[m - 1]) {
                let temp = arr[m];
                arr[m] = arr[m - 1];
                arr[m - 1] = temp;
                isSorted = false;
            }
            // console.log(isSorted)
        }
        // if(isSorted) return;
    }
    return arr;
}
console.log(bubbleSort([1, 3, 2, 5, 4]));
function bubbleSortTwo(arr) {
    let count = 0;
    let isSorted;
    do {
        isSorted = false;
        for (let i = 0; i < arr.length; i++) {
            count++;
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                isSorted = true;
            }
        }
        console.log(isSorted);
    } while (isSorted);
    return {
        arr,
        count
    };
}
// console.log(bubbleSortTwo([1,2 , 3, 5 , 4]));
