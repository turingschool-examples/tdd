import { expect } from 'chai';
import ZooKeeper from '../scripts/ZooKeeper';

describe('Zookeeper', () => {
  let zookeeper = new ZooKeeper('Kevin');

  it('should have a name and species', () => {
    expect(zookeeper.name).to.equal('Kevin');
  })
})
