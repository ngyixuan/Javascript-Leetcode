var removeElement = function (nums, val) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    // Swap numbers if current number is not equal to val
    if (nums[i] !== val) {
      console.log("i", i, "j", j, "nums[j]", nums[j], "nums[i]", nums[i]);
      nums[j] = nums[i];
      j++;
    }
  }
  return j;
};
nums = [0, 1, 2, 2, 3, 0, 4, 2];
val = 2;
removeElement(nums, val);
