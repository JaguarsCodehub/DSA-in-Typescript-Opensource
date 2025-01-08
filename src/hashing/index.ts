// Two Sum problem
// function twoSum(nums: number[], target: number): number[] {
//     const map = new Map<number, number>()
//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i];
//         if(map.has(complement)) return [map.get(complement)!, i];
//         map.set(nums[i], i);
//     }

//     return []
// }

// console.log(twoSum([2,7,11,15], 22))


// Longest consequtive sequence
// function longestConsecutive(nums: number[]): number {
//     const set = new Set(nums);
//     let maxLength = 0;
//     for (const num of set) {
//         if(!set.has(num - 1)) {
//             let currentNum = num;
//             let currentStreak = 1;
//             while(set.has(currentNum + 1)) {
//                 currentNum++;
//                 currentStreak++;
//             }
//             maxLength = Math.max(maxLength, currentStreak);
//         }
//     }
//     return maxLength
// }

// console.log(longestConsecutive([100,300,200,4,2,101,1,6,3,5]));

// Group Anagrams
// function groupAnagrams(strs: string[]): string[][] {
//     const map = new Map<string, string[]>();
//     for (const str of strs) {
//         const sorted = str.split("").sort().join("");
//         if(!map.has(sorted)) map.set(sorted, []);
//         map.get(sorted)!.push(str)
//     }
//     return Array.from(map.values())
// }

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

// Contains duplicate
// function containsDuplicate(nums: number[]): boolean {
//     const set = new Set(nums);
//     return set.size !== nums.length
// }

// console.log(containsDuplicate([1, 2, 3, 1])); // Output: true
// console.log(containsDuplicate([1, 2, 3, 4])); // Output: false