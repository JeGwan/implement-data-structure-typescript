import LinkedList from "./LinkedList";

const linkedList = new LinkedList<number>();

linkedList.insert(3);
console.log(
  linkedList.toString(),
  linkedList.head?.data,
  linkedList.tail?.data
);
linkedList.insert(5);
console.log(
  linkedList.toString(),
  linkedList.head?.data,
  linkedList.tail?.data
);
linkedList.insert(7);
console.log(
  linkedList.toString(),
  linkedList.head?.data,
  linkedList.tail?.data
);

console.log(linkedList.get(0));
console.log(linkedList.get(1));
console.log(linkedList.get(2));
console.log(linkedList.get(3));

linkedList.remove(linkedList.size - 1);
console.log(
  linkedList.toString(),
  linkedList.head?.data,
  linkedList.tail?.data
);
linkedList.remove(linkedList.size - 1);
console.log(
  linkedList.toString(),
  linkedList.head?.data,
  linkedList.tail?.data
);
linkedList.remove(linkedList.size - 1);
console.log(
  linkedList.toString(),
  linkedList.head?.data,
  linkedList.tail?.data
);

linkedList.insert(9);
console.log(
  linkedList.toString(),
  linkedList.head?.data,
  linkedList.tail?.data
);
linkedList.insert(2);
console.log(
  linkedList.toString(),
  linkedList.head?.data,
  linkedList.tail?.data
);
linkedList.insert(1);
console.log(
  linkedList.toString(),
  linkedList.head?.data,
  linkedList.tail?.data
);
