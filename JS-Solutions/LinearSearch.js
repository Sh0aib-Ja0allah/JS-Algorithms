/*
Given an array (arr) and a variable (v), you will Check if the variable is an element of the array
or not if true return the index of (v), if false returns (-1) ...
*/

arr = ['shoaib']

function linearSearch (arr, v) {
    for(let i=0; i<arr.length; i++){
        if(arr[i] === v){
            return `index = ${i}`
        }
    }
    return ` - 1 , the element is not in your array, element = ${v}`
}


console.log(linearSearch(arr, 's')) // index = 0
console.log(linearSearch(arr, 'k')) // - 1 , the element is not in your array, element = k
console.log(linearSearch(arr, 'b')) // index = 5