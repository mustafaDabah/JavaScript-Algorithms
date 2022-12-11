function recursiveFibonacci(n: number): number {
    let count = 0 
    if(n < 2) {
        count++
        return n
    }
    count++
    console.log(count)
    return recursiveFibonacci(n - 2) +  recursiveFibonacci(n - 1) 
}

// console.log(recursiveFibonacci(0)) // 0 
// console.log(recursiveFibonacci(1)) // 1
// console.log(recursiveFibonacci(6)) // 8

function sumOfNumber(arr :number[] , index: number):number {
    if(index === 0) {
        return arr[0]
    } 
    // if(!arr.length){
    //     return arr[0]
    // }

    return arr[index] + sumOfNumber(arr , index - 1)
}

console.log(sumOfNumber([1,2,3,4,5,6] , 5));

// function powerNo(n:number , m:number):number {
//     if(m === 0) return 1;
    
//     if (m == 1) return n;

//     return n * powerNo(n , m - 1)
// }

// console.log(powerNo(3, 2 ))