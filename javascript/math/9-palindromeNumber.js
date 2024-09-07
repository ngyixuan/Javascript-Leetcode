/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  let temp = x;
  let res = 0;
  while (temp > 0) {
    let lastNum = temp % 10;
    temp = Math.floor(temp / 10);
    res = res * 10 + lastNum;
  }
  return res === x;
};

// let x = 121
let x = 121;
console.log(isPalindrome(x));
