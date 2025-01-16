function myAtoi(s: string): number {
  const INT_MIN = -(2 ** 31); // -2^31
  const INT_MAX = 2 ** 31 - 1; // 2^31 - 1

  let index = 0;
  let sign = 1;
  let result = 0;

  // Ignore leading whitespace
  while (index < s.length && s[index] === ' ') {
    index++;
  }

  // Check for signs
  if (index < s.length && (s[index] === '+' || s[index] === '-')) {
    sign = s[index] === '-' ? -1 : 1;
    index++;
  }

  // Convert string to integer
  while (index < s.length && s[index] >= '0' && s[index] <= '9') {
    const digit = s[index].charCodeAt(0) - '0'.charCodeAt(0);

    // Check for overflow
    if (
      result > Math.floor(INT_MAX / 10) ||
      (result === Math.floor(INT_MAX / 10) && digit > (sign === 1 ? 7 : 8))
    ) {
      return sign === 1 ? INT_MAX : INT_MIN;
    }

    result = result * 10 + digit;
    index++;
  }

  // Step 4: Apply the sign and return the result
  return result * sign;
}
