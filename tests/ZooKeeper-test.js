import { expect } from 'chai';
import ZooKeeper from '../scripts/ZooKeeper';

describe('Zookeeper', () => {
  let zookeeper = new ZooKeeper('danger', 'human');

  it('should have a name and species', () => {
    expect(zookeeper.name).to.equal('danger');
    expect(zookeeper.species).to.equal('human');
  })
})
