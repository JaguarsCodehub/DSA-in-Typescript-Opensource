class MinStack {
    private stack: number[] = [];
    private minStack: number[] = [];

    push(val:number) : void {
        this.stack.push(val)
        const min  = this.minStack.length === 0 ? val : Math.min(val, this.minStack[this.minStack.length - 1]);
        this.minStack.push(min);
    }


    pop() : void {
        this.stack.pop();
        this.minStack.pop();
    }

    top() : number {
        return this.stack[this.stack.length - 1];
    }

    getMin() : number {
        return this.minStack[this.minStack.length - 1]
    }
}


// Example
const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);

console.log("Minimum value:", minStack.getMin()); // Output: -3
minStack.pop();
console.log("Top of stack:", minStack.top());    // Output: 0
console.log("Minimum value:", minStack.getMin()); // Output: -2