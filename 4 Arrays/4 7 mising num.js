function miwwing(nums) {
  let len = nums.length;
  let sum_series = (len * (len + 1)) / 2;

  let sum_series_giv = nums.reduce((e, b) => e + b);

  return Math.abs(sum_series_giv - sum_series);
}

let nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log(miwwing(nums));
