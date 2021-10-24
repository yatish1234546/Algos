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

function removeDuplicates() {
  list.push(8);
  list.push(8);
  list.push(8);
  let currentNode = list.head;
  let nextDistinceNode = list.head;

  while (currentNode) {
    nextDistinceNode = currentNode.next;

    while (
      nextDistinceNode !== null &&
      nextDistinceNode.val === currentNode.val
    ) {
      nextDistinceNode = nextDistinceNode.next;
    }

    currentNode.next = nextDistinceNode;
    currentNode = nextDistinceNode;
  }
  console.log(list);
}

function removeNthElementFromBehind() {
  list.push(9);
  list.push(10);

  let n = 4;
  let head = list.head;
  let first = list.head;
  let second = list.head;

  let count = 1;

  while (count <= n) {
    second = second.next;
    count++;
  }

  if (second === null) {
    head.value = head.next.value;
    head.next = head.next.next;
  }

  while (second !== null) {
    first = first.next;
    second = second.next;
  }

  console.log(first);
  first.value = first.next.value;
  first.next = first.next.next;
}

removeNthElementFromBehind();
