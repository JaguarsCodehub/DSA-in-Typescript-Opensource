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
// function lengthOfLongestSubString(str: string): number {
//     const set = new Set<string>();
//     let left = 0, maxLength = 0;
//     for (let right = 0; right < str.length; right++) {
//         while(set.has(str[right])) {
//             set.delete(str[left]);
//             left++
//         }

//         set.add(str[right]);
//         maxLength = Math.max(maxLength, right - left + 1)
//     }
//     return maxLength
// }

// console.log(lengthOfLongestSubString('abcdbaasdw'))


// Check if two inputs are anagrams of each other
// const MAX_CHAR = 26;
// function isAnagram(str1: string, str2: string): boolean {
//     if (str1.length !== str2.length) return false;

//     let frequency: number[] = new Array(MAX_CHAR).fill(0)

//     for (let i = 0; i < str1.length; i++) {
//         frequency[str1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
//         frequency[str2.charCodeAt(i) - 'a'.charCodeAt(0)]--;
//     }

//     for (let i = 0; i < MAX_CHAR; i++) {
//         if (frequency[i] !== 0) return false;
//     }

//     return true
// }

// console.log(isAnagram("radar", "daarr"))

// Group Anagrams
function isGroupAnagram(strs: string[]): string[][] {
    const map = new Map<string, string[]>();

    for(const str of strs) {
        const sorted = str.split("").sort().join("");
        if(!map.has(sorted)) map.set(sorted, []);
        map.get(sorted)!.push(str);
    }
    return Array.from(map.values())
}

console.log(isGroupAnagram(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));