function singlenum(nums) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1;
    } else {
      ++hash[nums[i]];
    }
  }

  for (let j = 0; j < nums.length; j++) {
    if (hash[nums[j]] === 1) {
      console.log(nums[j]);
    }
  }
  //   console.log(hash.length);
}

let nums = [4, 1, 2, 1, 2];
singlenum(nums);
