// this is more efficiency 
function recursiveFibonacci(num: number):any {
    let arrayNumber = [0 , 1];
    let count = 2 ;

    if (arrayNumber.length !== num) {
        let equation = arrayNumber[count - 2] + arrayNumber[count - 1] ;
        arrayNumber.push(equation);
        count++
        console.log(equation)
        // return recursiveFibonacci(num)

    }

    console.log(arrayNumber)

    if (arrayNumber.length === num) {
        return arrayNumber;
        
    } 


}

console.log(recursiveFibonacci(7));


function fibonacciSequence(num: number) {
  let arrayNumber = [0];
  let helper = 1;
  let count = 0 
  for (let i = 0; i < num - 1 ; i++) {
      arrayNumber.push(helper + arrayNumber[i]);
      helper = arrayNumber[i];
      count =+ i
    }

    return {
        arrayNumber,
        count
    }
}


console.log(fibonacciSequence(7));

function antherFibonacci(num: number) {
    const arrayNumber = [0 , 1];
    let count = 0 ;
    for(let i = 2 ; i < num ; i++) {
        arrayNumber.push(arrayNumber[i - 2] + arrayNumber[i - 1]);
        count =+ i 
    }

    return {
        arrayNumber,
        count
    }
}

console.log(antherFibonacci(7));

