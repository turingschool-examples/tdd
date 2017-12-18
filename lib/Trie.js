import Node from '../lib/Node';

export default class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(data) {
    let letters = [...data];
    let currentNode = this.root;

    //create root letter
    //value of root letter should be first letter in array


    function createNodes(array) {
      if(array.length <= 1) {
        let child = letters.shift();
        currentNode[child] = new Node(child);
        currentNode[child].isCompleted = true;
        currentNode = currentNode[child];
        return;
      }

      let child = letters.shift();
      currentNode[child] = new Node(child);
      currentNode = currentNode[child];
      createNodes(array);
    }

    createNodes(letters);

  }
}

    //   letters.forEach( (letter, i) => {
    //     if(i === 0) {
    //       this.root[letter] = letter; 
    //       this.root.letter = new Node(letter);
    //     }
    // });