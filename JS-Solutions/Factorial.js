// Given an int (n) Calc the factorial of (n)

// factorial(0) = 1
// factorial(4) = 24
// factorial(5) = 120

function factorial(number){
    let fact = 1
    if(number == 0){
        fact = 1
        return fact
    }else{
        for(i=1; i<=number; i++){
            fact *=i
        }
        return fact
    }
}

console.log(factorial(0)) // 0
console.log(factorial(4)) // 24
console.log(factorial(5)) // 120

// the Big O for this code is : O(n)