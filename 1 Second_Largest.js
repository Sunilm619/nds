function secondlargest(arr) {
  let first_largest = -Infinity;
  let second_largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first_largest) {
      second_largest = first_largest;
      first_largest = arr[i];
    } else if (arr[i] > second_largest) {
      second_largest = arr[i];
    }
  }
  return second_largest;
}
let arr = [3, 7, 9, 66, 889, 98];
let val = secondlargest(arr);
console.log(val);
