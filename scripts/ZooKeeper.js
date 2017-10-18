export default class ZooKeeper {
  constructor(name) {
    this.name = name;
    this.animals = [];
    this.fridge = {
      bamboo:   { name: 'Bamboo',   type: 'plant' },
      corn:     { name: 'Corn',     type: 'plant' },
      fruit:    { name: 'Fruit',    type: 'plant' },
      seaweed:  { name: 'Seaweed',  type: 'plant' },
      steak:    { name: 'Steak',    type: 'meat' },
      pork:     { name: 'Pork',     type: 'meat' },
      poultry:  { name: 'Poultry',  type: 'meat' },
      fish:     { name: 'Fish',     type: 'meat' },
    };
  }

  sayHi() {
    return 'Hi my name is ' + this.name;
  }
}
