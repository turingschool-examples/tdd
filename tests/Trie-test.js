import { expect } from 'chai';
import Node from '../lib/Node';
import Trie from '../lib/Trie';

describe.only('Trie', function() {
  let trie;

  beforeEach(() => {
    trie = new Trie;
  });

  it('should exist', () => {
    let node = new Node();
    expect(node).to.exist
    expect(trie).to.exist
  });

  it('should be have a default root of null', () => {
    expect(trie.root.data).to.equal(null);
  });

  it('should insert a word', () => {
    trie.insert('ardvark');
    expect(trie.root.a.data).to.equal('a');
    expect(trie.root.a.r.data).to.equal('r')
    expect(trie.root.a.r.d.data).to.equal('d');
    expect(trie.root.a.r.d.v.a.r.k.data).to.equal('k');
    expect(trie.root.a.r.d.v.a.r.k.isCompleted).to.equal(true);
  });

  it('should insert multiple words and increase completed count', () => {
    trie.insert('platypus');
    trie.insert('capybara');

    expect(trie.root.p.l.a.t.y.p.u.s.data).to.equal('s');
    expect(trie.root.p.l.a.t.y.p.u.s.isCompleted).to.equal(true);

    expect(trie.root.c.a.p.y.b.a.r.a.data).to.equal('a');
    expect(trie.root.c.a.p.y.b.a.r.a.isCompleted).to.equal(true);
  
    expect(trie.completed).to.be.equal(2);
  });

  it('should insert another word', () => {
    trie.insert('armadillo');
    trie.insert('ardvark');
    trie.insert('anteater');

    console.log(trie.root.a);
    // expect(trie.root.a).to.equal('o');
    // expect(trie.root.o.k.data).to.equal('k')
    // expect(trie.root.o.k.a.p.i.data).to.equal('i');
    // expect(trie.root.o.k.a.p.i.isCompleted).to.equal(true);
  });


})