import Stack from "./Stack";

const stack = new Stack<string>();

stack.push("LIFO");
stack.push("is");
stack.push("stack");

while (stack.peek()) {
  console.log(stack.pop());
}
