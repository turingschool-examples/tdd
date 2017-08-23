import { assert, expect } from 'chai';
import Panda from '../scripts/Panda';

describe('Panda functionality', () => {
  let po = new Panda('Po Ping', 27);

  it('should have a name and species', () => {
    expect(po.name).to.equal('Po Ping');
    expect(po.age).to.equal(27);
  });
})
