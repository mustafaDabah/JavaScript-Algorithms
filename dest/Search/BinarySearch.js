"use strict";
function binarySearch(arr, target) {
    let low = 0;
    let hight = arr.length - 1;
    while (low <= hight) {
        let mid = Math.floor((low + hight) / 2);
        if (target === arr[mid]) {
            return arr[mid];
        }
        else if (arr[mid] > target) {
            hight = mid - 1;
        }
        else if (arr[mid] < target) {
            low = mid + 1;
        }
    }
    return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5, 6], 3));
function recursiveBinarySearch(arr, target, start = 0, end = arr.length - 1) {
    let mid = Math.floor((end + start) / 2);
    if (target === arr[mid]) {
        return arr[mid];
    }
    else if (start > end) {
        return -1;
    }
    else if (arr[mid] > target) {
        return recursiveBinarySearch(arr, target, start, mid);
    }
    else if (arr[mid] < target) {
        return recursiveBinarySearch(arr, target, mid + 1, end);
    }
    return -1;
}
// console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6], 2));
function RecursiveBinarySearch() {
    this.target = -1;
    this.findTarget = function (arr, target) {
        let low = 0;
        let hight = arr.length - 1;
        while (low <= hight) {
            let mid = Math.floor((low + hight) / 2);
            if (target === arr[mid]) {
                this.target = arr[mid];
                return this.target;
            }
            else if (arr[mid] > target) {
                hight = mid - 1;
            }
            else if (arr[mid] < target) {
                low = mid + 1;
                // console.log(low)
            }
        }
        return this.target = -1;
    };
}
const firstSearch = new RecursiveBinarySearch();
console.log(firstSearch);
console.log(firstSearch.findTarget([1, 2, 3, 4, 5, 6], 2));
