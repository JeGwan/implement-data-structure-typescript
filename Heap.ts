class Heap<ValueType = number> {
  heap!: ValueType[];
  constructor() {
    this.heap = [];
  }
  swapByIndex(i: number, j: number) {
    let temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }
  add(value: ValueType) {
    // 1. 힙의 끝에 원소를 삽입합니다.
    this.heap.push(value);
    // 2. 추가한 원소를 자신의 부모와 비교하고 부모가 가진 값이 더 작다면 서로 위치를 바꿉니다.
    // 3. 새로 추가된 원소보다 같거나 더 큰 부모를 만나거나, 루트에 도달할 때까지 반복합니다.
    let childIndex = this.heap.length - 1;
    let parentIndex = Math.floor(childIndex / 2);
    while (childIndex > 0 && this.heap[parentIndex] < this.heap[childIndex]) {
      this.swapByIndex(parentIndex, childIndex);
      childIndex = parentIndex;
      parentIndex = Math.floor(childIndex / 2);
    }
  }
  pop() {
    if (this.heap.length === 0) return;
    // 1. 최대 원소를 가져옵니다.
    const max = this.heap[0];
    // 2. 마지막 자식을 꺼내 root node로 덮어 씌웁니다.
    let last = this.heap.pop() as ValueType;
    if (this.heap.length === 0) return last;
    this.heap[0] = last;

    // 3. 두 자식 노드 중 더 큰 것과 바꿉니다.
    // 4. 바닥에 도달하거나 두 자식 노드가 모두 부모보다 같거나 작을 때까지 반복합니다.
    let targetIndex = 0;
    while (true) {
      let leftChildIndex = targetIndex * 2 + 1;
      if (this.heap[leftChildIndex] === undefined) break;

      let nextIndex = targetIndex;
      if (this.heap[targetIndex] < this.heap[leftChildIndex]) {
        nextIndex = leftChildIndex;
      }
      let rightChildIndex = targetIndex * 2 + 2;
      if (
        this.heap[rightChildIndex] !== undefined &&
        this.heap[nextIndex] < this.heap[rightChildIndex]
      ) {
        nextIndex = rightChildIndex;
      }
      if (targetIndex === nextIndex) break;
      this.swapByIndex(nextIndex, targetIndex);
      targetIndex = nextIndex;
    }
    return max;
  }
  size() {
    return this.heap.length;
  }
}
export default Heap;
