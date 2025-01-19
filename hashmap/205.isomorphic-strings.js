/*
 * @lc app=leetcode id=205 lang=javascript
 *
 * [205] Isomorphic Strings
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let sCharMap = new Map();
  let tCharMap = new Map();
  for (let i = 0; i < s.length; i++) {
    let schar = s[i];
    let tchar = t[i];
    if (sCharMap.has(schar) || tCharMap.has(tchar)) {
      if (sCharMap.get(schar) !== t[i] || tCharMap.get(tchar) !== s[i])
        return false;
    } else {
      sCharMap.set(schar, t[i]);
      tCharMap.set(tchar, s[i]);
    }
  }
  return true;
};
// @lc code=end
let s = "paper",
  t = "title";
console.log(isIsomorphic(s, t));
