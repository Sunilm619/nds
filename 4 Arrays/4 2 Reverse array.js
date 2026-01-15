function Reverse_array(arr) {
  let l = arr.length;

  for (let i = 0; i < Math.floor(l / 2); i++) {
    let tmp = arr[i];
    arr[i] = arr[l - 1 - i];
    arr[l - 1 - i] = tmp;
  }

  return arr;
}
let arr = ["h", "e", "l", "l", "o"];
console.log(Reverse_array(arr));
