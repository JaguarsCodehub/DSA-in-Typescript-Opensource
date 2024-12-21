function power(x: number, n: number): number {
  if (n === 0) return 1; // Base case
  return x * power(x, n - 1); // Recursive case
}
console.log(power(2, 3)); // Output: 8
