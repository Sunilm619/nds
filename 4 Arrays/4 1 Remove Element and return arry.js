function Remove_element(arr, val) {
  let c = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== val) {
      arr[c] = arr[i];
      c++;
    }
  }
  return c;
}
let arr = [2, 4, 3, 5, 6, 3, 8];
let val = 3;
console.log(Remove_element(arr, val));
