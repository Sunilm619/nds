let Arr1 = [2, 5, 8, 9, 0, 3];
function sumofallN(len) {
  if (len === 0) return Arr1[0];
  return Arr1[len] + sumofallN(len - 1);
}
console.log(sumofallN(Arr1.length - 1));
