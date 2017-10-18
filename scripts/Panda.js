export default class Panda {
  constructor(name, diet) {
    this.name = name;
    this.diet = diet;
  }

  sayHi() {
    return 'Hi my name is ' + this.name;
  }
}
