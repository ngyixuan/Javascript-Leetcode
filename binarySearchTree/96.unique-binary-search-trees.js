/*
 * @lc app=leetcode id=96 lang=javascript
 *
 * [96] Unique Binary Search Trees
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  let memo = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  function count(lo, hi) {
    if (lo >= hi) return 1;
    if (memo[lo][hi] !== 0) return memo[lo][hi];
    let res = 0;
    for (let mid = lo; mid <= hi; mid++) {
      let left = count(lo, mid - 1);
      let right = count(mid + 1, hi);
      res += left * right;
    }
    memo[lo][hi] = res;
    console.log(memo);
    return res;
  }
  return count(1, n);
};
// @lc code=end
console.log(numTrees(3));
