export default class ZooKeeper {
  constructor(name) {
    this.name = name;
    this.animals = [];
    this.fridge = {
      { name: 'Bamboo',   type: 'plant' },
      { name: 'Corn',     type: 'plant' },
      { name: 'Fruit',    type: 'plant' },
      { name: 'Seaweed',  type: 'plant' },
      { name: 'Steak',    type: 'meat' },
      { name: 'Pork',     type: 'meat' },
      { name: 'Poultry',  type: 'meat' },
      { name: 'Fish',     type: 'meat' },
    };
  }

  sayHi() {
    return 'Hi my name is ' + this.name;
  }
}
