function calPoints (ops: string[]): number {
    const stack: number[] = [];

    for (const op of ops) {
        if(op === "C") {
            stack.pop()
        } else if (op === "D") {
            stack.push(stack[stack.length - 1] * 2)
        } else if (op === "+") {
            stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
        } else {
            stack.push(Number(op))
        }
    }

    return stack.reduce((sum, score) => sum  + score, 0);
}




console.log(calPoints(["5", "2", "C", "D", "+"])); // Output: 30