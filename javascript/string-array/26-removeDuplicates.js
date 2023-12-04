var removeDuplicates = function (nums) {
  j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i == nums.length - 1) {
      nums[j] = nums[i];
    }
    if (nums[i] !== nums[i + 1]) {
      nums[j] = nums[i];
      j++;
    }
  }
  return j;
};

nums = [1];
console.log(removeDuplicates(nums));
