/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let fartest = 0;
  let jump = 0;
  let end = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    fartest = Math.max(fartest, nums[i] + i);
    if (end === i) {
      end = fartest;
      jump++;
    }
  }

  return jump;
};
let nums = [2, 3, 1, 1, 4];
console.log(jump(nums));
