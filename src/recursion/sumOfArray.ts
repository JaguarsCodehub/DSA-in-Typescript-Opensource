function sumArray(arr: number[], n: number): number {
  if (n === 0) return 0; // Base case
  return arr[n - 1] + sumArray(arr, n - 1); // Recursive case
}
console.log(sumArray([1, 2, 3, 4, 5], 5)); // Output: 15
