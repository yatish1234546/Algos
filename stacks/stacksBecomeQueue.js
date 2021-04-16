import Stack from "./stack";

class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  add(record) {
    this.first.add(record);
  }

  remove() {
    while (this.first.peek()) {
      this.second.add(this.first.remove());
    }

    const record = this.second.remove();

    while (this.second.peek()) {
      this.first.add(this.second.remove());
    }

    return record;
  }
}

const queueFromStack = new Queue();
const testStack = new Stack();

testStack.add("Green");
testStack.add("Blue");
testStack.add("Red");

queueFromStack.add("Green");
queueFromStack.add("Blue");
queueFromStack.add("Red");

console.log(queueFromStack.remove());
console.log(testStack.remove());
