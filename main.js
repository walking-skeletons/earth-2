const Human = require('./libs/Human').Human
const sayHello = require('./libs/sayhello')
const sayBye = require('./libs/saybye')


let bob = new Human({
  firstName: "Bob",
  lastName: "Morane"
}, sayHello, sayBye);

bob.sayHi();
bob.sayHello();
bob.sayBye();
