class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length == 0) return "Underflow";
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length == 0;
  }

  printStack() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) str += this.items[i] + " ";
    return str;
  }
}

let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);

console.log("Stack elements:", stack.printStack());
console.log("Stack size:", stack.size());
console.log("Top element:", stack.peek());
console.log("Popped element:", stack.pop());
console.log("Stack elements after popping:", stack.printStack());
