function factorialIterative(n: number): number {
    let result = 1;
    for(let i = 2; i <=n; i++) {
        result = result * i
    }

    return result
}

console.log(factorialIterative(5)) // 120


function factorialRecurisve(n: number): number {
    if (n === 1) {
        return 1
    }
    return n * factorialRecurisve(n - 1)
}

console.log(factorialRecurisve(5)) // 120