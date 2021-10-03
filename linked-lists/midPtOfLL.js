import list from './single-linked-list';

let firstPointer = list.head;
let secondPointer = list.head;

if (list.head !== null) {
  while (secondPointer !== null && secondPointer.next !== null) {
    secondPointer = secondPointer.next.next;
    firstPointer = firstPointer.next;
  }
}
