/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6] Zigzag Conversion
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (s.length == 1 || numRows == 1) return s;
  let res = "";
  let p = 0;
  for (let i = 0; i < numRows; i++) {
    p = i;
    while (p < s.length) {
      res += s[p];
      if (i > 0 && i < numRows - 1 && p + (numRows - i) * 2 - 2 < s.length) {
        res += s[p + (numRows - i) * 2 - 2];
      }
      p += numRows * 2 - 2;
    }
  }

  return res;
};
// @lc code=end

let s = "PAYPALISHIRING",
  numRows = 3;
console.log(convert(s, numRows));
