var rotate = function (nums, k) {
  k = k % nums.length;
  nums.reverse();

  for (let i = 0; i < Math.floor(k / 2); i++) {
    let temp = nums[k - i - 1];
    nums[k - i - 1] = nums[i];
    nums[i] = temp;
  }
  let n = nums.length;
  for (let i = 0; i < Math.floor((n - k) / 2); i++) {
    let temp = nums[n - i - 1];
    nums[n - i - 1] = nums[k + i];
    nums[k + i] = temp;
  }
};

let nums = [1, 2],
  k = 3;

console.log(rotate(nums, k));
