/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let numSet = new Set();
  let longest = 0;
  for (let num of nums) {
    numSet.add(num);
  }
  for (let num of numSet) {
    if (numSet.has(num - 1)) continue;
    let currlen = 1;
    let curr = num;
    while (numSet.has(curr + 1)) {
      currlen += 1;
      curr += 1;
    }

    longest = Math.max(longest, currlen);
  }

  return longest;
};
let nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
console.log(longestConsecutive(nums));
