/*
 * @lc app=leetcode id=30 lang=javascript
 *
 * [30] Substring with Concatenation of All Words
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  let wordsLen = words.length * words[0].length;
  let wordLen = words[0].length;
  let res = [];
  let need = new Map();

  for (let item of words) {
    need.set(item, (need.get(item) || 0) + 1);
  }
  for (let right = 0; right < s.length - wordsLen + 1; right++) {
    let valid = 0;
    let window = new Map();
    let subItem = s.slice(right, right + wordsLen);
    for (let i = 0; i < wordsLen; i += wordLen) {
      let item = subItem.slice(i, i + words[0].length);
      window.set(item, (window.get(item) || 0) + 1);
      if (need.get(item) === window.get(item)) {
        valid++;
      }
      if (valid == need.size) {
        res.push(right);
      }
    }
  }

  return res;
};
// @lc code=end
let s = "wordgoodgoodgoodbestword",
  words = ["word", "good", "best", "word"];
console.log(findSubstring(s, words));
