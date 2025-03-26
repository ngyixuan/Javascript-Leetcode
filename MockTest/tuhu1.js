function searchInsert(nums, target) {
  // write code here
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}

let nums = [0, 3, 4, 8];
let target = 2;
searchInsert(nums, target);
