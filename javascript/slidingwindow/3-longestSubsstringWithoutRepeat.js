/**
 * @param {string} s
 * @return {number}i
 */
var lengthOfLongestSubstring = function (s) {
  let window = new Map();
  let left = 0;
  let count = 0;
  for (let right = 0; right < s.length; right++) {
    window.set(s[right], (window.get(s[right]) || 0) + 1);
    while (window.get(s[right]) > 1) {
      window.set(s[left], window.get(s[left]) - 1);
      left++;
    }
    count = Math.max(count, right - left + 1);
  }

  return count;
};
let s = "bbbbb";

console.log(lengthOfLongestSubstrng(s));
