/**
 * 2) javascript function returns

Write a JavaScript function named findMaxNumber that takes an array of numbers as an argument and returns the maximum number in the array. If the array is empty, the function should return null.

Example:

const numbers1 = [10, 20, 5, 30, 25];

console.log(findMaxNumber(numbers1)); // Output: 30

const numbers2 = [5, 15, 7];


console.log(findMaxNumber(numbers2)); // Output: 15

const emptyArray = [];
console.log(findMaxNumber(emptyArray)); // Output: null

start with the name of Allah.
 */

function findMaxNumber(numbers){
    if(numbers.length===0){
        return null;
        
    }
    else{
        return Math.max(...numbers);
    }
}
const numbers1=[10,20,5,30,25];
console.log(findMaxNumber(numbers1));
const numbers2=[5,15,7];
console.log(findMaxNumber(numbers2));
const emptyArray = [];
console.log(findMaxNumber(emptyArray));