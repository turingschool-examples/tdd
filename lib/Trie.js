import Node from './Node';

export default class Trie {
  constructor() {
    this.root = new Node();
    this.completed = 0;
  }

  insert(data) {
    let letters = [...data];
    let currentNode = this.root;
    this.completed++;


    //create root letter
    //value of root letter should be first letter in array


    function createNodes(array) {
      
      if(array.length <= 1) {
        let child = letters.shift();
        currentNode[child] = new Node(child);
        currentNode[child].isCompleted = true;
        return;
      }

      let child = letters.shift();

      if(!currentNode[child]) {
        currentNode[child] = new Node(child);
      }
      
      currentNode = currentNode[child];

      createNodes(array);
    }

    createNodes(letters);

  }
}