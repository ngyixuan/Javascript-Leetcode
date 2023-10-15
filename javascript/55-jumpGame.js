var canJump = function (nums) {
  maximumJump = 0;
  oldMax = 0;
  count = 0;

  if (nums.length == 1) {
    return count;
  }
  for (let i = 0; i < nums.length - 1; i++) {
    if (i + nums[i] >= maximumJump) {
      maximumJump = i + nums[i];
    }
    if (i == oldMax) {
      count++;
      oldMax = maximumJump;
    }
  }
  return count;
};

// var jump = function (nums) {
//   let maxMove = 0;
//   let oldMove = 0;
//   let jump = 0;

//   for (let i = 0; i < nums.length - 1; i++) {
//     // Keeping track of the max jump
//     maxMove = Math.max(maxMove, i + nums[i]);

//     // When we get to the index where we had our previous max jump, we increase our jump count by 1
//     if (i == oldMove) {
//       console.log(i, oldMove, maxMove);

//       jump++;
//       oldMove = maxMove;
//     }
//   }

//   return jump;
// };
// nums = [2, 5, 0, 0];
// nums = [2, 3, 0, 1, 4];
// nums = [2, 3, 1, 1, 4];
// nums = [3, 2, 1, 0, 4];
// nums = [7, 0, 9, 6, 9, 6, 1, 7, 9, 0, 1, 2, 9, 0, 3];
// nums = [0];
nums = [2, 3, 1, 1, 4];
// nums = [2, 0, 0];
console.log(canJump(nums));
