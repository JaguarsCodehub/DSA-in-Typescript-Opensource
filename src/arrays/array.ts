// Array traversal
function printArray(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); 
  }
}

printArray([1,2,3,4,5])


// Linear Searching in Arrays
function linearSearch(arr: number[], target: number): number {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i
    }
    return -1;
}

console.log(linearSearch([1,2,3,4,5], 3));


// Binary Search
function binarySearch(arr: number[], target: number): number {
    let low = 0, high = arr.length - 1;
    while(low <= high) {
        const mid = Math.floor((low + high) / 2);
        if(arr[mid] === target) return mid;
        else if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9], 9))