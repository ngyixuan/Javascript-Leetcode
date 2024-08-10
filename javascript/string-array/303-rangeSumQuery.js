/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.preSum = new Array(nums.length + 1);
  this.preSum[0] = 0;
  for (let i = 1; i < this.preSum.length; i++) {
    this.preSum[i] = this.preSum[i - 1] + nums[i - 1];
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.preSum[right + 1] - this.preSum[left];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

let nums = [3, 5, 2, -1, 4, 1];
let newArr = new NumArray(nums);
let res = newArr.sumRange(0, 2);
console.log(res);
