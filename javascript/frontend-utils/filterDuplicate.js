function filterDuplicate(nums) {
  console.log([...new Set([...nums])]);
  console.log(nums.filter((item, index) => nums.indexOf(item) === index));
  let newMap = new Map();
  nums.forEach((item) => newMap.set(item, true));
  console.log([...newMap.keys()]);
}
let nums = [1, 2, 2, 3, 3, 1, 4];
filterDuplicate(nums);
