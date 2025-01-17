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
  let carry = 0;
  let newStr = "";

  let maxLen = Math.max(num1.length, num2.length);
  num1 = num1.padStart(maxLen, "0");
  num2 = num2.padStart(maxLen, "0");

  for (let i = maxLen - 1; i >= 0; i--) {
    let temp = parseInt(num1[i]) + parseInt(num2[i]) + carry;
    carry = Math.floor(temp / 10);
    newStr = (temp % 10) + newStr;
  }

  if (carry) {
    newStr = carry + newStr;
  }

  return newStr;
};

let num1 = "456";
let num2 = "77";
console.log(addStrings(num1, num2));
// @lc code=end
