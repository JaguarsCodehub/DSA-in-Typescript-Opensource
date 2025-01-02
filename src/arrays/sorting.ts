// Bubble Sort
// function bubbleSort(arr: number[]): number[] {
//     for (let i = 0; i< arr.length - 1; i++) {
//         for (let j= 0; j < arr.length - i -1; j++) {
//             if(arr[j] > arr[j+1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }

//         }
//     }
//     return arr
// }

// console.log(bubbleSort([5, 3, 8, 4, 2]));

// Selection Sort
// function selectionSort(arr: number[]): number[] {
//     for (let i = 0; i < arr.length; i++) {
//         let minIndex = i;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[minIndex]) minIndex = j;
//         }
//         [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
//     }
//     return arr
// }

// console.log(selectionSort([5,4,2,1,7]));

// Merge Sort
// function mergeSort(arr: number[]): number[] {
//     if(arr.length <=1 ) return arr;
//     const mid = Math.floor(arr.length / 2);
//     const left = mergeSort(arr.slice(0, mid));
//     const right = mergeSort(arr.slice(mid));
//     return merge(left, right)
// }

// function merge(left: number[], right: number[]): number[] {
//     let result: number[] = [], i=0, j=0;
//     while (i < left.length && j < right.length) {
//         if(left[i] < right[j]) result.push(left[i++]);
//         else result.push(right[j++])
//     }
//     return result.concat(left.slice(i)).concat(right.slice(j))
// }

// console.log(mergeSort([5, 3, 8, 4, 2])); // Output: [2, 3, 4, 5, 8]

// Reverse an array
function reverseArray(arr: number[]): number[] {
    let left = 0, right = arr.length - 1;
    while(left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr
}

console.log(reverseArray([5,6,7,8,9,10]));