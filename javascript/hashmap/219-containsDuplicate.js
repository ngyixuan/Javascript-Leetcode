var containsNearbyDuplicate = function (nums, k) {
  let numberMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (numberMap.has(nums[i])) {
      let idx = i - numberMap.get(nums[i]);
      if (idx <= k) return true;
    }

    numberMap.set(nums[i], i);
    console.log(numberMap);
  }
  return false;
};
let nums = [1, 0, 1, 1],
  k = 1;
console.log(containsNearbyDuplicate(nums, k));
