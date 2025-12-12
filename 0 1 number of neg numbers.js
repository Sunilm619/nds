function negative_numbers_count(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}
let arr = [3, -5, -67, 9, -76, -54];
console.log(negative_numbers_count(arr));
