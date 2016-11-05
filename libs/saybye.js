function sayBye() {
  console.log(`Bye I'm ${this.firstName} ${this.lastName}`);
}
  
module.exports = {
  sayBye: sayBye
};
