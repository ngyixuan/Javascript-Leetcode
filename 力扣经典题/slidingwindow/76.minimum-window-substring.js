/*
 * @lc app=leetcode id=76 lang=javascript
 *
 * [76] Minimum Window Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let res = "";
  let need = new Map();
  let window = new Map();
  let valid = 0;
  let left = 0;
  let right = 0;
  let len = Infinity;
  if (t.length > s.length) return res;
  for (let i = 0; i < t.length; i++) {
    need.set(t[i], (need.get(t[i]) || 0) + 1);
  }

  while (right < s.length) {
    let rightItem = s[right];
    right++;
    if (need.has(rightItem)) {
      window.set(rightItem, (window.get(rightItem) || 0) + 1);
      if (window.get(rightItem) === need.get(rightItem)) {
        valid++;
      }
    }
    while (valid === need.size) {
      let leftItem = s[left];
      if (right - left < len) {
        len = right - left;
        res = s.substring(left, right);
      }

      if (need.has(leftItem)) {
        if (window.get(leftItem) === need.get(leftItem)) {
          valid--;
        }
        window.set(leftItem, window.get(leftItem) - 1);
      }
      left++;
    }
  }
  return res;
};
// @lc code=end
let s = "ADOBECODEBANC",
  t = "ABC";
console.log(minWindow(s, t));
