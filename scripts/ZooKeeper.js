export default class ZooKeeper {
  constructor(name) {
    this.name = name;
    this.fridge = {
      bamboo: 'plant',
      steak: 'meat',
      corn: 'plant',
      seaweed: 'plant',
      pork: 'meat',
      fruit: 'plant',
      poultry: 'meat',
      fish: 'meat'
    };
    this.animals = [];
  }

  sayHi() {
    return 'Hi my name is ' + this.name;
  }
}
