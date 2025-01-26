function subarraySum(nums, k) {
  // write code here
  let count = 0;
  let sum = 0;
  let prefixSum = new Map();
  prefixSum.set(0, 1);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (prefixSum.has(sum - k)) {
      count += prefixSum.get(sum - k);
    }
    prefixSum.set(sum, (prefixSum.get(sum) || 0) + 1);
  }

  return count;
}
let nums = [1, 2, 3];
let k = 5;
console.log(subarraySum(nums, k));
