class ListNode {
  value: number;
  next: ListNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}


// Merge two Lists
// function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
//     if(l1 === null) return l2;
//     if (l2 === null) return l1;

//     if(l1.value < l2.value) {
//         l1.next = mergeTwoLists(l1.next , l2);
//         return l1;
//     } else {
//         l2.next = mergeTwoLists(l1, l2.next);
//         return l2
//     }
// }

// console.log(mergeTwoLists(
//     new ListNode(6),
//     new ListNode(8)))

