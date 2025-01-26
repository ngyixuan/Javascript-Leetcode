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
      if (start == s.length) {
        res.push(path.join("."));
      }

      return;
    }
    for (let i = 1; i < 4; i++) {
      if (start + i > s.length) break;
      let sub = s.substring(start, start + i);
      if (isValid(sub)) {
        path.push(sub);
        backtrack(start + i, path);
        path.pop();
      }
    }
  }

  function isValid(num) {
    if (num.length > 1 && num[0] === "0") {
      return false;
    }

    return Number(num) >= 0 && Number(num) <= 255;
  }

  backtrack(0, []);

  return res;
};
// @lc code=end

let s = "101023";
console.log(restoreIpAddresses(s));
