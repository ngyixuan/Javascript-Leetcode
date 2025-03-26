/*
 * @lc app=leetcode id=93 lang=javascript
 *
 * [93] Restore IP Addresses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  let res = [];

  function backtrack(start, path) {
    if (path.length == 4) {
      if (start == s.length) res.push(path.join('.'));
      return;
    }
    for (let i = 1; i <= 3; i++) {
      let subStr = s.substring(start, start + i);
      if (isValid(subStr)) {
        path.push(subStr);
        backtrack(start + i, path);
        path.pop();
      }
    }
  }

  function isValid(str) {
    if (str.length > 1 && str[0] === '0') return false;
    return Number(str) >= 0 && Number(str) <= 255;
  }

  backtrack(0, []);

  return res;
};
// @lc code=end

let s = '101023';
console.log(restoreIpAddresses(s));
