const Human = require('./libs/Human').Human
const sayBye = require('./libs/saybye')

let bob = new Human({
  firstName: "Bob",
  lastName: "Morane"
}, sayBye);

bob.sayHi();
bob.sayBye();
