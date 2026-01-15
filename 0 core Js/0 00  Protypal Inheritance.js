//open prototypal.hmtl
//sahring properties of array objects funcs by
//protypes js objs created so js engine automatcally attaches object so we acces by .

let arr1 = [1, 8, 80, 5];

console.log(arr1.__proto__);
console.log(Array.prototype);
console.log(arr1.__proto__.__proto__); //Array ----> Object
console.log(Object.prototype);
console.log(arr1.__proto__.__proto__.__proto__); //Array--->Object---->null
console.log(Object.prototype); //everything in js are objects

let fn = function () {};
console.log(fn.__proto__);
console.log(Function.prototype);
console.log(fn.__proto__.__proto__);
console.log(Object.prototype);
console.log(fn.__proto__.__proto__.__proto__);

let obj = {
  name: "sunil",
  age: 33,
  profession: "Agty",
  printbio: function () {
    return this.name + " " + this.age + " " + this.profession;
  },
};

console.log(obj.printbio());

console.log(obj.__proto__);
console.log(Object.prototype); //object

console.log(obj.__proto__.__proto__); //Objectr---->null
console.log(Object.prototype);

let obj1 = {
  name: "sunil",
  age: 33,
  profession: "Agty",
  printbio: function () {
    return this.name + " " + this.age + " " + this.profession;
  },
};

//intentionally chaning method
let obj2 = {
  name: "Rama",
};
obj2.__proto__ = obj1;
obj2.printbio();

Function.prototype; //to set all funcs
