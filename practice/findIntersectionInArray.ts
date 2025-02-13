// function findIntersection(arr1: number[], arr2: number[]): number[] {
//     let set1 = new Set(arr1);

//     let intersection: number[] = [];

//     for(let num of arr2) {
//         if (set1.has(num)) intersection.push(num);
//     }

//     return intersection
// }

// console.log(findIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));    // [3, 4, 5]

function intersection(arr1: number[], arr2: number[]): number[] {
    let set1 = new Set(arr1);

    let intersection: number[] = [];

    for (let num of arr2) {
        if (set1.has(num)) intersection.push(num);
    }

    return intersection;
}

console.log(intersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));    // [3, 4, 5