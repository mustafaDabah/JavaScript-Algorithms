function quickSort(arr: number[]) {
    if (arr.length < 2) {
        return arr
    }
    const mid = Math.floor(arr.length / 2)
    console.log(mid)
    let pivot = arr[arr.length - 1];
    let less = [];
    let greater = [];

    // console.log(pivot)

    for (let i = 1; i < arr.length ; i++) {
        if (arr[i] < pivot) {
            less.push(arr[i])
        } else {
            greater.push(arr[i])
        }

    }

    return  [...quickSort(less), pivot, ...quickSort(greater)]

}

console.log(quickSort([ 20, 8 ,-6 , -2, 4 , 5]))

