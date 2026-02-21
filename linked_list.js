class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  add(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

get(Index){
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === Index) {
        return current.data;
      }
      count++;
      current = current.next;
    }
    return null
}
insertAt(data, Index){
    const newNode = new Node(data);
    if (Index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      if (!this.tail) {
        this.tail = newNode;
      }
      return;
    }
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === Index - 1) {
        newNode.next = current.next;
        current.next = newNode;
        if (!newNode.next) {
          this.tail = newNode;
        }
        return;
      }
      count++;
      current = current.next;
    }
    throw new Error("Index out of bounds");
}


}
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
let result = list.get(2);
if(result !== null) {
  console.log(result);
} else {
  console.log("Index out of bounds");
}
console.log(list);
list.insertAt(4, 2);
 result = list.get(2);
if(result !== null) {
  console.log(result);
} else {
  console.log("Index out of bounds");
}