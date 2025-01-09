// Let's create Stack Class first
class Stack<T> {
    private items: T[] = []


    push(item: T) {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1]
    }

    isEmpty(): boolean {
        return this.items.length === 0
    }

    printStack() : void {
        console.log(this.items.join("->"))
    }
}

const stack = new Stack<number>();
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)

console.log("Stack after pushing items:")
stack.printStack()

console.log("Stack after popping item:", stack.pop())
stack.printStack()

console.log("Top Item", stack.peek())
stack.printStack()

console.log("Stack is empty:", stack.isEmpty())
stack.printStack()