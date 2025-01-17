/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = [];
  let path = [];
  backtracking(n, n, path, res);

  return res;
};

var backtracking = function (left, right, path, res) {
  if (right < left) return;
  if (right < 0 || left < 0) return;
  if (left == 0 && right == 0) {
    res.push(path.join(""));
    return;
  }

  path.push("(");
  backtracking(left - 1, right, path, res);
  path.pop();

  path.push(")");
  backtracking(left, right - 1, path, res);
  path.pop();
};
// @lc code=end
let n = 3;
console.log(generateParenthesis(n));
