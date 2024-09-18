/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (s.length == 1 || numRows == 1) return s;
  let fast = 0;
  let res = "";
  for (let i = 0; i < numRows; i++) {
    fast = i;
    while (fast < s.length) {
      res += s[fast];
      if (i > 0 && i < numRows - 1 && fast + (numRows - i) * 2 - 2 < s.length) {
        res += s[fast + (numRows - i) * 2 - 2];
      }
      fast += numRows * 2 - 2;
    }
  }

  return res;
};
let s = "A",
  numRows = 1;
console.log(convert(s, numRows));
