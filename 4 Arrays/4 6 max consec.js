function maxconsec(arr) {
  let maxsum = 0;
  let currsum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      ++currsum;
      maxsum = Math.max(currsum, maxsum);
    } else {
      currsum = 0;
    }
  }
  return maxsum;
}

let arr = [1, 0, 1, 1, 0, 1, 1, 1, 0];
console.log(maxconsec(arr));
