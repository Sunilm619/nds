// function rec(num) {
//   if (num === 0) return;
//   console.log(num);
//   num = num - 1;
//   rec(num);
// }

// let num = 7;
// rec(num);

//func calling itself to solve smaller version of itself
//1 base case (when to stop condition) always add at top level else **********stack overfloewss
//2 recursive case (where fun calls itself)
let x = 7;

function fact(num) {
  if (num > x) {
    return;
  }
  console.log(num);
  fact(++num);
}

fact(1);
