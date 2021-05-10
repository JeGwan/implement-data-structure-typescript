class Stack<ElementType = any> {
  stack!: ElementType[];
  constructor() {
    this.stack = [];
  }
  push(element: ElementType) {
    this.stack.push(element);
  }
  pop() {
    return this.stack.pop();
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
}

export default Stack;
