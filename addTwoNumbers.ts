class Node {
  val: number;
  next: Node | null;
  constructor(val?: number, next?: Node | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(l1: Node | null, l2: Node | null): Node | null {
  let dummy = new Node(); // This is a dummy node to help us construct the result list.
  let current = dummy;
  let carry = 0;

  while (l1 !== null || l2 !== null) {
    let x = l1 !== null ? l1.val : 0;
    let y = l2 !== null ? l2.val : 0;
    let sum = carry + x + y;

    // Update carry for the next step.
    carry = Math.floor(sum / 10);

    // Create a new node for the current digit.
    current.next = new Node(sum % 10);
    current = current.next;

    // Move to the next nodes in the lists.
    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }

  // If there's any carry left, add a new node at the end.
  if (carry > 0) {
    current.next = new Node(carry);
  }

  return dummy.next; // Return the head of the resulting list (dummy.next skips the dummy node).
}

// Example usage:
const l1 = new Node(2, new Node(4, new Node(3))); // 342
const l2 = new Node(5, new Node(6, new Node(4))); // 465
const result = addTwoNumbers(l1, l2);

// Helper function to print the result linked list.
function printList(head: Node | null): void {
  let current = head;
  let result = [];
  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }
  console.log(result);
}

printList(result); // Output: [7, 0, 8] which represents 807
