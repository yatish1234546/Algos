import { list } from './single-linked-list';
// 4->5->6->7->8

function finMidPt() {
  let firstPointer = list.head;
  let secondPointer = list.head;

  if (list.head !== null) {
    while (secondPointer !== null && secondPointer.next !== null) {
      secondPointer = secondPointer.next.next;
      firstPointer = firstPointer.next;
    }

    console.log(firstPointer.val); // Output is 6
  }
}

// Detect Loop in a linked list

function detectLoop() {
  let set = new Set();

  let current = list.head;
  while (current !== null) {
    if (set.has(current)) {
      console.log('Loop detected');
      return;
    }

    set.add(current);
    console.log(set);
    current = current.next;
  }

  console.log('No Loop Detected');
}

detectLoop();
