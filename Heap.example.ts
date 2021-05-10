import Heap from "./Heap";

const heap = new Heap();

heap.add(1);
heap.add(3);
heap.add(3);
heap.add(4);
heap.add(6);
heap.add(7);
heap.add(8);
heap.add(9);

/*
  expected tree
        9
     8      4
   7  1   3  3

  by array
  [9, 8, 4, 7, 1, 3, 3, 6]
*/

console.log(heap.heap);

while (heap.size()) {
  console.log(heap.pop());
}
/*
  expected tree
  9->8->7->6->3->3->4->1
*/
