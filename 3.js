/**
 * Write a JavaScript function named mergeArrays that takes two arrays as arguments and returns a new array that merges both arrays using the spread operator.

Example:
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(mergeArrays(arr1, arr2)); // Output: [1, 2, 3, 4, 5, 6]
 */


function mergeArrays(ara1,ara2){

 return [...ara1,...ara2];

}

const arr1=[1,2,3];
const arr2=[4,5,6];
let res=mergeArrays(arr1,arr2);
console.log(res);