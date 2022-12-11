function mergeSort(arr:[]): any[] {
    if(arr.length < 2) {
        return arr 
    }

    let mid = Math.floor(arr.length / 2);
    let leftArr: number[] = arr.slice(0 , mid);
    let rightArr: any[] = arr.slice(mid);

    // console.log(leftArr)
    // console.log(rightArr)

    return merge(mergeSort(leftArr) , mergeSort(rightArr));
}


function merge(leftArr?:[] , rightArr?:[]) {
    let sortArr = [];
    
    while(leftArr?.length && rightArr?.length) {
        if(leftArr[0] <= rightArr[0]) {
            sortArr.push(leftArr.shift());
        }else {
            rightArr.push(leftArr.shift());
        }
    }

    console.log(sortArr)
    
    return [...sortArr , ...leftArr ,...rightArr]
}
console.log(mergeSort([ 20, 8 ,-6 , -2, 4 , 5]));

