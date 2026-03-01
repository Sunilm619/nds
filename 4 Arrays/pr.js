// function Remov_dup(arr) {
//   let pointer = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[pointer]) {
//       ++pointer;
//       arr[pointer] = arr[i];
//     }
//   }
//   return pointer + 1;
// }

// let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// console.log(Remov_dup(arr));

//p2#####################################################
// function remove_el(Inums, val) {
//   let pointer = 0;
//   for (let i = 0; i < Inums.length; i++) {
//     if (Inums[i] !== val) {
//       Inums[pointer] = Inums[i];
//       ++pointer;
//     }
//   }
//   return Inums;
// }

// let Inums = [0, 1, 2, 2, 3, 0, 4, 2, 9];
// let val = 2;
// console.log(remove_el(Inums, val));

//pr3####################################################
// function movezeros(nums) {
//   let pointer = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       nums[pointer] = nums[i];
//       ++pointer;
//     }
//   }

//   for (let i = pointer; i < nums.length; i++) {
//     nums[i] = 0;
//   }
//   return nums;
// }

// let nums = [1, 4, 6, 0, 7, 0, 8, 5];

// console.log(movezeros(nums));

//p4@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// function maxconsec(arr) {
//   let maxsum = 0;
//   let currsum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 1) {
//       ++currsum;
//       maxsum = Math.max(currsum, maxsum);
//     } else {
//       currsum = 0;
//     }
//   }
//   console.log(maxsum);
// }

// let arr = [1, 0, 1, 1, 0, 1, 1, 1, 0];
// maxconsec(arr);
