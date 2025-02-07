// // Array traversal
// function printArray(arr: number[]): void {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]); 
//   }
// }
// printArray([1,2,3,4,5])
// Linear Searching in Arrays
function linearSearch(arr, target) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === target)
            return i;
    }
    return -1;
}
console.log([5, 2, 8, 9, 1, 3], 3);
