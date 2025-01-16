function longestPalindrome(s: string): string {
  if (s.length === 0) return '';

  let start = 0,
    end = 0;

  // Helper function to expand around a center and return the length of the palindrome
  function expandAroundCenter(left: number, right: number): number {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1; // Length of the palindrome
  }

  for (let i = 0; i < s.length; i++) {
    const len1 = expandAroundCenter(i, i); // Odd-length palindrome
    const len2 = expandAroundCenter(i, i + 1); // Even-length palindrome
    const maxLen = Math.max(len1, len2);

    if (maxLen > end - start) {
      // Update the start and end indices
      start = i - Math.floor((maxLen - 1) / 2);
      end = i + Math.floor(maxLen / 2);
    }
  }

  return s.substring(start, end + 1);
}

// Example Usage
console.log(longestPalindrome('babad')); // Output: "bab" or "aba"
console.log(longestPalindrome('cbbd')); // Output: "bb"
