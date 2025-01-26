var majorityElement = function (nums) {
  let n = nums.length;
  let maxCount = 0;
  let item = 0;
  nums.sort((a, b) => a - b);
  let countMap = new Map();
  for (let item of nums) {
    countMap.set(item, (countMap.get(item) || 0) + 1);
  }
  console.log(countMap);

  for (let [key, value] of countMap) {
    if (value > maxCount) {
      maxCount = value;
      item = key;
    }
  }

  return item;
};

let nums = [2, 2, 1, 1, 1, 2, 2];
majorityElement(nums);
