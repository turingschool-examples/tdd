import { assert, expect } from 'chai';
import Panda from '../scripts/Panda';

describe('Panda functionality', () => {
  let po = new Panda('Po Ping', 'plant');

  it('should have a name and species', () => {
    expect(po.name).to.equal('Po Ping');
    expect(po.diet).to.equal('plant');
  });
})
