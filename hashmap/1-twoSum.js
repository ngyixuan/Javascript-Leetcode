var twoSum = function (nums, target) {
  let valToIndex = new Map();
  for (let i = 0; i < nums.length; i++) {
    let need = target - nums[i];
    if (valToIndex.has(need)) {
      return [i, valToIndex.get(need)];
    } else {
      valToIndex.set(nums[i], i);
    }
  }
};

let nums = [2, 7, 11, 15],
  target = 9;
console.log(twoSum(nums, target));
