const A = [1 , 2];
const B = [3 , 4 , 3];

// A * B [[1 , 3] , [1 , 4] , [2 , 3] , [2 , 4]];

function cartesianProduct(arrOne:[] , arrTwo:[]) {
    let result = [];

    for (let i = 0; i < arrOne.length; i++) {
        for (let j = 0; j < arrTwo.length; j++) {
            result.push([arrOne[i] , arrTwo[j]]);
        }
    }

    return result;
}

console.log(cartesianProduct(A , B))