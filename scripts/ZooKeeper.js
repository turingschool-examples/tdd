export default class ZooKeeper {
  constructor(name, species) {
    this.name = name;
    this.species = species;
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
}
