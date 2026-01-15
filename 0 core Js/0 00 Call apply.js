let obj1 = {
  name: "Sunil",
  age: 77,
  prinybio: function () {
    console.log(this.name, this.age, "@ line 5");
  },
};

obj1.prinybio();

//borrowing function for usage
let obj2 = {
  name: "SRyntu",
  age: 756,
};

obj1.prinybio.call(obj2); //obj2 passes as this i.e referring to oj2

//ex2 writing explicitly separate
let obj3 = {
  name: "Ramk",
  age: 56,
};

let biofunction = function (city, country) {
  console.log(this.name, this.age, city, country, "@ line ");
};

biofunction.call(obj3, "wgl", "india"); //obj3 --->this && "wgl" "india" as arguments in call
biofunction.apply(obj3, ["hnk", "uk"]); //ARGS AS ARRAY LIST
let stored = biofunction.bind(obj3, "wgl", "india"); //bind returns fun n stores in variables
console.log(stored);
stored();
