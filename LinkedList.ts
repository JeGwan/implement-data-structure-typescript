class LinkedListNode<ElementType = any> {
  data!: ElementType;
  next!: LinkedListNode<ElementType> | null;
  constructor(data: ElementType) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList<ElementType = any> {
  head: LinkedListNode<ElementType> | null = null;
  tail: LinkedListNode<ElementType> | null = null;
  size = 0;
  // index가 들어오지 않으면 가장 마지막 node 뒤에 추가한다.
  insert(data: ElementType, index?: number) {
    const node = new LinkedListNode(data);
    if (index === undefined) {
      if (this.tail) {
        // 마지막에 추가하고 tail을 업데이트
        this.tail.next = node;
        this.tail = this.tail.next;
        this.size++;
      } else {
        // 아무것도 없는 상태이므로
        this.head = this.tail = node;
        this.size++;
      }
    } else {
      if (index < 0) throw Error("인덱스는 0 이상이어야 합니다.");
      if (index === 0) {
        node.next = this.head;
        this.head = node;
        this.size++;
        return;
      }
      const prev = this.getNode(index - 1);
      if (prev) {
        node.next = prev.next;
        prev.next = node.next;
        this.size++;
      } else {
        throw Error("해당 index 앞에 node가 존재하지 않습니다.");
      }
    }
  }
  remove(index: number) {
    if (index < 0) throw Error("인덱스는 0 이상이어야 합니다.");
    if (index === 0) {
      // index가 0
      if (this.head) {
        if (this.head.next) {
          this.head = this.head.next;
        } else {
          this.tail = this.head = null;
        }
        this.size--;
      }
    } else {
      // index가 0 이상
      const prev = this.getNode(index - 1);
      if (prev) {
        if (prev.next) {
          if (prev.next.next) {
            // prev.next.next로 땡겨만옴
            prev.next = prev.next.next;
            this.size--;
          } else {
            // prev.next는 끝이었음
            prev.next = prev.next.next;
            this.tail = prev;
            this.size--;
          }
        }
      }
    }
  }
  getNode(index: number) {
    if (index < 0) throw Error("인덱스는 0 이상이어야 합니다.");
    let current = this.head;
    while (index > 0) {
      if (current) {
        current = current.next;
        index--;
      } else {
        return null;
      }
    }
    return current;
  }
  get(index: number): ElementType | null {
    if (index < 0) throw Error("인덱스는 0 이상이어야 합니다.");
    let current = this.head;
    while (index > 0) {
      if (current) {
        current = current.next;
        index--;
      } else {
        return null;
      }
    }
    return current ? current.data : null;
  }
  toString() {
    let str = "[";
    let current = this.head;
    while (current) {
      str += (str.length > 1 ? "," : "") + current.data;
      current = current.next;
    }
    str += "]";
    return str;
  }
}

export default LinkedList;
