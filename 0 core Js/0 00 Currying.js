//Fun currying can done by (i)bind method (ii)closures
let multiply_fun = function (x, y) {
  //here setting x=2 for multiply(2) by this
  //x=5 multiply(5)
  return x * y;
};
let multiply = multiply_fun(2, 4);
console.log(multiply); //Normal way of fun passing

let multy_2 = multiply_fun.bind(this, 2);
console.log(multy_2(6)); //curried function multiply_fun by freezing one variable or setting fixed variable
console.log(multy_2(7));
console.log(multy_2(8));

let multiply_5 = multiply_fun.bind(this, 5);
console.log(multiply_5(6));
console.log(multiply_5(7));
console.log(multiply_5(8));

//M2 closures

function multiplfy(x) {
  return function inner(y) {
    return x * y;
  };
  //   console.log("j");
}

let multy_by2 = multiplfy(2); //curryng fun by 2
console.log(multy_by2(8));
console.log(multy_by2(9));
console.log(multy_by2(10));

let multy_by3 = multiplfy(3); //curryng fun by 3
console.log(multy_by3(8));
console.log(multy_by3(9));
console.log(multy_by3(10));

let sum = function (a) {
  return function (b) {
    return b ? sum(a + b) : a;
  };
};

console.log(sum(2)(4)(8)(6)());
