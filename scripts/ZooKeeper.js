export default class ZooKeeper {
  constructor(name) {
    this.name = name;
    this.fridge = {
      bamboo: 'plant',
      steak: 'meat',
      carrots: 'plant',
      grass: 'plant',
      pork: 'meat',
      fruit: 'plant',
      alpaca: 'meat',
      mollusks: 'meat'
    };
  }

  sayHi() {
    return 'Hi my name is ' + this.name;
  }
}
