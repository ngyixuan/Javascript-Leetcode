/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  const sumMap = new Map();
  let count = 0;
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      let twoSum = nums1[i] + nums2[j];
      sumMap.set(twoSum, (sumMap.get(twoSum) || 0) + 1);
    }
  }
  for (let i = 0; i < nums3.length; i++) {
    for (let j = 0; j < nums4.length; j++) {
      let twoSum = nums3[i] + nums4[j];
      count += sumMap.get(0 - twoSum) || 0;
    }
  }
  return count;
};
nums1 = [1, 2];
nums2 = [-2, -1];
nums3 = [-1, 2];
nums4 = [0, 2];

fourSumCount(nums1, nums2, nums3, nums4);
