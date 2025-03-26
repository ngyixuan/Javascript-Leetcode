/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let ransomMap = new Map();
  for (let char of magazine) {
    ransomMap.set(char, (ransomMap.get(char) || 0) + 1);
  }
  for (let char of ransomNote) {
    if (ransomMap.has(char) && ransomMap.get(char) > 0) {
      ransomMap.set(char, ransomMap.get(char) - 1);
    } else {
      return false;
    }
  }

  return true;
};
// @lc code=end
let ransomNote = "aa",
  magazine = "ab";
console.log(canConstruct(ransomNote, magazine));
