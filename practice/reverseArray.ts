// function reverseArray(x: number[]): number[] {
//     let result = [];
//     for ( let i = x.length - 1; i >=0; i--) {
//         result.push(x[i]);
//     }

//     return result
// }

// console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]


// Without using built in methods
// function reverseArray(arr: number[]): number[] {
//     let left = 0; let right = arr.length - 1;
//     while (left < right) {
//         [arr[left], arr[right]] = [arr[right], arr[left]];
//         left++;
//         right--;
//     }
//     return arr;

// }

// console.log(reverseArray([1, 2, 3, 4, 5]));


function reverseArray(arr: number[]): number[] {
    let left = 0; let right = arr.length - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]