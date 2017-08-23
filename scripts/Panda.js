export default class Panda {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    return 'Hi my name is ' + this.name;
  }
}
