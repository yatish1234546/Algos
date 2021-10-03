import list from './single-linked-list';
// 4->5->6->7->8
let firstPointer = list.head;
let secondPointer = list.head;

if (list.head !== null) {
  while (secondPointer !== null && secondPointer.next !== null) {
    secondPointer = secondPointer.next.next;
    firstPointer = firstPointer.next;
  }

  console.log(firstPointer.val); // Output is 6
}
