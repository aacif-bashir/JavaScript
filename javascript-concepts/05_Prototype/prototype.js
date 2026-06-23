// A prototype is an object associated with the every function in javascript. It serves as blueprint for which the object is created using that function we inherit the properties and methods.
// JavaScript uses prototype-based inheritance, meaning objects can access propertied and methods from their prototype.

function person(name){
    this.name = name
}
person.prototype.greet = function(){
    console.log(`Hey my name is ${this.name}`)
}
const p1 = new person("john")
p1.greet()
const p2 = new person("doe")
p2.greet()
