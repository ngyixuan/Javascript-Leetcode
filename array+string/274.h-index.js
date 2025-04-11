/*
 * @lc app=leetcode id=274 lang=javascript
 *
 * [274] H-Index
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  citations.sort((a, b) => b - a);
  let h = 0;
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= i + 1) {
      h++;
    }
  }
  return h;
};
// @lc code=end
let citations = [3, 0, 6, 1, 5];
console.log(hIndex(citations));
