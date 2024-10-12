/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let sb = [];
  let regrex = /[a-zA-Z0-9]/;
  s.split("").forEach((item) => {
    if (regrex.test(item)) sb.push(item.toLowerCase());
  });

  if (sb.length <= 1) return true;
  let start = 0;
  let end = sb.length - 1;
  while (start < end) {
    if (sb[start] === sb[end]) {
      start++;
      end--;
    } else {
      return false;
    }
  }
  return true;
};
let s = "aa";
console.log(isPalindrome(s));
