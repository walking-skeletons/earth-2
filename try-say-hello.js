const Human = require('./libs/Human').Human
const sayHello = require('./libs/sayhello').sayHello

let bob = new Human({
  firstName: "Bob",
  lastName: "Morane"
}, {sayHello:sayHello});

bob.sayHi();
bob.sayHello();
