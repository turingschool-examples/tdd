import Node from './Node';

export default class LinkedList {
  constructor () {
    this.length = 0;
    this.head = null;
  }

  unshift(data) {
    this.length++;

    if (!this.head) {
      this.head = new Node(data);
    } else {
      let newHead = new Node(data);

      newHead.next = this.head;
      this.head = newHead;
    }
  }

  shift() {
    this.length--;

    if (!this.head) {
      return null;
    } else {
      let removedHead = this.head;

      if (this.head.next) {
        this.head = this.head.next;
      } else {
        this.head = null;
      }

      return removedHead;
    }
  }

  push(data) {
    this.length++;

    if (!this.head) {
      this.head = new Node(data);
    } else {
      let currNode = this.head;

      while (currNode.next) {
        currNode = currNode.next;
      }

      currNode.next = new Node(data);
    }
  }

  pop() {
    if (!this.head) {
      return null;
    } else {
      this.length--;

      if (!this.head.next) {
        let removedHead = this.head;

        this.head = null;
        return removedHead;
      } else {
        let currNode = this.head;

        while (currNode.next.next) {
          currNode = currNode.next;
        }

        let lastNode = currNode.next;

        currNode.next = null;

        return lastNode;
      }
    }
  }

  find(data) {
    let foundNode = null;
    let currNode = this.head;

    while (currNode) {
      if (currNode.data === data) {
        foundNode = currNode;
        break;
      } else {
        currNode = currNode.next;
      }
    }

    return foundNode;
  }

  delete(data) {
    if (this.head.data === data) {
      this.length--;
      this.head = null;
    }

    let currNode = this.head;

    while (currNode) {
      if (currNode.data === data) {
        currNode = null;
        this.length--;
        // break;
      } else {
        currNode = currNode.next;
      }
    }
  }
}
