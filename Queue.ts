import LinkedList from "./LinkedList";

class Queue<ElementType = any> {
  linkedList!: LinkedList<ElementType>;
  constructor() {
    this.linkedList = new LinkedList<ElementType>();
  }
  enqueue(element: ElementType) {
    // linkedList의 가장 마지막에 추가하므로 O(1)
    this.linkedList.insert(element);
  }
  dequeue() {
    // linkedList의 가장 앞의 것을 가져오고 제거하므로 O(1)
    if (this.linkedList.head) {
      let data = this.linkedList.head.data;
      this.linkedList.remove(0);
      return data;
    }
  }
  front() {
    return this.linkedList.head?.data;
  }
  rear() {
    return this.linkedList.tail?.data;
  }
}

export default Queue;
