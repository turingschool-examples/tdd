import Node from './Node';

export default class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  unshift(data) {
    let newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
  }
}
