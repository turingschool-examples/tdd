import { expect } from 'chai';
import ZooKeeper from '../scripts/ZooKeeper';
import Panda from '../scripts/Panda';

describe('Zookeeper', () => {
  let zookeeper = new ZooKeeper('Taylor');

  it('should have a name', () => {
    expect(zookeeper.name).to.equal('Taylor');
  })

  it.skip('should be able to add animals', () => {
    let po = new Panda('Po Ping', 27);

    zookeeper.addAnimal(po);

    expect(zookeeper.animals.length).to.equal(1);
    expect(zookeeper.animals).to.deep.equal([ po ]);
  });

  it.skip ('zookeeper should be able to grab food from inventory', () => {
    let food = zookeeper.grabFood('plant')

    expect(food).to.equal([
      {name: 'Bamboo', type: 'plant'},
      {name: 'Corn', type: 'plant' },
      {name: 'Seaweed', type: 'plant'},
      {name: 'Fruit', type: 'plant'}
    ]);
  })

  it.skip('zookeeper should be able to take inventory', () => {
    let fridgeInventory = zookeeper.takeFridgeInventory();

    expect(fridgeInventory).to.deep.equal({
      plant: [
        { name: 'Bamboo',   type: 'plant' },
        { name: 'Corn',     type: 'plant' },
        { name: 'Fruit',    type: 'plant' },
        { name: 'Seaweed',  type: 'plant' },
      ],
      meat: [
        { name: 'Steak',    type: 'meat' },
        { name: 'Pork',     type: 'meat' },
        { name: 'Poultry',  type: 'meat' },
        { name: 'Fish',     type: 'meat' },
      ]
    });
  })
})
