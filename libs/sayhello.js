function sayHello() {
  console.log(`Hello I'm ${this.firstName} ${this.lastName}`);
}

module.exports = {
  sayHello: sayHello
};
