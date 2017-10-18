export default class ZooKeeper {
  constructor(name) {
    this.name = name;
    this.animals = [];
    this.fridge = {
      { name: 'bamboo',   type: 'plant' },
      { name: 'corn',     type: 'plant' },
      { name: 'fruit',    type: 'plant' },
      { name: 'seaweed',  type: 'plant' },
      { name: 'steak',    type: 'meat' },
      { name: 'pork',     type: 'meat' },
      { name: 'poultry',  type: 'meat' },
      { name: 'fish',     type: 'meat' },
    };
  }

  sayHi() {
    return 'Hi my name is ' + this.name;
  }
}
