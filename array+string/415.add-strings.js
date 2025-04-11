/*
 * @lc app=leetcode id=415 lang=javascript
 *
 * [415] Add Strings
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let maxLen = num1.length > num2.length ? num1.length : num2.length;
  num1 = num1.padStart(maxLen, "0");
  num2 = num2.padStart(maxLen, "0");
  let sum = "";
  let carry = 0;
  for (let i = maxLen - 1; i >= 0; i--) {
    let temp = parseInt(num1[i]) + parseInt(num2[i]) + carry;
    if (temp > 9) {
      carry = Math.floor(temp / 10);
    } else {
      carry = 0;
    }
    temp %= 10;
    sum = temp + sum;
  }
  if (carry > 0) {
    sum = carry + sum;
  }
  return sum;
};
// @lc code=end

let num1 = "1999",
  num2 = "9999";
console.log(addStrings(num1, num2));
