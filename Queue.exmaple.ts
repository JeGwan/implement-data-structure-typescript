import Queue from "./Queue";

let watingQueue = new Queue<string>();
watingQueue.enqueue("마동석");
console.log(watingQueue.front(), watingQueue.rear());
watingQueue.enqueue("홍길동");
console.log(watingQueue.front(), watingQueue.rear());
watingQueue.enqueue("김선달");
console.log(watingQueue.front(), watingQueue.rear());

while (watingQueue.front()) {
  console.log(watingQueue.dequeue());
}

console.log(watingQueue.front(), watingQueue.rear());
