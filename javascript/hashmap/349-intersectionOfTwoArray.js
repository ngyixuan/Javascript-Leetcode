/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  smallerNums = nums1.length > nums2.length ? nums2 : nums1;
  largerSet = new Set(nums1.length > nums2.length ? nums1 : nums2);

  resultSet = new Set();

  for (let index = 0; index < smallerNums.length; index++) {
    if (largerSet.has(smallerNums[index])) {
      resultSet.add(smallerNums[index]);
    }
  }

  return Array.from(resultSet);
};

nums1 = [1, 2];
nums2 = [1, 1];
console.log(intersection(nums1, nums2));
