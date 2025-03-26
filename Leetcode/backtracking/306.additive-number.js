/*
 * @lc app=leetcode id=306 lang=javascript
 *
 * [306] Additive Number
 */

// @lc code=start
/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function (num) {
  let n = num.length;
  for (let i = 1; i < n; i++) {
    //寻找第一个数字
    let first = num.substring(0, i);
    if (first.length > 1 && first[0] === '0') continue;
    for (let j = i + 1; j < n; j++) {
      //寻找第二个数字
      let second = num.substring(i, j);
      if (second.length > 1 && second[0] === '0') continue;
      let remaining = num.slice(j);
      if (isValid(first, second, remaining)) return true; //迭代寻找剩下的数字
    }
  }
  return false;

  function isValid(first, second, remaining) {
    if (remaining === '') return true;
    let sum = BigInt(first) + BigInt(second);
    // console.log(first, second, sum, remaining);
    if (!remaining.startsWith(sum.toString())) return false;
    return isValid(second, sum, remaining.slice(sum.toString().length));
  }
};
// @lc code=end
let num = '01123';
console.log(isAdditiveNumber(num));
