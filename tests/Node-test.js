import { expect } from 'chai';
import Node from '../lib/Node';

describe('Node', function() {
  let node;

  beforeEach(() => {
    node = new Node();
  });

  it('should be a thing', () => {
    expect(node).to.exist
  });

  it('should accept data', () => {
    node = new Node('apple')
    expect(node.data).to.equal('apple');
  });

  it('should have a default of null for the child and false for the isCompleted properties', function() {
    node = new Node('grape');
    expect(node.child).to.equal(null);
    expect(node.isCompleted).to.equal(false);

  })

})