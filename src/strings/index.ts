// Traverse String
// function traverseString(str: string): void {
//     for (let i = 0; i < str.length; i++) {
//         console.log(str[i])
//     }
// }

// console.log(traverseString("Jyotindra"))

// Reverse the String
// function reverseString(str: string): string {
//     return str.split("").reverse().join("");
// }

// console.log(reverseString("Jyotindra"))


// Check if palindrome
// function isPalindrome(str: string): boolean {
//     return str.split("").reverse().join("") === str
// }

// console.log(isPalindrome("radar"));

// Check Non repeating character in a string
// function nonRepeatingCharacter(str: string): string {
//     for (let i=0; i < str.length; i++) {
//         if (str.indexOf(str[i]) === str.lastIndexOf(str[i]))
//             return str[i]
//     }
//     return "$";
// }

// function nonRepeatingChracter2(str: string): number {
//     const frequency: {[key: string]: number} = {};
//     for (const char of str) {
//         frequency[char] = (frequency[char] || 0) + 1;
//     }
//     for (let i = 0; i < str.length; i++) {
//         if (frequency[str[i]] === 1) return i
//     }

//     return -1
// }

// console.log(nonRepeatingChracter2("Jyotindra"))

// Length of Longest Sub String without repeating characters
function lengthOfLongestSubstring(str: string): number {
    const set = new Set<string>();
    let left = 0, maxLength = 0;
    for (let right = 0; right < str.length; right++) {
        while (set.has(str[right])) {
            set.delete(str[left]);
            left++;
        }

        set.add(str[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength
}

console.log(lengthOfLongestSubstring("abcbda"))