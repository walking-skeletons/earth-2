class Human {
  constructor({firstName, lastName}, ...features) {
    this.firstName = firstName;
    this.lastName = lastName;
    return Object.assign(this, ...features);
  }

  sayHi() {
    console.log(`Hi I'm ${this.firstName} ${this.lastName}`);
  }
}

module.exports = {
  Human: Human
};
