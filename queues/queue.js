class Queue {
  constructor() {
    this.data = [];
  }

  add(element) {
    this.data.unshift(element);
    return this.data;
  }

  remove() {
    return this.data.pop();
  }

  find(i) {
    return this.data[i - 1];
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

const queue = new Queue();

queue.add(1);
queue.add(2);
queue.add(3);

// console.log(queue);
// queue.remove();
console.log(queue);

console.log(queue.peek());
