export default class ZooKeeper {
  constructor(name) {
    this.name = name;
    this.fridge = {
      bamboo: 'plant',
      steak: 'meat',
      corn: 'plant',
      grass: 'plant',
      pork: 'meat',
      fruit: 'plant',
      zeebra: 'meat',
      alpaca: 'meat'
    };
  }

  sayHi() {
    return 'Hi my name is ' + this.name;
  }
}
