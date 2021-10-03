class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }

  pop() {
    if (!this.head) {
      return;
    }
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) {
      return;
    }

    let temp = this.head;
    this.head = this.head.next;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, val) {
    const selectedNode = this.get(index);
    if (selectedNode === null) {
      return null;
    } else {
      selectedNode.val = val;
    }
    return selectedNode;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return null;

    if (index === 0) {
      return this.unshift(val);
    }

    if (index === this.length) {
      return this.push(val);
    }

    const newNode = new Node(val);
    const previousNode = this.get(index - 1);
    newNode.next = previousNode.next;
    previousNode.next = newNode;
    this.length++;
    return newNode;
  }

  remove(index) {
    if (index < 0 || index > this.length) return null;

    if (index === 0) {
      return this.shift();
    }

    if (index === this.length) {
      return this.pop();
    }

    const previousNode = this.get(index - 1);
    const currentNode = this.get(index);

    previousNode.next = currentNode.next;

    this.length--;
    return currentNode;
  }

  reverse() {
    let next = null;
    let prev = null;
    let current = this.head;
    [this.head, this.tail] = [this.tail, this.head];
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
  }
}

const list = new SinglyLinkedList();

list.push(4);
list.push(5);
list.push(6);
list.push(7);
list.push(8);

const list2 = new SinglyLinkedList();

list2.push(4);
list2.push(5);
list2.push(6);

export { list, list2 };
