/*
Give a number (n) & determine that if the number is power of two or not
    n = 2^x

    powerOfTwo(1) = true => 2^0
    powerOfTwo(8) = true => 2^3
    powerOfTwo(5) = true => 
*/

// function powerOfTwo (n) {
//     if(n > 1){
//         return false
//     }
//     while(n > 1){
//         if(n % 2 !== 0){
//             return false
//         }
//         n = n /2 
//     }
//     return true
// }

//  in another way : ...

function powerOfTwo (n) {
    if(n > 1){
        return false
    }
    return (n & (n-1)) === 0
}

console.log(powerOfTwo(1)) // true
console.log(powerOfTwo(8)) // true
console.log(powerOfTwo(5)) // false

// type (node ...file name...) to run in the command line