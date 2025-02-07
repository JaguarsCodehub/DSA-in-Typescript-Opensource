function findDuplicate(nums: number[]): number | null{
    let seen = new Set<number>();

    for(let num of nums) {
        if (seen.has(num)) {
            return num;
        }

        seen.add(num);
    }

    return null
}

console.log(findDuplicate([1,3,4,2,2])) // 2