/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let slow, fast;
  slow = 0;
  fast = 0;
  while (fast < nums.length) {
    if (nums[fast] != val) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }
  return slow;
};

let nums = [3, 2, 2, 3];
let val = 3;
console.log(removeElement(nums, val));
