import { expect } from 'chai';
import Animal from '../scripts/Animal';

describe('Animal', () => {
  let rabbit = new Animal('limbo', 'rabbit', 'plant');

  it('should have a name and species', () => {
    expect(rabbit.name).to.equal('limbo');
    expect(rabbit.species).to.equal('rabbit');
  })
})
