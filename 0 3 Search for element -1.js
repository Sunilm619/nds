function search_element(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === k) {
      return i;
    }
  }
  return -1;
}
let arr = [3, 5, 67, 9, 76, 54];
let k = 67;
console.log(search_element(arr, k));
