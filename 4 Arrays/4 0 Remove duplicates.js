let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

function remove_duplicates(nums) {
  let pointer = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[pointer]) {
      console.log(`i ${i}`);
      pointer++;
      console.log(`ponter ${pointer}`);
      nums[pointer] = nums[i];
    }
  }
  return pointer + 1;
}
console.log(remove_duplicates(nums));
