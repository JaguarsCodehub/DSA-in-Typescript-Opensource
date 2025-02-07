function findMinMax(arr: number[]): {min: number, max: number} {
    let min = arr[0], max = arr[0];

    for (let num of arr) {
        if (num < min) min = num;
        if (num > max) max = num;
    }

    return {min, max}
}

console.log(findMinMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // { min: 1, max: 10 }
