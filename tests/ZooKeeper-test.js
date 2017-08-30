import { expect } from 'chai';
import ZooKeeper from '../scripts/ZooKeeper';

describe('Zookeeper', () => {
  let zookeeper = new ZooKeeper('Kevin');

  it('should have a name and species', () => {
    expect(zookeeper.name).to.equal('Kevin');
  })

  it.skip('should be able to add animals', () => {
    let po = new Panda('Po Ping', 27);

    zookeeper.addAnimal(po);

    expect(zookeeper.animals.length).to.equal(1);
    expect(zookeeper.animals).to.deep.equal([ po ]);
  });

  it.skip('zookeeper should be able to grab food from inventory', {
    let food = zooKeeper.grabFood(‘plant’)

    expect(food).to.equal('bamboo');
  })

  it.skip('zookeeper should be able to take inventory', {
    let fridgeInventory = zookeeper.takeFridgeInventory();

    expect(fridgeInventory).to.deep.equal({
      plant: 4,
      meat: 4
    });
  })
})
