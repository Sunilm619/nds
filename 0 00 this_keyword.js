//open this.html first for browsre interavtion bcs this behaves diff in cases

"use strict";

// case1 in global obj behaviour ans:window obj in browser && global obj in node, in phones diff //
console.log(this);

// case2  inside function (i)with strict (ii)without strict && (iii) depends on how fun called mainly
function x() {
  console.log(this);
}
x(); //undefined ##stict     //window ##non strict
window.x(); //window bcs fun called differently i.e referencing to obj ## strict this substitution //window ##non strict

//op is undefined or null using strict mode && if same fun called using window.x() this substituiton happens
//undefined------>window or global obj happens

// case3 obj
//methods are functions only we pronunce in obj
let obj1 = {
  name: "Sunil",
  age: 55,
  profile: function () {
    console.log(this);
  },
};

obj1.profile(); //this refers to obj1 diredtly bcs where profilee is located XX not arrow fun

// case4 call apply bind sharing funcs or methods
let obj_Main = {
  name: "Sunil",
  age: 55,
  profile: function () {
    console.log(this.name, " ", this.age);
  },
};

let obj3 = {
  name: "Manga",
  age: 25,
};

obj_Main.profile.call(obj3); //obj3 now this pointing and borrowed profile fuun to re use logic //y apply bind

// case5 arrow functions bcs it focus grandparent or lexical env (top)
let arrow_fun = () => {
  console.log(`jhhhj ${this}`);
};
arrow_fun();
// /Arrow functions do not have their own this.Instead, they use lexical this → meaning they take this from the surrounding scope where they are defined.

let obj_arrow = {
  name: "Sunil",
  age: 55,
  profile: () => {
    console.log(this);
  },
};

obj_arrow.profile(); //op:window bcs profile-->obj_arrow but arrow in global or window
//******profile is method  arrow fun is method of obj
let obj_arrow2 = {
  name: "Sunil",
  age: 55,
  x: function () {
    let y = () => {
      console.log(this);
    };
    y();
  },
};

obj_arrow2.x(); //y is method of obj_arr but it is part of x located in obj so op:oj

// case1
