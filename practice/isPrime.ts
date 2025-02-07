function isPrime(n: number): boolean {
    if (n < 2) return false;
     
    for (let i = 2; i * i < 2; i++) {
        if (n % i === 0) return false
    }

    return true
}

console.log(isPrime(4))
