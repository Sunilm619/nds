function largestnum(arr) {
  let largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
let arr = [3, 7, 9, 66, 889, 98];
let val = largestnum(arr);
console.log(val);
