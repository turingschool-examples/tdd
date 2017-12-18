import { expect } from 'chai';
import Node from '../lib/Node';
import Trie from '../lib/Trie';

describe.only('Trie', function() {
  let trie;

  beforeEach(() => {
    trie = new Trie;
  });

  it('should exist', function() {
    let node = new Node();
    expect(node).to.exist
    expect(trie).to.exist
  })

  it('should be have a default root of null', function() {
    expect(trie.root.data).to.equal(null);
  })

  it('should insert a word', function() {
    trie.insert('ardvark');
    // console.log(trie);
    console.log(trie.root.a.r.d.v.a.r.k)
    expect(trie.root.a.data).to.equal('a');
    expect(trie.root.a.r.data).to.equal('r')
    expect(trie.root.a.r.d.data).to.equal('d');
    expect(trie.root.a.r.d.v.data).to.equal('v');
    expect(trie.root.a.r.d.v.a.data).to.equal('a');
    expect(trie.root.a.r.d.v.a.r.data).to.equal('r');
    expect(trie.root.a.r.d.v.a.r.k.data).to.equal('k');
    expect(trie.root.a.r.d.v.a.r.k.isCompleted).to.equal(true);






  })

})