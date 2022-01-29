console.log(global === this); //false
console.log(module === this); //false


console.log(module.exports === this); //true
this.sayHi = function (){
 console.log('hi');   
}