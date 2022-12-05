// Give a number (n), find the first (n) elements of the fibonacci sequence : ...

// fibonacci sequence is a sequence that each number is the summation of the last two numbers ...

// fibonacci(2) = [0, 1]
// fibonacci(3) = [0, 1, 1]
// fibonacci(7) = [0, 1, 1, 2, 3, 5, 8]

function fibonacci(number) {
    const fib = [0, 1]
    for(i=2;i<=number;i++){
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib
}

console.log(fibonacci(2)) // [0, 1]     // the Big O for this code is : 2
console.log(fibonacci(3)) // [0, 1, 1]      // the Big O for this code is : 3
console.log(fibonacci(7)) // [0, 1, 1, 2, 3, 5, 8]      // the Big O for this code is : 7

// the Big O for this code is : O(n)