var rotate = function (nums, k) {
  let i = 0;
  let j = nums.length - 1;
  k = k % nums.length;

  reverse(nums, i, j);
  reverse(nums, 0, k - 1);

  reverse(nums, k, j);
  console.log(nums);
};
function reverse(nums, i, j) {
  console.log(nums, i, j);
  while (i < j) {
    temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
    i++;
    j--;
  }
}
nums = [1, 2];
k = 3;

rotate(nums, k);
