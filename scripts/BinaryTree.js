import Node from './Node';

export default class BinaryTree {
  constructor () {
    this.root = null;
  }

  insert(data) {
    const node = new Node(data);

    if (this.root === null) {
      this.root = node;

    // we have a root
    } else {
      
      let currentNode = this.root;
      let inserted = false;
      let direction;

      while (!inserted) {

        if (data <= currentNode.data) {
          direction = 'left';

        } else {
          direction = 'right';
        }

        // direction = data <= currentNode.data ? 'left' : 'right';

        if (currentNode[ direction ]) {
          currentNode = currentNode[ direction ];

        } else {
          currentNode[ direction ] = node;
          inserted = true;
        }
      }

    }
  }

  // find left most node
  min() {
    if (!this.root) {
      return null;
    }

    let currentNode = this.root;

    // loop through nodes, until currentNode.left is null
    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode.data;
  }

  max() {
    if (!this.root) {
      return null;
    }
  }

  find(data) {
    let currentNode = this.root;

    // while we are still in our tree
    while (currentNode) {
      let direction;

      // is this the node we are looking for?
      if (currentNode.data === data) {
        return currentNode;
      }

      // if not which direction should we go?
      if (data < currentNode.data) {
        direction = 'left';

      } else {
        direction = 'right';
      }

      // move to next level
      currentNode = currentNode[ direction ];
    }

    // if element is not in tree, return null
    return null;
  }

  toArray() {
    return this.toArrayHelper(this.root);
  }

  toArrayHelper(node) {
    if (!node) {
      return [];
    }

    return [ 
      ...this.toArrayHelper(node.left), 
      node.data, 
      ...this.toArrayHelper(node.right) 
    ]
  }
}
