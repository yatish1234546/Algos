class Stack {
  constructor() {
    this.data = [];
  }

  add(element) {
    this.data.push(element);
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

export default Stack;
