class Stack {
  constructor(stackSize = 10) {
    if (typeof stackSize !== "number" || isNaN(stackSize) || stackSize < 1) {
      throw new Error("Invalid maximum size for the stack");
    }
    this.stackSize = stackSize;
    this.arr = new Array();
  }
  push(el) {
    if (this.arr.length >= this.stackSize) {
      throw new Error("Stack is full");
    }
    this.arr.push(el);
  }
  pop() {
    if (this.arr.length == 0) {
      throw new Error("Stack is empty");
    }
    return this.arr.pop();
  }
  peek() {
    if (this.arr.length == 0) {
      throw new Error("Stack is empty");
    } else {
      return this.arr[this.arr.length - 1];
    }
  }
  isEmpty() {
    return this.arr.length === 0;
  }
  toArray() {
    return this.arr;
  }
  static fromIterible(arg) {
    if (arg?.[Symbol.iterator] instanceof Function) {
      const newStack = new Stack(arg.length);
      for (const elem of arg) {
        newStack.push(elem);
      }
      return newStack;
    } else {
      throw new Error("Is not iterable");
    }
  }
}