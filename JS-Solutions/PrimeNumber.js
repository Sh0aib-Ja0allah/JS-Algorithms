// Given an int (n) check if is a prime number or not : ...

// prime(1) ... false
// prime(5) ... true
// prime(4) ... false
// prime(11) ... true

function prime(number){
    if(number < 2){
        return false
    }else{
        for(i=2; i< number; i++){
            if(number % i == 0){
                return false
            }else{
                return true
            }
        }
    }
}

console.log(prime(1)) // false
console.log(prime(5)) // true
console.log(prime(4)) // false
console.log(prime(11)) // true

// the Big O for this code is : O(n)