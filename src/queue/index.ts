// Let's create Queue Class first
class Queue<T> {
    private items: T[] = [];


    enqueue(item: T): void {
        this.items.push(item)
    }

    dequeue(): T | undefined {
        return this.items.shift();
    }

    peek() : T | undefined {
        return this.items[0]
    }

    isEmpty(): boolean {
        return this.items.length === 0
    }

    printQueue(): void {
        console.log(this.items.join("->"))
    }
}

// Example Usage
const queue = new Queue<number>();

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

console.log("Queue after enqueuing items:")
queue.printQueue()

queue.dequeue()

console.log("Queue after dequeuing item:")
queue.printQueue()

queue.enqueue(40)
queue.printQueue()

console.log("Front item:", queue.peek());

console.log("Is queue empty?", queue.isEmpty());