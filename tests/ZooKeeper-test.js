import { expect } from 'chai';
import ZooKeeper from '../scripts/ZooKeeper';

describe('Zookeeper', () => {
  let danger = new ZooKeeper('danger', 'human');

  it('should have a name and species', () => {
    expect(danger.name).to.equal('danger');
    expect(danger.species).to.equal('human');
  })
})
